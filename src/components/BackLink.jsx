import { Link } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";
import './BackLink.css';

export default function BackLink({linkTo}) {
    return (
        <Link to={linkTo} className='back-link'>
            <BiArrowBack className='back-arrow'/>
            <p>Back to all vans</p>
        </Link>
    )
}
