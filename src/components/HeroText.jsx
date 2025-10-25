import React from 'react'
import { FlipWords } from './AccernityFlipWords'
import { motion } from 'motion/react'


const HeroText = () => {
    return (
        <div className='z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text'>


            {/* for desktop */}

            <motion.div className='flex-col hidden md:flex c-space '>
                <motion.h1 initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }} className='text-4xl font-medium'>Hi,I'm Samit</motion.h1>
                <motion.div  className='flex flex-col items-start'>
                    <motion.p initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 }} className='text-4xl font-medium text-neutral-300'>
                        A Developer <br /> turning visions into realities
                    </motion.p>
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.5 }}>
                        <FlipWords className='font-black text-white text-8xl' words={['secure', 'modern', 'stunning']} />
                    </motion.div>

                    <motion.p initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.8 }} className='text-4xl font-medium text-neutral-300'>
                        web solution
                    </motion.p>
                </motion.div>

            </motion.div>

            {/* for  mobile */}

            <div className='flex flex-col space-y-6 md:hidden'>

                <motion.p initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }} className='text-4xl font-medium'>Hi, I'm Samit</motion.p>
                <div>
                    <motion.p initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 }} className='text-5xl font-black text-neutral-400'>
                        building
                    </motion.p>
                    <motion.p initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.5 }}>
                        <FlipWords words={['secure', 'modern', 'stunning']} className='font-bold text-white text-7xl' />
                    </motion.p>
                    <motion.p initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.8 }} className='text-5xl font-black text-neutral-400'>
                        Web application
                    </motion.p>
                </div>



            </div>



        </div>
    )
}

export default HeroText