import { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { IoMdLogOut } from "react-icons/io";
import navbarLogo from '../assets/logo.png';
import avatarIcon from '../assets/avatar-icon.png';

import './Navbar.css';

function useForceUpdate() {
    const [, setState] = useState(0);
    return () => setState(state => state + 1);
}

export default function Navbar() {
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();
    const forceUpdate = useForceUpdate();
    useEffect(() => {
        const loggedInStatus = localStorage.getItem("loggedin");
        setLoggedIn(loggedInStatus ? true : false);

        const handleStorageChange = () => {
            const loggedInStatus = localStorage.getItem("loggedin");
            setLoggedIn(loggedInStatus ? true : false);
            forceUpdate();
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [forceUpdate]);

    function handleFakeLogout() {
        localStorage.removeItem("loggedin");
        localStorage.removeItem("user");
        setLoggedIn(false);
        navigate('/');
    }

    return (
        <nav className="navbar">
            <Link to="." className="navbar__logo">
                <img src={navbarLogo} alt="navbar logo" />
            </Link>
            <div className="navbar__items">
                <NavLink
                    to="host"
                    className={({ isActive }) => `navbar__item ${isActive ? "active-link" : ""}`}
                >
                    Host
                </NavLink>
                <NavLink
                    to="about"
                    className={({ isActive }) => `navbar__item ${isActive ? "active-link" : ""}`}
                >
                    About
                </NavLink>
                <NavLink
                    to="vans"
                    className={({ isActive }) => `navbar__item ${isActive ? "active-link" : ""}`}
                >
                    Vans
                </NavLink>
                {
                    loggedIn ? (
                        <IoMdLogOut onClick={handleFakeLogout} className="navbar__item logout-btn" />
                    ) : (
                        <NavLink
                            to="/login"
                            className={({ isActive }) => `navbar__item ${isActive ? "active-link" : ""}`}
                            >
                            <img src={avatarIcon} alt="avatar-icon" width="20px"/>
                        </NavLink>
                    )
                }
            </div>
        </nav>
    );
}
