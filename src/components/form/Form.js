
import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import tigumLogo from '../../images/tigum.png'
import Sidebar from '../Sidebar';
import Navbar2 from '../NavBar/index2';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    console.log("HJASHJSAHA")
    setIsSubmitted(true);
  }
   
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>
  {
    setIsOpen(!isOpen);
  }

  return (
    <>
    <div className='contenedor'>
    <Sidebar isOpen = {isOpen} toggle={toggle} />
    <Navbar2 toggle={toggle} />
      <div className='form-container'>
        <div className='form-content-left'>
          <img className='form-img' src={tigumLogo} alt='spaceship' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm}/>
        ) : (
          <FormSuccess />
        )}
      </div>
    </div>
    </>
  );
};

export default Form;