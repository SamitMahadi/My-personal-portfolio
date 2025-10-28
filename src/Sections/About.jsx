import React from 'react'
import Card from '../components/Card'

const About = () => {
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
                    <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />

                </div>

                {/* g-2 */}

                <div className=' grid-default-color grid-2'>
                    <div className='flex items-center justify-center w-full h-full'>
                        <p className='flex items-end text-4xl text-gray-500 '>Precision meets passion</p>
                        <Card/>
                    </div>

                </div>
                {/* g-3 */}
                <div className='grid-black-color grid-3'>

                </div>
                {/* g-4 */}
                <div className='grid-special-color grid-4'>

                </div>
                {/* g-5 */}
                <div className='grid-default-color grid-5'>

                </div>

            </div>

        </section>


    )
}

export default About