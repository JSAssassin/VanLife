import { NavLink } from 'react-router-dom';
import './HostHeader.css';

export default function HostHeader() {
    return (
        <nav className='host-header'>
            <NavLink
                to='.'
                end
                className={({ isActive }) => isActive ? "active-link" : ""}
            >
                Dashboard
            </NavLink>
            <NavLink
                to='vans'
                className={({ isActive }) => isActive ? "active-link" : ""}
            >
                Vans
            </NavLink>
        </nav>
    )
}
