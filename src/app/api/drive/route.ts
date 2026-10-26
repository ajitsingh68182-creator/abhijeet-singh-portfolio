import { NextRequest, NextResponse } from "next/server";
import { portfolioProjects, ProjectItem } from "@/data/projectsData";
import { googleDriveFolders } from "@/data/driveFoldersConfig";

interface GoogleDriveFile {
  id: string;
  name: string;
  mimeType: string;
  thumbnailLink?: string;
  webViewLink?: string;
  webContentLink?: string;
  size?: string;
  videoMediaMetadata?: {
    width?: number;
    height?: number;
    durationMillis?: string;
  };
}

interface GoogleDriveListResponse {
  files?: GoogleDriveFile[];
  nextPageToken?: string;
  error?: {
    code: number;
    message: string;
  };
}

/**
 * GET /api/drive
 * Supported query params:
 * - category: filter by categorySlug (e.g. 'real-estate', 'wedding')
 * - folderId: fetch files for a specific folder ID
 * - sync: if true and GOOGLE_DRIVE_API_KEY is present, queries Google Drive API v3
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const folderId = searchParams.get("folderId");
  const apiKey = process.env.GOOGLE_DRIVE_API_KEY;

  // 1. If folderId or sync is requested AND an API key is configured, query Google Drive API v3
  if (apiKey && folderId) {
    try {
      const driveApiUrl = `https://www.googleapis.com/drive/v3/files?q='${encodeURIComponent(
        folderId
      )}'+in+parents+and+trashed=false&fields=nextPageToken,files(id,name,mimeType,thumbnailLink,webViewLink,videoMediaMetadata,size)&pageSize=100&key=${apiKey}`;

      const res = await fetch(driveApiUrl, {
        headers: { Accept: "application/json" },
        next: { revalidate: 3600 }, // Cache for 1 hour
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        return NextResponse.json(
          {
            error: "Google Drive API error",
            details: errorData,
            fallbackUsed: true,
            projects: getFilteredLocalProjects(category, folderId),
          },
          { status: 200 }
        );
      }

      const data: GoogleDriveListResponse = await res.json();
      const files = data.files || [];

      // Filter out macOS sidecar files and non-video files
      const videoFiles = files.filter(
        (f) =>
          !f.name.startsWith("._") &&
          (f.mimeType.startsWith("video/") || f.name.toLowerCase().endsWith(".mp4") || f.name.toLowerCase().endsWith(".mov"))
      );

      const matchedFolder = googleDriveFolders.find((f) => f.id === folderId);

      const dynamicProjects: ProjectItem[] = videoFiles.map((file) => {
        const isLandscape =
          file.videoMediaMetadata?.width && file.videoMediaMetadata?.height
            ? file.videoMediaMetadata.width > file.videoMediaMetadata.height
            : matchedFolder?.categorySlug === "wedding" ||
              matchedFolder?.categorySlug === "railway" ||
              matchedFolder?.categorySlug === "anniversary" ||
              matchedFolder?.categorySlug === "youtube";

        return {
          id: `drive-${file.id}`,
          title: file.name.replace(/\.mp4$/i, "").replace(/&amp;/g, "&"),
          originalFilename: file.name,
          category: matchedFolder?.category || "Portfolio Video",
          categorySlug: matchedFolder?.categorySlug || "general",
          format: isLandscape ? "16:9 Landscape" : "9:16 Vertical Reel",
          aspectRatio: isLandscape ? "16/9" : "9/16",
          thumbnail:
            file.thumbnailLink?.replace(/=s\d+/, "=w800") ||
            `https://lh3.googleusercontent.com/d/${file.id}=w800`,
          videoSrc: isLandscape
            ? "/videos/anniversary-reel.mp4"
            : "/videos/real-estate.mp4",
          driveId: file.id,
          driveViewUrl:
            file.webViewLink ||
            `https://drive.google.com/file/d/${file.id}/view?usp=sharing`,
          drivePreviewEmbedUrl: `https://drive.google.com/file/d/${file.id}/preview`,
          description: `Google Drive video project (${file.name}) in ${matchedFolder?.name || "Portfolio"}.`,
          tags: [matchedFolder?.category || "Video", "Google Drive"],
        };
      });

      return NextResponse.json({
        source: "google-drive-api-v3",
        folderId,
        count: dynamicProjects.length,
        projects: dynamicProjects,
      });
    } catch (err: unknown) {
      console.error("Failed to query Google Drive API:", err);
    }
  }

  // 2. Default: Return verified high-speed local catalog with filtering
  const filtered = getFilteredLocalProjects(category, folderId);

  return NextResponse.json({
    source: "local-catalog",
    totalCount: portfolioProjects.length,
    returnedCount: filtered.length,
    hasApiKey: !!apiKey,
    projects: filtered,
    folders: googleDriveFolders,
  });
}

function getFilteredLocalProjects(
  category: string | null,
  folderId: string | null
): ProjectItem[] {
  let list = portfolioProjects;

  if (category && category !== "all") {
    list = list.filter((p) => p.categorySlug === category);
  }

  if (folderId) {
    list = list.filter((p) => p.folderId === folderId);
  }

  return list;
}
