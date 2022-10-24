export default function validateInfo(values)
{
    let errors ={}

    if(!values.username.trim())
    {
        errors.username = "Se necesita un usuario"
    }

    if (!values.email) {
        errors.email = 'Email requerido';
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Dirección de email erronea';
      }
      if (!values.password) {
        errors.password = 'Se requiere una contraseña';
      } else if (values.password.length < 6) {
        errors.password = 'La contraseña debe tener 6 caracteres o más';
      }
    
      if (!values.password2) {
        errors.password2 = 'Se requiere una contraseña';
      } else if (values.password2 !== values.password) {
        errors.password2 = 'Las contraseñas no coinciden';
      }
      return errors;
}