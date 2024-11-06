import { NavLink } from 'react-router-dom';
import './HostHeader.css';

export default function HostHeader() {
    return (
        <nav className='host-header'>
            <NavLink
                to='/host'
                className={({ isActive }) => isActive ? "active-link" : ""}
            >
                Dashboard
            </NavLink>
            <NavLink
                to='/host/income'
                className={({ isActive }) => isActive ? "active-link" : ""}
            >
                Income
            </NavLink>
            <NavLink
                to='/host/vans'
                className={({ isActive }) => isActive ? "active-link" : ""}
            >
                Vans
            </NavLink>
            <NavLink
                to='/host/reviews'
                className={({ isActive }) => isActive ? "active-link" : ""}
            >
                Reviews
            </NavLink>
        </nav>
    )
}
