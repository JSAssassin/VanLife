import { Link } from 'react-router-dom';
import navbarLogo from '../assets/logo.png'
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar__logo">
                <img src={navbarLogo} alt="navbar logo" />
            </Link>
            <div className="navbar__items">
                <Link to="/host" className="navbar__item">Host</Link>
                <Link to="/about" className="navbar__item">About</Link>
                <Link to="/vans" className="navbar__item">Vans</Link>
            </div>
        </nav>
    );
}
