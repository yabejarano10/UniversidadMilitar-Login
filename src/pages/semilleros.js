import React, {useState} from 'react'
import SemillerosSection from '../components/InfoSection/indexsemilleros'
import { homeObjSemillero, homeObjSemillero2, homeObjSemillero3, homeObjSemillero4} from '../components/InfoSection/Data';
import SemillerosSectiony from '../components/InfoSection/indexSemillerosy';
import Sidebar from '../components/Sidebar';
import Navbar2 from '../components/NavBar/index2';
import Footer from '../components/Footer';

const Semilleros = ({currentUser}) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>
    {
      setIsOpen(!isOpen);
    }
  
    return (
    <>
    <Sidebar isOpen = {isOpen} toggle={toggle} />
    <Navbar2  currentUser={currentUser} toggle={toggle} />
    <SemillerosSection {...homeObjSemillero}/>
    <SemillerosSectiony {...homeObjSemillero2}/>
    <SemillerosSection {...homeObjSemillero3}/>
    <SemillerosSectiony {...homeObjSemillero4}/>
    <Footer/>
    </>
  )
}

export default Semilleros