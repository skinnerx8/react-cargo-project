import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import News from './components/News'
import Cards from './components/Cards'
function App() {
  return (
    <div className='App' >
      <Navbar/>
      <Hero/>
      <News/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App
