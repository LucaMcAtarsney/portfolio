'use client'

import { useGLTF, OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import { Group } from 'three'

function Keyboard() {
  const ref = useRef<Group>(null)
  const gltf = useGLTF('/keyboard.glb')

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.z += delta * 0.5 // Adjust speed here
    }
  })

  return <primitive ref={ref} object={gltf.scene} scale={1.5} />
}

export default function KeyboardModel() {
  return (
    <div className="w-full h-[500px]">
      <Canvas camera={{ position: [0, 90, 30], fov: 10 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5 ]} />
        <Suspense fallback={null}>
          <Keyboard />
        </Suspense>
        {/* Remove OrbitControls for full control, or keep disabled if needed */}
        <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} />
      </Canvas>
    </div>
  )
}
