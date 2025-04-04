import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
// IMPORT IMAGE
// import Image1 from '../images/nav-1.png';
// IMPORT ICONS
import { PiDotsNineBold } from "react-icons/pi";
import { AiFillCloseCircle } from "react-icons/ai";

function Navbar() {

    const [active, setActive] = useState('meanu')

    // Function to toggile navBar
    const showNavbar = () => {
        setActive('meanu activeMeanu')
    }

    // Function to remove navBar
    const removeNavbar = () => {
        setActive('meanu')
    }

    return (
        <div className='navbar-second'>
            <Container>
                <div className='navbar-second-content'>
                    <div className='logo-Div'>
                        
                        <span style={{ fontSize: '11px', fontWeight: '900', color: '#fff' }}>ERE BUSINESS</span>
                    </div>
                    <div className={active}>
                        <ul className='nav-Links'>
                            <Link to='/' className='nav-link'>Home</Link>
                            <Link to='/sortPage' className='nav-link nav-link-sign'>Sort Pge</Link>
                            <Link to='/searchPage' className='nav-link'>Search Page</Link>
                            <Link to='/login' className='nav-link'>Login</Link>
                            <Link to='signup' className='nav-link'>Signup</Link>
                        </ul>
                        <AiFillCloseCircle className='closeIcon img-nav' onClick={removeNavbar} />
                    </div>
                    {/* <div className='inputDiv-nav'>
                        <input type="text" placeholder='What are you looking for?' />
                    </div> */}
                    
                    <div className='meanuIcon-Div'>
                        <PiDotsNineBold className='meanuIcon img-nav' onClick={showNavbar} />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar
