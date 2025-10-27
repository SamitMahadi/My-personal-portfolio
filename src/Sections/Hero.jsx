import React from 'react'
import HeroText from '../components/HeroText'
import ParallexBg from '../components/ParallexBg'
import { Canvas } from '@react-three/fiber'
import { ThreeDModel } from '../components/threeDModel'
import { OrbitControls } from '@react-three/drei'



const Hero = () => {
  return (
    <section className='flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space'>
      <HeroText />
      <ParallexBg />

      <figure className='absloute inset-0 w-full h-full' style={{ width: '100vw', height: '100vh' }}>
        <Canvas>
          
          <ThreeDModel />
          <OrbitControls />
        </Canvas>
      </figure>

    </section>
  )
}

export default Hero