'use client'

import { useGLTF, OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import { Group } from 'three'

function LinkedIn() {
  const ref = useRef<Group>(null)
  const gltf = useGLTF('/linkedin.glb')

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 1.5 // Adjust speed here
    }
  })

  return <primitive ref={ref} object={gltf.scene} scale={1.5} />
}

export default function LinkedInModel() {
  return (
    <div className="w-full h-[500px]">
      <Canvas camera={{ position: [0, 4, 20], fov: 100 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={null}>
          <LinkedIn />
        </Suspense>
        {/* Remove OrbitControls for full control, or keep disabled if needed */}
        <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} />
      </Canvas>
    </div>
  )
}
