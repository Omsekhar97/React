import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Components/css/Style.css';
import image from "../Components/assets/cfsols-logo.png";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { pathname } = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isActive = (path) => pathname === path;

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="elementor-nav-menu--main">
            <div className="navbar-header">
                <div className="navbar-logo">
                    <Link to="/" onClick={closeMenu}>
                        <img src={image} alt="Company Logo" />
                    </Link>
                </div>
                <button className="navbar-toggle" onClick={toggleMenu}>
                    ☰
                </button>
            </div>

            <ul className={`elementor-nav-menu ${isMenuOpen ? 'open' : ''}`}>
                <li className={`menu-item ${isActive('/') ? 'active' : ''}`}>
                    <Link to="/" className="elementor-item" onClick={closeMenu}>Home</Link>
                </li>
                <li className={`menu-item ${isActive('/about-us') ? 'active' : ''}`}>
                    <Link to="/about-us" className="elementor-item" onClick={closeMenu}>About Us</Link>
                </li>

                <li className={`menu-item menu-item-has-children ${pathname.startsWith('/services') ? 'active' : ''}`}>
                    <Link to="/services" className="elementor-item" onClick={closeMenu}>Services ▼</Link>
                    <ul className="sub-menu">
                        <li><Link to="/services/cloud-consulting" className={`elementor-sub-item ${isActive('/services/cloud-consulting') ? 'active' : ''}`} onClick={closeMenu}>Cloud Consulting</Link></li>
                        <li><Link to="/services/cloud-security" className={`elementor-sub-item ${isActive('/services/cloud-security') ? 'active' : ''}`} onClick={closeMenu}>Cloud Security</Link></li>
                        <li><Link to="/services/cloud-migration" className={`elementor-sub-item ${isActive('/services/cloud-migration') ? 'active' : ''}`} onClick={closeMenu}>Cloud Migration</Link></li>
                        <li><Link to="/services/cloud-management" className={`elementor-sub-item ${isActive('/services/cloud-management') ? 'active' : ''}`} onClick={closeMenu}>Cloud Management</Link></li>
                        <li><Link to="/services/software-testing" className={`elementor-sub-item ${isActive('/services/software-testing') ? 'active' : ''}`} onClick={closeMenu}>Software Testing</Link></li>
                        <li><Link to="/services/data-warehousing" className={`elementor-sub-item ${isActive('/services/data-warehousing') ? 'active' : ''}`} onClick={closeMenu}>Data Warehousing</Link></li>
                        <li><Link to="/services/software-development" className={`elementor-sub-item ${isActive('/services/software-development') ? 'active' : ''}`} onClick={closeMenu}>Software Development</Link></li>
                        <li><Link to="/services/it-consulting" className={`elementor-sub-item ${isActive('/services/it-consulting') ? 'active' : ''}`} onClick={closeMenu}>IT Consulting</Link></li>
                    </ul>
                </li>


                <li className={`menu-item ${isActive('/careers') ? 'active' : ''}`}>
                    <Link to="/careers" className="elementor-item" onClick={closeMenu}>Careers</Link>
                </li>
                <li className={`menu-item ${isActive('/clients') ? 'active' : ''}`}>
                    <Link to="/clients" className="elementor-item" onClick={closeMenu}>Clients</Link>
                </li>
                <li className={`menu-item ${isActive('/contactus') ? 'active' : ''}`}>
                    <Link to="/contactus" className="elementor-item" onClick={closeMenu}>Contact Us</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
