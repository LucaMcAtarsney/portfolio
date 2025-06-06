'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Mesh } from 'three'

function RotatingDodecahedron() {
  const ref = useRef<Mesh>(null)

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.5
      ref.current.rotation.x += delta * 0.3
    }
  })

  return (
    <mesh ref={ref}>
      <dodecahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color="white" />
    </mesh>
  )
}

export default function DodecahedronScene() {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [2, 2, 2] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 5, 3]} />
        <RotatingDodecahedron />
      </Canvas>
    </div>
  )
}
