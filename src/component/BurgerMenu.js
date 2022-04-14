import { Box } from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Divider } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { IconButton, Link, List, ListItem } from '@mui/material';
import { links } from '../layout/Data';

function BurgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Hamburger menu and the links.
          Hamburger menu icon using mui icons.
      */}
      <Box sx={{ display: { xs: 'block', md: 'none' }, marginRight: '50px' }}>
        <IconButton>
          <MenuIcon onClick={() => setOpen(true)} sx={{ color: '#eceff4' }} />
        </IconButton>
      </Box>

      {/* Swipeable drawer when the hamburger menu is opened  */}
      <SwipeableDrawer
        open={open}
        anchor='right'
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        sx={{ zIndex: '2200' }}
        PaperProps={{
          sx: {
            backgroundColor: '#2e3440',
            width: '30vw',
          },
        }}
      >
        {/* Right arrow button to close the swipeable menu drawer  */}
        <Box>
          <IconButton>
            <ChevronRightIcon
              onClick={() => setOpen(false)}
              sx={{ color: '#eceff4' }}
            />
          </IconButton>
        </Box>

        {/* Line divider to seperate icon above and the nav links  */}
        <Divider />

        {/* Links mapped though to list on the drawer.
              Using <List> and <ListItem> to automatically add padding to the links. It also lists them on top of each other
          */}
        <List>
          {links.map((link) => {
            return (
              <ListItem>
                <Link
                  href={link.url}
                  key={link.id}
                  sx={{
                    textDecoration: 'none',
                    color: '#eceff4',
                    '&:hover': {
                      backgroundColor: '#444444',
                      borderRadius: '10px',
                    },
                  }}
                >
                  {link.text}
                </Link>
              </ListItem>
            );
          })}
        </List>
      </SwipeableDrawer>
    </div>
  );
}

export default BurgerMenu;
