import React from 'react'
import Card from '../components/Card'
import { useRef } from 'react';
import { Globe } from '../components/Globe';
import DownloadCvButton from '../components/DownloadCvButton';
import { Frameworks } from '../components/FrameWorks';

const About = () => {
    const grid2Container = useRef();
    return (

        <section className='c-space section-spacing'>

            <h2 className='text-heading'>About Me</h2>

            <div className='grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12'>
                {/* g-1 */}

                <div className='flex items-end grid-default-color grid-1'>

                    <img
                        src='public/assets/samit-hossain-mahadi.png'
                        className='absolute  scale-[1] right-[-1.2rem] top-[-5rem] md:scale-[3] md:left-10 md:inset-y-10 lg:scale-[1.3]'
                    />
                    <div className='z-10'>
                        <p className='headtext'>Hi, I'm Samit Hossain Mahadi</p>
                        <p className='subtext'>
                            I am currently studying CSE at American International University–Bangladesh. Over the last 4 years, I developed my frontend and backend dev
                            skills to deliver dynamic and software and web applications.
                        </p>
                    </div>
                    <div className='absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo' />

                </div>

                {/* g-2 */}

                <div className=' grid-default-color grid-2'>
                    <div className='flex items-center justify-center w-full h-full' ref={grid2Container}>
                        <p className='flex items-end text-4xl text-gray-500 '>Precision meets passion</p>
                        <Card
                            style={{ rotate: '75deg', top: '30%', left: '20%' }}
                            text='Responsive'
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: '-30deg', top: '60%', left: '45%' }}
                            text='Unique'
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: '90deg', bottom: '30%', left: '70%' }}
                            text='Best'
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: '-45deg', top: '55%', left: '0%' }}
                            text='Design Principles'
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: '20deg', top: '10%', left: '38%' }}
                            text='Modern'
                            containerRef={grid2Container}
                        />

                    </div>

                </div>
                {/* g-3 */}
                <div className='grid-black-color grid-3'>
                    <div className="z-10 w-[50%]">
                        <p className="headtext">Time Zone</p>
                        <p className="subtext">
                            I'm based in Babgladesh, and open to remote work worldwide
                        </p>
                    </div>
                    <figure className="absolute left-[30%] top-[10%]">
                        <Globe />
                    </figure>

                </div>
                {/* g-4 */}
                <div className='grid-special-color grid-4'>
                    <div className="flex flex-col items-center justify-center gap-4 size-full">
                        <p className="text-center headtext">
                            Download My CV
                        </p>
                        <DownloadCvButton />
                    </div>

                </div>
                {/* g-5 */}
                <div className='grid-default-color grid-5'>
                    <div className="z-10 w-[50%]">
                        <p className="headText">Teck Stack</p>
                        <p className="subtext">
                            I specialize in a variety of languages, frameworks, and tools taht
                            allow me to build robust and scalable applications
                        </p>
                    </div>
                    <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
                        <Frameworks />
                    </div>

                </div>

            </div>

        </section>


    )
}

export default About