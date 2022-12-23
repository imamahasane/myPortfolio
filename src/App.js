import React from 'react'

import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Skill from './Components/Skill/Skill'
import Services from './Components/Services/Services'

const App = () => {
  return (
    <>
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Skill />
      <Services />
    </main>
    </>
  )
}

export default App