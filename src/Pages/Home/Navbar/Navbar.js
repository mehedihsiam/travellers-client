import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppBar, Box, Container, Toolbar } from '@mui/material';
import React from 'react';
import './Navbar.css';

const Navbar = ({ isOpen, setIsOpen }) => {
  const handleOpen = () => {
    isOpen ? setIsOpen(false):setIsOpen(true)
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Container>
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              <Box sx={{ width: '50px' }}>
                <img className='logo' src="https://i.ibb.co/Dfq4TWL/logo.png" alt="" />
              </Box>
            </Box>
            <button className='user-btn' onClick={() => handleOpen()}>
              <FontAwesomeIcon className='color-a user-icon' icon={faUserCircle} />
            </button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;