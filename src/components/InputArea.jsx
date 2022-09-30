import Label from '../atoms/Label'
import InputType from '../atoms/InputType'
import Label1 from '../atoms/Label1'

function InputArea(prop) {
  return (
    <div className="conteiner">
        <p>
            <Label1 id={prop.id} label1={prop.label1} />
        </p>
        
      <Label id={prop.id} label={prop.label} />
     < InputType type={prop.type} id={prop.id} name={prop.id} />
    
      
    </div>
  )
}

export default InputArea