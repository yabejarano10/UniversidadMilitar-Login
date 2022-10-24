import React from 'react'
import useForm from './useForm'
import validate from './validateInfo';
import './Form.css';

const FormSignup = ({submitForm}) => {

    const {handleChange, values, handleSubmit, errors} = useForm(submitForm, validate);


  return (
    <div className='form-content-right'>
        <form className='form' onSubmit={handleSubmit}>
            <h1>
                Registrese en el grupo de investigación
            </h1>
            <div className='form-inputs'>
                <label htmlFor='' className='form-label'>
                    Usuario
                </label>
                <input id="username"type="text" name="username" className='form-input' placeholder='Ingrese su usuario' value={values.username} on onChange={handleChange}/>
                {errors.username && <p>{errors.username}</p>}
            </div>
            <div className='form-inputs'>
                <label htmlFor='' className='form-label'>
                    Email
                </label>
                <input id="email" type="email" name="email" className='form-input' placeholder='Ingrese su email' value={values.email} on onChange={handleChange}/>
                {errors.email && <p>{errors.email}</p>}
            </div>
            <div className='form-inputs'>
                <label htmlFor='' className='form-label'>
                    Contraseña
                </label>
                <input id="password" type="password" name="password" className='form-input' placeholder='Ingrese su contraseña' value={values.password} on onChange={handleChange}/>
                {errors.password && <p>{errors.password}</p>}
            </div>
            <div className='form-inputs'>
                <label htmlFor='' className='form-label'>
                    Confirme su contraseña
                </label>
                <input id="password2" type="password" name="password2" className='form-input' placeholder='Confirme su contraseña' value={values.password2} on onChange={handleChange}/>
                {errors.password2 && <p>{errors.password2}</p>}             
            </div>
            <button className='form-input-btn' type="submit">
                Inscribase
            </button>
            <span className='form-input-login'>
                Ya tiene una cuenta? Entre <a href='#'>aquí</a>            
            </span>
        </form>
    </div>
  )
}

export default FormSignup