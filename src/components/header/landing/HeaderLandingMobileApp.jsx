import React, { useState } from 'react';
import Scrollspy from 'react-scrollspy';
import { Link } from 'react-router-dom';
import MegaMenuLanding from '../../header/mega-menu/MegaMenuLanding';

const HeaderLandingMobileApp = () => {
  // For header select menu
  const [click1, setClick1] = useState(false);
  const handleClick1 = () => setClick1(!click1);

  // For Mobile  menu
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <>
      {/* =============================================
				Theme Main Menu
			==============================================  */}
      <div
        className={
          navbar
            ? 'theme-main-menu sticky-menu theme-menu-five fixed'
            : 'theme-main-menu sticky-menu theme-menu-five'
        }>
        <div className='d-flex align-items-center justify-content-center'>
          <div className='logo'>
            <Link to='/doc-landing'>
              <img src='images/logo/deski_06.svg' alt='brand' />
            </Link>
          </div>
          {/* End logo */}

          <nav id='mega-menu-holder' className='navbar navbar-expand-lg'>
            <div className='container nav-container'>
              <div className='mob-header'>
                <button className='toggler-menu' onClick={handleClick}>
                  <div className={click ? 'active' : ''}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </button>
              </div>
              {/* End Header */}

              <div
                className='navbar-collapse collapse landing-menu-onepage'
                id='navbarSupportedContent'>
                <div className='d-lg-flex justify-content-between align-items-center'>
                  <Scrollspy
                    className='navbar-nav  main-side-nav font-gordita'
                    items={['home', 'product', 'features', 'feedback']}
                    currentClassName='active'
                    offset={-90}>
                    <li className='nav-item  position-static'>
                      <a className='nav-link ' href='#home'>
                        Anasayfa
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a href='#product' className='nav-link'>
                        Portfolyo
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a href='#features' className='nav-link'>
                        Hizmetler
                      </a>
                    </li>

                    <li className='nav-item'>
                      <a href='#feedback' className='nav-link'>
                        İletişim
                      </a>
                    </li>
                  </Scrollspy>
                </div>
              </div>
            </div>
          </nav>
          {/* End Navbar */}

          {/* End right-widget */}
        </div>
      </div>
      *{/* /.theme-main-menu */}
      {/* Mobile Menu Start */}
      <div className={click ? 'mobile-menu  menu-open' : 'mobile-menu'}>
        <div className='logo order-md-1'>
          <Link to='/doc-landing'>
            <img src='images/logo/deski_06.svg' alt='brand' />
          </Link>
          <div className='fix-icon text-dark' onClick={handleClick}>
            <img src='images/icon/close.svg' alt='icon' />
          </div>
          {/* Mobile Menu close icon */}
        </div>

        <Scrollspy
          className='navbar-nav  main-side-nav font-gordita'
          items={['home', 'product', 'features', 'feedback']}
          currentClassName='active'
          offset={-90}>
          <li className='nav-item'>
            <a href='#home' className='nav-link' onClick={handleClick}>
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a href='#product' className='nav-link' onClick={handleClick}>
              Product
            </a>
          </li>
          <li className='nav-item'>
            <a href='#features' className='nav-link' onClick={handleClick}>
              Features
            </a>
          </li>

          <li className='nav-item'>
            <a href='#feedback' className='nav-link' onClick={handleClick}>
              Feedback
            </a>
          </li>
        </Scrollspy>
      </div>
      {/* Mobile Menu End */}
    </>
  );
};

export default HeaderLandingMobileApp;
