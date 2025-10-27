import React from 'react'
import HeroText from '../components/HeroText'
import ParallexBg from '../components/ParallexBg'

const Hero = () => {
  return (
<section className='flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space'>
<HeroText/>
<ParallexBg />

<figure className='absloute inset-0' style={{width:'100vw',height:'100vh'}}>

</figure>

</section>
  )
}

export default Hero