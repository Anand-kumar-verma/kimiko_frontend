import React, { useEffect, useState } from 'react'
import logo from '../../Kimassets/images/logo-2.png'
import { NavLink } from 'react-router-dom'
import { Drawer, List, ListItem, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery } from '@mui/material';

function Header() {

  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [sticky, setSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1040);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1040);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    width: '100%',
  };

  const headerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#163300',
    boxShadow: sticky ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
    transition: 'box-shadow 0.3s ease-in-out',
    zIndex: 1000,
  };

  const innerHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 0',
  };

  const logoStyle = {
    height: '40px', // Adjust size as needed
  };

  const menuContainerStyle = {
    display: isMobile ? (menuOpen ? 'flex' : 'none') : 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: isMobile ? 'center' : 'center',
    position: isMobile ? 'absolute' : 'static',
    top: isMobile ? '60px' : 'auto', // Adjust based on header height
    left: isMobile ? 0 : 'auto',
    right: isMobile ? 0 : 'auto',
    backgroundColor: isMobile ? '#fff' : 'transparent',
    boxShadow: isMobile ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
    padding: isMobile ? '10px 0' : '0',
    listStyle: 'none',
    margin: 0,
    padding: 0,

  };
  const nav = {
    display: isMobile ? (menuOpen ? 'flex' : 'none') : 'flex',
  }

  const menuItemStyle = {
    margin: isMobile ? '10px 0' : '0 15px',
    textDecoration: 'none',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
    fontFamily: 'Arial, sans-serif',
  };

  const activeLinkStyle = {
    fontWeight: 'bold',
    color: '#89EA5F', // Adjust active link color
  };

  const menuButtonStyle = {
    display: isMobile ? 'block' : 'none',
    background: '#89EA5F',
    border: 'none',
    cursor: 'pointer',
    fontSize: '24px',
    color: 'white',
    padding: '10px 10px 13px 10px',
    borderRadius: '10px'
  };



  return (
    <div>
      <div className='container'>
        <header style={headerStyle}>
          <div style={containerStyle}>
            <div style={innerHeaderStyle}>
              <NavLink className="navbar-brand " to='/'>
                <img src={logo} alt="Logo" style={logoStyle} />
              </NavLink>
              <button style={menuButtonStyle} onClick={toggleDrawer}>
                {menuOpen ? '✖' : '☰'}
              </button>
              <nav style={nav}>
                <ul style={menuContainerStyle}>
                  <li>
                    <NavLink
                      to="/"
                      style={({ isActive }) => ({
                        ...menuItemStyle,
                        ...(isActive ? activeLinkStyle : {}),
                      })}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/Kim/aboutUs"
                      style={({ isActive }) => ({
                        ...menuItemStyle,
                        ...(isActive ? activeLinkStyle : {}),
                      })}
                    >
                      About us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/Kim/services"
                      style={({ isActive }) => ({
                        ...menuItemStyle,
                        ...(isActive ? activeLinkStyle : {}),
                      })}
                    >
                      services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/Kim/Project"
                      style={({ isActive }) => ({
                        ...menuItemStyle,
                        ...(isActive ? activeLinkStyle : {}),
                      })}
                    >
                      Our Project
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/Kim/blog"
                      style={({ isActive }) => ({
                        ...menuItemStyle,
                        ...(isActive ? activeLinkStyle : {}),
                      })}
                    >
                      Blog
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/Kim/Contact"
                      style={({ isActive }) => ({
                        ...menuItemStyle,
                        ...(isActive ? activeLinkStyle : {}),
                      })}
                    >
                      Contact Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="btn-default"
                      to="/auth"
                      style={({ isActive }) => ({
                        ...menuItemStyle,
                        ...(isActive ? activeLinkStyle : {}),
                      })}
                    >
                      Login / Register
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
      </div>
      {/* <header class="main-header">
        <div class="header-sticky">
          <nav class="navbar navbar-expand-lg">
            <div class="container">
              <div className='abcd'>
                <a class="navbar-brand " href="index.html">
                  <img src={logo} alt="Logo" />
                </a>
                {isMobile && (
                  <IconButton onClick={toggleDrawer}>
                    <MenuIcon sx={{ background: '#89EA5F', padding: '5px', width: '50px', height: '50px', borderRadius: '10px' }} />
                  </IconButton>
                )}
              </div>

              <div class="collapse navbar-collapse main-menu">
                <ul class="navbar-nav mr-auto" id="menu">
                  <li class="nav-item ">
                    <NavLink to={'/'} className="nav-item">Home</NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink to={'/Kim/aboutUs'} className="nav-item">About us</NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink to={'/Kim/services'} className="nav-item">services</NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink to={'/Kim/Project'} className="nav-item">Our Project</NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink to={'/Kim/blog'} className="nav-item">Blog</NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink to={'/Kim/Contact'} className="nav-item">Contact</NavLink>
                  </li>
                  <li class="nav-item highlighted-menu">
                    <NavLink to={'/auth'} className="nav-item">Login / Register</NavLink>
                  </li>
                </ul>
              </div>
              <div class="navbar-toggle"></div>
            </div>
          </nav>
          <div class="responsive-menu"></div>
        </div>
      </header> */}
      <div>
        <Drawer anchor="left" open={open} onClose={toggleDrawer} PaperProps={{
          sx: { width: '250px', background: '#000000', padding: '20px ' },
        }}>
          <img src={logo} alt="Logo" style={{ width: '120px', marginBottom: '20px' }} />
          <NavLink to={'/'} className="nav-item mobilenav">Home</NavLink>
          <NavLink to={'/Kim/aboutUs'} className="nav-item mobilenav">About us</NavLink>
          <NavLink to={'/Kim/services'} className="nav-item mobilenav">services</NavLink>
          <NavLink to={'/Kim/Project'} className="nav-item mobilenav">Our Project</NavLink>
          <NavLink to={'/Kim/blog'} className="nav-item mobilenav">Blog</NavLink>
          <NavLink to={'/Kim/Contact'} className="nav-item mobilenav">Contact</NavLink>
          <NavLink to={'/auth'} className="nav-item mobilenav">Login / Register</NavLink>
        </Drawer>
      </div>
    </div>
  )
}

export default Header




