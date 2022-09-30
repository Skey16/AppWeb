import InputArea from './InputArea'

function Form() {
    const InputType = [
      {
        id: 'nombreF',
        label: 'Nombre:',
        type: 'text',
      },
      {
        id: 'apellidosF',
        label: 'Apellidos:',
        type: 'text',
      },
      {
        id: 'emailF',
        label: 'Email:',
        type: 'email',
      },
      {
        id: 'telefonoF',
        label: 'Telefono:',
        type: 'tel',
      },
      {
        id: 'nacimientoF',
        label: 'Fecha de Nacimiento:',
        type: 'date',
      },
      {
        id: 'edadF',
        label: 'Edad:',
        type: 'number',
      },
      {
        id: 'contraseniaF',
        label: 'Contraseña:',
        type: 'password',
      },
      {
        id: 'confcontraseniaF',
        label: 'Confirmar contraseña:',
        type: 'password',
      },

      {
        id: 'sexoF',
        label1:'Sexo:',
        label: 'Femenino.',
        type: 'radio',
      },
      {
        id: 'sexoM',
        label: 'Masculino.',
        type: 'radio',
      },
      
      
      {
        id: 'checkF',
        label: 'Aceptar terminos y condiciones del registro',
        type: 'checkbox',
      },
    ]
    return (
      <>
        {InputType.map((tipo) => {
          return <InputArea label={tipo.label} label1={tipo.label1} id={tipo.id} type={tipo.type} />
        })}
      </>
    )
  }
  
  export default Form