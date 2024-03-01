import './CSS/NotFound.css';
import SymbolImage from './IMG/Maguito2.png'; 
import { Link } from 'react-router-dom';
function NotFound() {
  return (
    <div className="NotFound">
      <h1>No deberias estar aqui</h1>
      <div>
        <p>Vuelve por donde viniste, no juegues con lo que no comprendes</p>
        <Link to="/">
          <img src={SymbolImage} alt="Maguito" />
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
