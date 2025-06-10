'use client'

import { useGLTF, OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import { Group } from 'three'

function Github() {
    const ref = useRef<Group>(null)
    const gltf = useGLTF('/github.glb')

    useFrame((_state, delta) => {
        if (ref.current) {
            ref.current.rotation.z += delta * 0.5 
        }
    })

    return <primitive ref={ref} object={gltf.scene} scale={20} />
}

export default function GithubModel() {
    return (
        <div className="w-full h-[1000px]" >
            <Canvas camera={{ position: [0, 10, 4 ], fov: 150 }}>
                <ambientLight intensity={10.0} />
                <directionalLight position={[-10, -10, -20]} />
                <Suspense fallback={-10}>
                    <Github />
                </Suspense>
                <OrbitControls enablePan={true} enableZoom={false} enableRotate={false} />
            </Canvas>
        </div>
    )
}
