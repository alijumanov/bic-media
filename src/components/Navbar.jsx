import React, { useState } from 'react';
import '../styles/Navbar.scss';
import Logo from '../assets/images/logo.png';
import { Link, useLocation } from 'react-router-dom';
import { CloseIcon, MenuIcon } from '../assets/svgIcons/svgIcons';

const Navbar = () => {

    const { pathname } = useLocation();

    // responsive options

    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className='Navbar'>
            <div className="navbar">
                <Link to="/" className='logo' onClick={() => window.scrollTo(0, 0)}>
                    <img src={Logo} alt="logo" className='img' />
                </Link>
                <div className={`links gap-3 ${showMenu && "show-menu"}`}>
                    <Link to="/about" className={`link text pd-1 ${pathname == "/about" && "active-link"}`} onClick={() => setShowMenu(false)}>haqida</Link>
                    <Link to="/services" className={`link text pd-1 ${pathname == "/services" && "active-link"}`} onClick={() => setShowMenu(false)}>xizmatlar</Link>
                    <Link to="/projects" className={`link text pd-1 ${pathname == "/projects" && "active-link"}`} onClick={() => setShowMenu(false)}>loyihalar</Link>
                    <Link to="/contacts" className={`link text pd-1 ${pathname == "/contacts" && "active-link"}`} onClick={() => setShowMenu(false)}>aloqalar</Link>
                    <div className="languages ver-2">
                        <div className="language text pd-1">uz</div>
                        <div className="line"></div>
                        <div className="language text pd-1">ru</div>
                        <div className="line"></div>
                        <div className="language text pd-1">en</div>
                    </div>
                    <div className="close-icon" onClick={() => setShowMenu(false)}><CloseIcon /></div>
                </div>
                <div className="languages ver-1">
                    <div className="language text pd-1">uz</div>
                    <div className="line"></div>
                    <div className="language text pd-1">ru</div>
                    <div className="line"></div>
                    <div className="language text pd-1">en</div>
                </div>
                <div className="menu-icon" onClick={() => setShowMenu(true)}><MenuIcon /></div>
            </div>
        </div>
    );
};

export default Navbar;