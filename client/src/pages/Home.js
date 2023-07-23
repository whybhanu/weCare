import React from 'react'
import MainweCare from '../components/MainWeCare'
import Locations from '../components/Locations'
import Doctors from '../components/Doctors'
import Testimonials from '../components/Testimonials'
import FeedbackForm from '../components/FeedbackForm'
import backgroundImg from '../images/backgroundImg.png'

const Home = () => {
  return (
    <>
        <div className='NavbarBg'>
            <img className='bgImg1' src={backgroundImg} alt=""/>
        </div>
        <MainweCare/>
        <Locations/>
        <Doctors/>
        <Testimonials/>
        <FeedbackForm/>
    </>
  )
}

export default Home