import React from 'react'
import Hero from './components/Hero'
import Integration from './components/Integration'
import CodePlayground from './components/CodePlayground'
import Feature from './components/Feature'
import Platform from './components/platform'
import Footer from './components/Footer'

const page = () => {
  return (
    <div>
      <Hero />
      <Integration />
      <CodePlayground />
      <Feature />
      <Platform />
      <Footer />
      
    </div>
  )
}

export default page