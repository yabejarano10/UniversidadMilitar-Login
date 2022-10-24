import React from 'react'
import './Form.css';
import success from "../../images/success.svg"

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
        <div className='form-success'> se recibió la Solicitud</div>
        <img src={success} alt="success-image" className='form-img-2'></img>
    </div>
  );
};

export default FormSuccess