import React from 'react'
import { motion, useScroll, useSpring, useTransform } from 'motion/react'


const ParallexBg = () => {

    const { scrollYProgress } = useScroll();
    const x = useSpring(scrollYProgress, {damping:50})
    const mountain3P = useTransform(x,[0,0.5],['0','70%'])
    const planetQ = useTransform(x,[0,0.5],['0','20%'])
    const mountain2P = useTransform(x,[0,0.5],['0','30%'])
    const mountain1P = useTransform(x,[0,0.5],['0','0%'])

    return (
        <section className='absolute inset-0 bg-black/40'>
            <div className='relative h-screen overflow-y-hidden'>
                {/* //bgsky// */}
                <div className='absolute inset-0 w-full h-screen -z-50'
                    style={{
                        backgroundImage: 'url("/assets/sky.jpg")',
                        backgroundPosition: 'bottom',
                        backgroundSize: 'cover'
                    }}
                />

                {/* mountain layer3 */}
                <motion.div className='absolute inset-0 -z-40'
                    style={{
                        backgroundImage: 'url("/assets/mountain-3.png")',
                        backgroundPosition: 'bottom',
                        backgroundSize: 'cover',
                        y:mountain3P
                    }} />
                {/* planet */}
                <motion.div className='absolute inset-0 -z-30'
                    style={{
                        backgroundImage: 'url("/assets/planets.png")',
                        backgroundPosition: 'bottom',
                        backgroundSize: 'cover',
                        y: planetQ
                    }} />
                {/* mountain layer2 */}
                <motion.div div className='absolute inset-0 -z-20'
                    style={{
                        backgroundImage: 'url("/assets/mountain-2.png")',
                        backgroundPosition: 'bottom',
                        backgroundSize: 'cover',
                        y: mountain2P
                    }} />
                {/* mountainlayer1  */}
                <div div className='absolute inset-0 -z-10'
                    style={{
                        backgroundImage: 'url("/assets/mountain-1.png")',
                        backgroundPosition: 'bottom',
                        backgroundSize: 'cover',
                        y: mountain1P
                    }} />


            </div>

        </section>
    )
}

export default ParallexBg