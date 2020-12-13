import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import {MdFingerprint} from 'react-icons/md';
import { GiSewingNeedle } from 'react-icons/gi';
import {Button} from './Button';
import './Navbar.css';
import {IconContext} from 'react-icons/lib';
//navbar-page
function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else{
            setButton(true);
        }

    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize',
    showButton);

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                    <GiSewingNeedle className='navbar-icon'/>
                        TAIBE'S SKRÄDDERI
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                Hem
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/information' className="nav-links" onClick={closeMobileMenu}>
                                Information
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/booking' className="nav-links" onClick={closeMobileMenu}>
                                Boka tid
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar

/* 
 <li className="nav-btn">
    {button ? (
    <Link to='/sign-up'className="btn-link" onClick={closeMobileMenu}>
    <Button buttonStyle='btn--outline'>SIGN UP</Button>
    </Link>
    ) : (
    <Link to='/sign-up' className="btn-link" onClick={closeMobileMenu}>
    <Button buttonStyle='btn--outline'
    buttonSize='btn--mobile'
    >SIGN UP</Button>
    </Link>
    )}
    </li>
*/

