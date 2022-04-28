import React, { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Divider } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { links } from '../layout/Data';
import {
  IconButton,
  Link,
  List,
  ListItem,
  Box,
  ListItemIcon,
} from '@mui/material';
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineRead,
  AiOutlineContacts,
  AiOutlineMail,
  AiOutlineLaptop,
} from 'react-icons/ai';

function BurgerMenu() {
  const [open, setOpen] = useState(false);
  // using state to store the id of the nav links from Data.js
  const [value, setValue] = useState(0);

  // using useEffect to set the value of the state to "1" on page load. This sets the
  useEffect(() => {
    setValue(1);
  }, []);

  return (
    <div>
      {/* Hamburger menu and the links.
          Hamburger menu icon using mui icons.
      */}
      <Box
        sx={{
          display: { xs: 'block', md: 'none' },
          marginRight: '30px',
          // border: 'solid',
        }}
      >
        <MenuIcon
          onClick={() => setOpen(true)}
          sx={{ color: '#eceff4', cursor: 'pointer' }}
        />
      </Box>

      {/* Swipeable drawer when the hamburger menu is opened  */}
      <SwipeableDrawer
        anchor='right'
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        sx={{ zIndex: '2200' }}
        PaperProps={{
          sx: {
            backgroundColor: '#2e3440',
            width: '50vw',
          },
        }}
      >
        {/* Right arrow button to close the swipeable menu drawer  */}
        <Box>
          <IconButton>
            <ChevronRightIcon
              onClick={() => setOpen(false)}
              sx={{
                color: '#eceff4',
                fontSize: '30px',
              }}
            />
          </IconButton>
        </Box>

        {/* Line divider to seperate icon above and the nav links  */}
        <Divider />

        {/* Links mapped though to list on the drawer.
              Using <List> and <ListItem> to automatically add padding to the links. It also lists them on top of each other
          */}
        <List className='navlink-mobile-list'>
          {links.map((link) => {
            return (
              <Link
                href={link.url}
                key={link.id}
                className='navlink-mobile-link'
                // on click the state is given the value of "link.id"
                onClick={() => {
                  setValue(link.id);
                  console.log(value);
                }}
              >
                <ListItem
                  // This gives the active nav link a different css class to reflect its active.
                  className={`navlink-mobile-listitem ${
                    link.id === value && 'navlink-mobile-listitem-active'
                  }`}
                >
                  {link.text === 'Home' && (
                    <ListItemIcon>
                      <AiOutlineHome color='white' fontSize='25px' />
                    </ListItemIcon>
                  )}
                  {link.text === 'About' && (
                    <ListItemIcon>
                      <AiOutlineContacts color='white' fontSize='25px' />
                    </ListItemIcon>
                  )}
                  {link.text === 'Work' && (
                    <ListItemIcon>
                      <AiOutlineLaptop color='white' fontSize='25px' />
                    </ListItemIcon>
                  )}
                  {link.text === 'Projects' && (
                    <ListItemIcon>
                      <AiOutlineFundProjectionScreen
                        color='white'
                        fontSize='25px'
                      />
                    </ListItemIcon>
                  )}
                  {link.text === 'Education' && (
                    <ListItemIcon>
                      <AiOutlineRead color='white' fontSize='25px' />
                    </ListItemIcon>
                  )}
                  {link.text === 'Contact' && (
                    <ListItemIcon>
                      <AiOutlineMail color='white' fontSize='25px' />
                    </ListItemIcon>
                  )}
                  {link.text}
                </ListItem>
              </Link>
            );
          })}
        </List>
      </SwipeableDrawer>
    </div>
  );
}

export default BurgerMenu;
