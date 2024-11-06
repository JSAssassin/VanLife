import { Link } from 'react-router-dom';
import './HostHeader.css';

export default function HostHeader() {
    return (
        <nav className='host-header'>
            <Link to='/host'>Dashboard</Link>
            <Link to='/host/income'>Income</Link>
            <Link to='/host/reviews'>Reviews</Link>
        </nav>
    )
}
