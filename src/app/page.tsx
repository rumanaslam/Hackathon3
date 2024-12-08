import React from 'react'
import Hero from './components/Hero'
import SubHero from './components/SubHero'
import Products from './components/Products'
import Slides from './components/Slides'
import Furnio from './components/Furnio'

const page = () => {
  return (
    <div>
      <Hero />
      <SubHero />
      <Products />
      <Slides/>
      <Furnio/>
      
    </div>
  )
}

export default page

