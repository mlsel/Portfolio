import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaEnvelope } from 'react-icons/fa';
import { PiHouseFill, PiFolderFill } from "react-icons/pi";
import './Header.css';

const Header = ({ scrollToHome }) => {
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const handleScroll = () => {
        const header = document.querySelector('header');
        if (header && window.scrollY > 50) {
          header.classList.add('scrolled');
        } else if (header) {
          header.classList.remove('scrolled');
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isMobile]);

  const handleHomeClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      scrollToHome();
    }
  };

  return (
    <>
      {isMobile ? (
        <div className="bottom-nav">
          <Link to="/" onClick={handleHomeClick}>
            <PiHouseFill />
            <span>Hjem</span>
          </Link>
          <Link to="/prosjekter">
            <PiFolderFill />
            <span>Prosjekter</span>
          </Link>
          <Link to="/kontakt">
            <FaEnvelope />
            <span>Kontakt</span>
          </Link>
        </div>
      ) : (
        <header>
          <nav>
            <ul>
              <li><Link to="/" onClick={handleHomeClick}>Hjem</Link></li>
              <li><Link to="/prosjekter">Prosjekter</Link></li>
              <li><Link to="/kontakt">Kontakt</Link></li>
            </ul>
          </nav>
        </header>
      )}
    </>
  );
};

export default Header;
