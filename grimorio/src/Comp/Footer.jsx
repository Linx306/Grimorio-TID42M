import './Footer.css'; 
import SymbolImage from './Simbolo.png'; 

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <h2>Contacto</h2>
        <p>Email: Grimorio@gmail.com</p>
        <p>Teléfono: +1 111 111 1111</p>
      </div>

      <div className="footer">
        <h2>Acerca de Nosotros</h2>
        <p>Soy un estudiante de tecnologias de la informacion con un gusto por la fantasia</p>
      </div>

      <div className="footer">
        <img src={SymbolImage} alt="Símbolo Mágico" />
      </div>
    </div>
  );
}

export default Footer;