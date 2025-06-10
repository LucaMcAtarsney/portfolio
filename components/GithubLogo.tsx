'use client'

import { useGLTF, OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import { Group } from 'three'

function GithubLogo() {
    const ref = useRef<Group>(null)
    const gltf = useGLTF('/githubLogo.glb')

    useFrame((_state, delta) => {
        if (ref.current) {
            ref.current.rotation.z += delta * 1.5 
        }
    })

    return <primitive ref={ref} object={gltf.scene} scale={400} />
}

export default function GithubLogoModel() {
    return (
        <div className="w-full h-full z-10" >
            <Canvas camera={{ position: [0, 90, 0 ], fov: 40 }}>
                <ambientLight intensity={1.5} />
                <directionalLight position={[10, 4, 4]} />
                <Suspense fallback={-100}>
                    <GithubLogo />
                </Suspense>
                <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} />
            </Canvas>
        </div>
    )
}
