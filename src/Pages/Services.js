import React from 'react'
import Headers from '../components/Headers'
import Hero from '../components/Hero'
import animal3 from "../components/Images/animal6.jpg"

const Services = () => {
  return (
   <>
   <Headers/>
   <Hero Image={animal3} title="Panda" desc="love bamboo" />
   </>
  )
}

export default Services