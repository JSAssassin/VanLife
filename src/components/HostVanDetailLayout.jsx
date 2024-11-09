import { Outlet } from 'react-router-dom';
import BackLink from './BackLink';

export default function HostVanDetailLayout() {
    return (
        <>
            <BackLink linkTo='/host/vans'/>
            <Outlet />
        </>
    );
}
