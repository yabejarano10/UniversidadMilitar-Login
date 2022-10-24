import React, {useState} from 'react'
import Footer from '../components/Footer'
import InvestigadoresSection from '../components/Investigadores'
import Navbar2 from '../components/NavBar/index2'
import Sidebar from '../components/Sidebar'

const Investigadores = ({currentUser}) => {
  
  
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>
    {
      setIsOpen(!isOpen);
    }
  
    return (
    <>
    <Sidebar isOpen = {isOpen} toggle={toggle} />
    <Navbar2 currentUser={currentUser} toggle={toggle} />
    <InvestigadoresSection />
    <Footer/>
    </>
  )
}

export default Investigadores