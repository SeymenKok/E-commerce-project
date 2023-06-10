import {Fragment} from 'react';
import {Outlet, Link} from "react-router-dom";
import './navigation.styles.scss';
import {ReactComponent as CompLogo} from '../../assest/computer.svg'

const Navigation = () =>{
    return(
        <Fragment>
            <div className='navigation'>
                <Link className="logo-container" to="/">
                <CompLogo className="logo"/>
                </Link>
                 <div className="nav-links-container">
                    <Link className='nav-link' to="/shop">
                    Shop
                    </Link>
                    <Link className='nav-link' to="/sign-in">
                    SIGN IN
                    </Link>
                 </div>
                 {/* <div className='nav-contact-container'>
                    <Link className='nav-contact'  to='/contact' >
                    Contact
                    </Link>
                 </div> */}
                   {/* <div className='nav-sign-container'>
                   <Link className='nav-sign' to='/sign'>Sign in/up</Link>

                   </div> */}
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;