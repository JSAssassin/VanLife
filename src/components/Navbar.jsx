import { NavLink, Link } from 'react-router-dom';
import navbarLogo from '../assets/logo.png'
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar__logo">
                <img src={navbarLogo} alt="navbar logo" />
            </Link>
            <div className="navbar__items">
                <NavLink
                    to="/host"
                    className={({ isActive }) => `navbar__item ${isActive ? "active-link" : ""}`}
                >
                    Host
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) => `navbar__item ${isActive ? "active-link" : ""}`}
                >
                    About
                </NavLink>
                <NavLink
                    to="/vans"
                    className={({ isActive }) => `navbar__item ${isActive ? "active-link" : ""}`}
                >
                    Vans
                </NavLink>
            </div>
        </nav>
    );
}
