import React from 'react'
import Navbar from '../navabar/Navbar'
import Hero from './Hero'
import JoinUs from './JoinUs'
import FeatureSection from './FeatureSection'
import Footer from '../footer/Footer'
import CopyrightFooter from '../footer/CopyrightFooter'

function Home() {
  return (
    <div className='home bg-background'>
      <div className="grad-div bg-gradient-to-rpx-3 md:px-8 lg:px-24">
        <Navbar/>
        <Hero/>
      </div>
      <div className='px-3 md:px-8 lg:px-24'>
        <JoinUs/>
        <FeatureSection/>
      </div>
      <Footer/>
      <CopyrightFooter/>
    </div>
  )
}

export default Home