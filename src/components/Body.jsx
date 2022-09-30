import '../assets/style/body.css'
import InputSub from '../atoms/InputSub';
import Form from './Form'

function Body() {

    return (

        <div className="contenedor-principal">
            <section className='contenedor-form'>
            <Form/>
            <InputSub/>
            </section>
            
         </div>
    );
  }
  

  export default Body;