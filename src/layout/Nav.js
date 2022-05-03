import { Link } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { links } from './Data';
import logo from '../img/logo.png';
import BurgerMenu from '../component/BurgerMenu';

function Nav({
  homeVisible,
  aboutVisible,
  workVisible,
  projectsVisible,
  educationVisible,
  contactVisible,
}) {
  // using state to store the id of the nav links from Data.js
  const [value, setValue] = useState(0);

  // using useEffect to set the value of the state to "1" on page load. This sets the
  useEffect(() => {
    setValue(1);
  }, []);

  return (
    <nav className='sticky navbar'>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          // border: 'solid',
          width: '100%',
          maxWidth: '1200px',
        }}
      >
        {/* Website logo  */}
        <Box
          sx={{
            marginLeft: '30px',
            // border: 'solid red',
            display: 'flex',
            flexGrow: '1',
          }}
        >
          <Link href='#home' sx={{ color: 'white', textDecoration: 'none' }}>
            <img alt='website logo' src={logo} width='50px' />
          </Link>
        </Box>

        {/* looping the nav links (data.js) using map and displaying it in the page*/}
        <Box
          className='navlink-container'
          sx={{
            marginRight: '50px',
            display: { xs: 'none', md: 'block' },
            // border: 'solid',
          }}
        >
          {links.map((link) => {
            return (
              <Link
                href={link.url}
                key={link.id}
                // css styles are given to button based on which html section the user is currently on (using intersection observer).
                className={`navlink-links ${
                  (link.text === 'Home') & homeVisible
                    ? 'navlink-links-active'
                    : null
                } ${
                  (link.text === 'About') & aboutVisible
                    ? 'navlink-links-active'
                    : null
                } ${
                  (link.text === 'Work') & workVisible
                    ? 'navlink-links-active'
                    : null
                } ${
                  (link.text === 'Projects') & projectsVisible
                    ? 'navlink-links-active'
                    : null
                } ${
                  (link.text === 'Education') & educationVisible
                    ? 'navlink-links-active'
                    : null
                } ${
                  (link.text === 'Contact') & contactVisible
                    ? 'navlink-links-active'
                    : null
                }`}
              >
                {link.text}
              </Link>
            );
          })}
        </Box>
        <BurgerMenu />
      </Box>
    </nav>
  );
}

export default Nav;
