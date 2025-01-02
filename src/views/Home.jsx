import React from 'react'
import Hero from '../components/home/Hero'
import Satisfied from '../components/home/Satisfied'
import Marketing from '../components/home/Marketing'
import OutSmart from '../components/home/OutSmart'
import GrowthPartner from '../components/home/GrowthPartner'
import ActualResults from '../components/home/ActualResults'
import ReadyGoals from '../components/home/ReadyGoals'
import LearnFrom from '../components/home/LearnFrom'
import Cards from '../components/home/Cards'
import Featured from '../components/home/Featured'
import Footer from '../common/Footer'

const Home = () => {
  return (
  <>
    <Hero/>
    <Featured/>
    <Satisfied/>
    <Marketing/>
    <OutSmart/>
    <GrowthPartner/>
    <ActualResults/>
    <LearnFrom/>
    <Cards/>
    <ReadyGoals/>
    <Footer/>
  </>
  )
}

export default Home
