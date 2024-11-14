import { Link, useLocation } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";
import './BackLink.css';

export default function BackLink() {
    const location = useLocation();
    const search = location.state?.search || "";
    return (
        <Link
            to={`..${search}`}
            relative='path'
            className='back-link'
        >
            <BiArrowBack className='back-arrow'/>
            <p>Back to all vans</p>
        </Link>
    )
}
