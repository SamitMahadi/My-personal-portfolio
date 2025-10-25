import React from 'react'
import { FlipWords } from './AccernityFlipWords'


const HeroText = () => {
    return (
        <div className='z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text'>


            {/* for desktop */}

            <div className='flex-col hidden md:flex c-space '>
                <h1 className='text-4xl font-medium'>Hi,I'm Samit</h1>
                <div className='flex flex-col items-start'>
                    <p className='text-4xl font-medium text-neutral-300'>
                        A Developer <br /> turning visions into realities
                    </p>

                    <FlipWords className='font-black text-white text-8xl' words={['secure', 'modern', 'stunning']} />
                    <p className='text-4xl font-medium text-neutral-300'>
                        web solution
                    </p>
                </div>

            </div>

            {/* for  mobile */}

            <div className='flex flex-col space-y-6 md:hidden'>

                <p className='text-4xl font-medium'>Hi, I'm Samit</p>
                <div>
                    <p className='text-5xl font-black text-neutral-400'>
                        building
                    </p>
                    <p>
                        <FlipWords words={['secure', 'modern', 'stunning']} className='font-bold text-white text-7xl' />
                    </p>
                    <p className='text-5xl font-black text-neutral-400'>
                        Web application
                    </p>
                </div>



            </div>



        </div>
    )
}

export default HeroText