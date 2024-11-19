import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function Grid() {
  const gridRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (gridRef.current) {
      gridRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.2;
      gridRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={gridRef}>
      <gridHelper
        args={[30, 30, '#ffffff', '#333333']}
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <gridHelper
        args={[30, 30, '#ffffff', '#333333']}
        position={[0, 0, 0]}
      />
    </group>
  );
}

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 opacity-40">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 50 }}
        dpr={[1, 2]}
      >
        <fog attach="fog" args={['#000000', 5, 30]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Grid />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
}