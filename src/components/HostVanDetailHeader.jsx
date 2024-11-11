import { NavLink } from 'react-router-dom';
import './HostVanDetailHeader.css';

export default function HostVanDetailHeader() {
    return (
        <nav className='host-van-detail-header'>
            <NavLink
                to=''
                end
                className={({ isActive }) => isActive ? "active-link" : ""}
            >
                Details
            </NavLink>
            <NavLink
                to='pricing'
                className={({ isActive }) => isActive ? "active-link" : ""}
            >
                Pricing
            </NavLink>
            <NavLink
                to='photos'
                className={({ isActive }) => isActive ? "active-link" : ""}
            >
                Photos
            </NavLink>
        </nav>
    )
}
