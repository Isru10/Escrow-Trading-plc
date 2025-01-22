import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
function App() {
  return (
    <div className="flex flex-col gap-8">
      <Navbar/>
      <Hero/> 
      <Services/>
    </div>
  )
}
export default App
