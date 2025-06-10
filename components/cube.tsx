'use client'

import { useAnimationFrame } from 'motion/react'
import { useRef } from 'react'

export default function Cube() {
  const ref = useRef<HTMLDivElement>(null)

  useAnimationFrame((t) => {
    if (!ref.current) return
    const rotate = Math.sin(t / 10000) * 200
    const y = (1 + Math.sin(t / 1000)) * -50
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`
  })

  const sideBase =
    'absolute w-full h-full opacity-60 border border-white'

  return (
    <div className="w-[200px] h-[200px] perspective-[800px] mx-auto mt-24">
      <div
        ref={ref}
        className="relative w-full h-full [transform-style:preserve-3d]"
      >
        <div
          className={`${sideBase} bg-red-400 [transform:rotateY(0deg)_translateZ(100px)]`}
        />
        <div
          className={`${sideBase} bg-orange-400 [transform:rotateY(90deg)_translateZ(100px)]`}
        />
        <div
          className={`${sideBase} bg-green-400 [transform:rotateY(180deg)_translateZ(100px)]`}
        />
        <div
          className={`${sideBase} bg-blue-400 [transform:rotateY(-90deg)_translateZ(100px)]`}
        />
        <div
          className={`${sideBase} bg-purple-400 [transform:rotateX(90deg)_translateZ(100px)]`}
        />
        <div
          className={`${sideBase} bg-pink-400 [transform:rotateX(-90deg)_translateZ(100px)]`}
        />
      </div>
    </div>
  )
}
