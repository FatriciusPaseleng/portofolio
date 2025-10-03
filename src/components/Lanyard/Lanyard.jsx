import React, { useRef } from "react";
import * as THREE from "three";
import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls, Environment, Lightformer } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import { ErrorBoundary } from "react-error-boundary";

// ✅ extend meshline agar bisa dipakai di R3F
extend({ MeshLineGeometry, MeshLineMaterial });

// Komponen fallback untuk error boundary
function ErrorFallback({ error }) {
  return (
    <div role="alert" style={{ color: "red", padding: "1rem" }}>
      <p>⚠️ Something went wrong in Lanyard:</p>
      <pre>{error.message}</pre>
    </div>
  );
}

// Band pakai meshline
function Band() {
  const band = useRef();
  const texture = new THREE.TextureLoader().load("/textures/noise.png");

  return (
    <mesh ref={band}>
      <meshLineGeometry args={[]} />
      <meshLineMaterial
        color="white"
        depthTest={false}
        resolution={[1000, 1000]}
        map={texture}
        useMap
        repeat={[-4, 1]}
        lineWidth={1}
      />
    </mesh>
  );
}

export default function Lanyard() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Canvas
        shadows
        camera={{ position: [0, 0, 5], fov: 50 }}
        onCreated={({ gl }) => {
          gl.setClearColor("#000000");
          gl.physicallyCorrectLights = true;
        }}
      >
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />

        {/* Environment */}
        <Environment preset="studio">
          <Lightformer
            form="ring"
            intensity={1}
            position={[0, 5, 0]}
            scale={[2, 2, 1]}
          />
        </Environment>

        {/* Controls */}
        <OrbitControls />

        {/* ✅ Physics versi terbaru */}
        <Physics options={{ gravity: [0, -9.81, 0] }}>
          <Band />
        </Physics>
      </Canvas>
    </ErrorBoundary>
  );
}
