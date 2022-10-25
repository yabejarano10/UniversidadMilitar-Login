import React, {useState} from 'react'
import { auth,signInWithGoogle } from '../../firebase/firebase.utils';
import { useNavigate } from "react-router-dom";

import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './SigninElements';


const SignIn = () => {
  
let navigate = useNavigate(); 
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');


const submitGoogle = async ()=>{
  await signInWithGoogle()
  navigate('/');
}
const submit = async (e)=>{
  e.preventDefault(); 
  try{
   auth.signInWithEmailAndPassword(email,password).then(() => {
    setEmail('')
    setPassword('')
    navigate('/');
   });
    
  }
  catch(error)
  {
    console.log(error)
  }
}

  return (
    <>
    <Container>
        <FormWrap>
            <Icon to="/">TIGUM</Icon>
            <FormContent>
                <Form action="#">
                    <FormH1> Entre en su cuenta</FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' required onChange={(ev)=> setEmail(ev.target.value)}/>
                    <FormLabel htmlFor='for'>Contraseña</FormLabel>
                    <FormInput type='password' required onChange={(ev)=> setPassword(ev.target.value)}/>
                    <FormButton  onClick={(e) => {submit(e)}}>Iniciar Sesión</FormButton>
                    <FormButton type = 'submit' onClick={submitGoogle}>Iniciar Sesión con Google</FormButton>
                    <Text> Olvido su Contraseña?</Text>
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
    
    </>
  )
}

export default SignIn;