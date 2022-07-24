import React from 'react'
import Hero from '../components/Hero'
import Headers from '../components/Headers'
import animal from "../components/Images/animal2.jpg"
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div animated={{scale:0.8}}>
    <Headers/>
    <Hero Image={animal} title= "poisonous frog" desc="ana banana"/>
   </motion.div>
  )
}

export default Home