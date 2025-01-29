import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Analytics from './components/Analytics'
import Newsletter from './components/Newsletter'
import Cards from './components/Cards'
import Footer from './components/Footer'
import  SmoothScrollHero  from './components/what'
import ReactLenis from 'lenis/react'
function App() {
  return (
          <div className="">
          <Navbar />
            {/* <Hero /> */}
            <SmoothScrollHero/>
            <Analytics/>
            <Newsletter/>
            <Cards/>
            <Footer/>
          </div>





  )
}
export default App
