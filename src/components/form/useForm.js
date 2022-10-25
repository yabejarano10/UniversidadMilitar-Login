import { useState, useEffect } from "react";
import {auth,createUserProfileDocument} from './../../firebase/firebase.utils';
import { useNavigate } from "react-router-dom";

const useForm = (callback, validate) =>
{
    const [values, setValues] = useState({
        username:'',
        email:'',
        password:'',
        password2:''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    let navigate = useNavigate();


    const handleChange = e =>
    {
        const{name, value} = e.target
        setValues({
            ...values,
            [name]: value
        });

    };

    async function handleSubmit(e)
    {
        e.preventDefault();
        setErrors(validate(values));

        
        const {username,email,password} = values;
        let displayName = username
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password);

            await createUserProfileDocument(user,{displayName} );
        }
        catch(error){
            console.log(error)
        }
        setIsSubmitting(true);  
        navigate("/", { replace: true });
    };

    useEffect(() =>
    {
        if(Object.keys(errors).length === 0 && isSubmitting)
        {
            callback();
        }
    }, [errors])

    return {handleChange, values, handleSubmit, errors };
}

export default useForm