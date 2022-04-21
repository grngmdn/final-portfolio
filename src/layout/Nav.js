import { Link } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { links } from './Data';
import logo from '../img/logo.png';
import BurgerMenu from '../component/BurgerMenu';

function Nav() {
  return (
    <nav className='sticky navbar'>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          // border: 'solid',
          width: '100%',
        }}
      >
        <Box
          sx={{
            marginLeft: '50px',
            // border: 'solid',
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
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                  padding: '10px',
                  '&:hover': {
                    backgroundColor: '#444444',
                    borderRadius: '10px',
                  },
                }}
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
