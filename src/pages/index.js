import React, {useState} from 'react'
import ImageSlider from '../components/carousel/imageSlider';
import { sliderData } from '../components/carousel/sliderData';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import {  homeObjFour, homeObjmvb } from '../components/InfoSection/Data';
import InfoSectionObj from '../components/InfoSection/index2';
import InfoSectionmv from '../components/InfoSection/indexmv';
import Navbar from '../components/NavBar';
import Services from '../components/Services';
import Sidebar from '../components/Sidebar';



const Home = ({currentUser}) => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>
  {
    setIsOpen(!isOpen);
  }

  return (
    <>
    <Sidebar isOpen = {isOpen} toggle={toggle} />
    <Navbar currentUser={currentUser} toggle={toggle} />
    <HeroSection />
    <InfoSectionObj {...homeObjFour}/>
    <InfoSectionmv {...homeObjmvb}/>
    <Services />
    {/* <InfoSection {...homeObjOne}/> */}
    <ImageSlider slides={sliderData}/>
    <Footer/>
    </>
  )
};

export default Home