import React from 'react'
import Navbar from './Sections/navbar'
import Hero from './Sections/Hero'
import About from './Sections/About'
import Projects from './Sections/Projects'
import Experience from './Sections/Experience'
import Testimonial from './Sections/Testimonial'
import Contact from './Sections/Contact'
import Footer from './Sections/Footer'


const App = () => {
  return (
    <div className='conatainer mx-auto max-w-7xl'>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Testimonial />
      <Contact />
      <Footer />

     

    </div>
  )
}

export default App