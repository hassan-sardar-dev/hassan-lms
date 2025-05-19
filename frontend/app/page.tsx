'use client'
import About from '@/components/About/About'
import Hero from '@/components/Header/Hero'
import Navbar from '@/components/Header/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default page
