import React, {useEffect, useState} from 'react'
import SemillerosSection from '../components/InfoSection/indexsemilleros'
import { homeObjSemillero} from '../components/InfoSection/Data';
import SemillerosSectiony from '../components/InfoSection/indexSemillerosy';
import Sidebar from '../components/Sidebar';
import Navbar2 from '../components/NavBar/index2';
import Footer from '../components/Footer';
import {getProjects} from './../firebase/firebase.utils';
import ProyectosSection from '../components/InfoSection/indexProyectos';

const Proyectos = ({currentUser}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [projects,setProjects] = useState([])

    useEffect(() => {

      const fetchData = async() => {
       const response = await getProjects();

        
        setProjects(response.docs.map((doc) => ({
          id:doc.data().idUsuario,
          titulo:doc.data().titulo,
          descripcion:doc.data().descripcion,
          enlace:doc.data().enlace,
          autores:doc.data().autores,
          claveAcceso:doc.data().claveAcceso,
          institucion:doc.data().institucion,
          imagen:doc.data().imagen
        })));
      }
      fetchData()
    })

    

    const toggle = () =>
    {
      setIsOpen(!isOpen);
    }
    
    return (
    <>
      <Sidebar isOpen = {isOpen} toggle={toggle} />
      <Navbar2  currentUser={currentUser} toggle={toggle} />
    {projects.map((doc) => (
        <>
        <ProyectosSection {...doc}/>
        </>
      
      ))}
      
      <Footer/>
    
    </>
  )
}

export default Proyectos