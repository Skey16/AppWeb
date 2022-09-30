import logo from '../assets/img/HP.png'
import '../assets/style/header.css'

function Header() {
  return (
    <header>
      <div> 
        <img src={logo}></img>
        <h1 className='registro' >REGISTRO DE USUARIO</h1>    
      </div>
    </header>
  );
}
export default Header;
