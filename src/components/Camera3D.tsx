"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function Camera3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL support
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    const width = container.clientWidth || 380;
    const height = container.clientHeight || 380;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7.5);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);
    } catch {
      setHasWebGL(false);
      return;
    }

    // Group for the 3D cine lens assembly
    const lensGroup = new THREE.Group();
    scene.add(lensGroup);

    // 1. Outer Cine Lens Barrel (anodized dark titanium)
    const barrelGeo = new THREE.CylinderGeometry(1.6, 1.45, 1.8, 32, 1, true);
    const barrelMat = new THREE.MeshStandardMaterial({
      color: 0x141414,
      metalness: 0.9,
      roughness: 0.25,
      side: THREE.DoubleSide,
    });
    const barrel = new THREE.Mesh(barrelGeo, barrelMat);
    barrel.rotation.x = Math.PI / 2;
    lensGroup.add(barrel);

    // 2. Focus Ring Knurling (stepped gear teeth)
    const ringGeo = new THREE.TorusGeometry(1.64, 0.04, 16, 48);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x242424,
      metalness: 0.95,
      roughness: 0.2,
    });
    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    ring1.position.z = -0.4;
    lensGroup.add(ring1);

    const ring2 = new THREE.Mesh(ringGeo, ringMat);
    ring2.position.z = 0.2;
    lensGroup.add(ring2);

    // 3. Electric Lime Accent Cine Index Ring
    const accentRingGeo = new THREE.TorusGeometry(1.61, 0.025, 16, 48);
    const accentRingMat = new THREE.MeshBasicMaterial({
      color: 0xC6FF3D,
    });
    const accentRing = new THREE.Mesh(accentRingGeo, accentRingMat);
    accentRing.position.z = 0.6;
    lensGroup.add(accentRing);

    // 4. Front Glass Optical Element (Multi-coated flare reflection)
    const glassGeo = new THREE.SphereGeometry(1.4, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.35);
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x0a1012,
      metalness: 0.1,
      roughness: 0.05,
      transmission: 0.75,
      thickness: 0.5,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      ior: 1.52,
    });
    const glass = new THREE.Mesh(glassGeo, glassMat);
    glass.rotation.x = -Math.PI / 2;
    glass.position.z = 0.55;
    lensGroup.add(glass);

    // 5. Aperture Blades (8 layered polygonal iris blades)
    const bladeGroup = new THREE.Group();
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const bladeGeo = new THREE.PlaneGeometry(0.7, 0.35);
      const bladeMat = new THREE.MeshStandardMaterial({
        color: 0x1f1f1f,
        metalness: 0.8,
        roughness: 0.4,
        side: THREE.DoubleSide,
      });
      const blade = new THREE.Mesh(bladeGeo, bladeMat);
      blade.position.set(Math.cos(angle) * 0.45, Math.sin(angle) * 0.45, 0);
      blade.rotation.z = angle + 0.35;
      bladeGroup.add(blade);
    }
    bladeGroup.position.z = 0.1;
    lensGroup.add(bladeGroup);

    // 6. Floating Gimbal Horizon Circle
    const gimbalGeo = new THREE.RingGeometry(2.1, 2.13, 64);
    const gimbalMat = new THREE.MeshBasicMaterial({
      color: 0x333333,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.6,
    });
    const gimbalRing = new THREE.Mesh(gimbalGeo, gimbalMat);
    lensGroup.add(gimbalRing);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    keyLight.position.set(4, 5, 6);
    scene.add(keyLight);

    // Electric lime rim light
    const limeRimLight = new THREE.PointLight(0xC6FF3D, 4, 10);
    limeRimLight.position.set(-3, -2, 2);
    scene.add(limeRimLight);

    // Subtle blue fill
    const fillLight = new THREE.PointLight(0x38bdf8, 2, 8);
    fillLight.position.set(3, -3, 1);
    scene.add(fillLight);

    // Mouse Tracking with smooth damping
    let targetRotationX = 0.2;
    let targetRotationY = -0.3;
    let isVisible = true;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotationY = x * 0.8;
      targetRotationX = -y * 0.8 + 0.1;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Intersection Observer to save CPU when offscreen
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    // Resize handler
    const handleResize = () => {
      if (!container || !renderer) return;
      const newW = container.clientWidth || 380;
      const newH = container.clientHeight || 380;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener("resize", handleResize);

    // Render loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow
      lensGroup.rotation.x += (targetRotationX - lensGroup.rotation.x) * 0.05;
      lensGroup.rotation.y += (targetRotationY - lensGroup.rotation.y) * 0.05;

      // Subtle continuous idle rotation & iris breathing
      lensGroup.rotation.z = Math.sin(elapsedTime * 0.5) * 0.08;
      bladeGroup.rotation.z = elapsedTime * 0.1;
      gimbalRing.rotation.z = -elapsedTime * 0.15;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      barrelGeo.dispose();
      barrelMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      accentRingGeo.dispose();
      accentRingMat.dispose();
      glassGeo.dispose();
      glassMat.dispose();
      gimbalGeo.dispose();
      gimbalMat.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-square max-w-[360px] md:max-w-[420px] flex items-center justify-center pointer-events-none select-none"
      aria-label="Interactive 3D Cine Camera Lens"
    >
      {!hasWebGL && (
        // High-end CSS fallback if WebGL is disabled
        <div className="relative w-64 h-64 rounded-full border-2 border-[#222222] flex items-center justify-center animate-spin-slow">
          <div className="w-52 h-52 rounded-full border border-[#C6FF3D]/40 border-dashed" />
          <div className="w-36 h-36 rounded-full bg-[#111111] border border-[#333333] shadow-[0_0_30px_rgba(198,255,61,0.2)] flex items-center justify-center">
            <span className="font-mono text-[10px] text-[#C6FF3D] tracking-widest">
              24-70mm T2.8
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
