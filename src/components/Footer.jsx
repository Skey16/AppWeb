import logoFacebook from '../assets/img/LogoF.png';
import logoIg from '../assets/img/LogoIg.png';
import logoTwitter from '../assets/img/LogoT.png';
import '../assets/style/footer.css'

function Footer() {
    return (
        <footer>
            <div className='footer_img'>
                <img src={logoFacebook} alt="Logo Facebook" />
                <img src={logoTwitter} alt="Logo Twitter" />
                <img src={logoIg} alt="Logo Ig" />
            </div>
        </footer>
      );
}

export default Footer;