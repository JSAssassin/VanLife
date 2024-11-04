import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar__item">#VanLife</Link>
            <Link to="/about" className="navbar__item">About</Link>
            <Link to="/vans" className="navbar__item">Vans</Link>
        </nav>
    );
}
