'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Dodecahedron } from '@react-three/drei'

export default function DodecahedronScene() {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [2, 2, 2] }}>
        <ambientLight intensity={0.6} />
        <hemisphereLight color="#ffffff" groundColor="#ffffff" intensity={0.6} />
        <directionalLight position={[10, 5, 3]} />
        <Dodecahedron args={[1, 0]}>
          <meshStandardMaterial color="white" />
        </Dodecahedron>
        <OrbitControls />
      </Canvas>
    </div>
  )
}
