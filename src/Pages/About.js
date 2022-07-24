import React from 'react'
import Headers from '../components/Headers'
import Hero from '../components/Hero'
import animal from "../components/Images/animal4.jpg"

const About = () => {
  return (
    <>
    <Headers/>
    <Hero Image={animal} title= "Tiger" desc="nose ola"/>
    </>
  )
}

export default About