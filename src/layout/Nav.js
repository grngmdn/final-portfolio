import { Link } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import {links} from "./Data"

function Nav() {
  return (
    <nav className='sticky navbar'>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          // border: "solid",
          width: "100%",
        }}
      >
        <Box
          sx={{marginLeft: "50px"}}
        >
          <Link 
            href='#home'
            sx={{color: "white", textDecoration: "none"}}
          >MG
          </Link>
        </Box>
        {/* looping the nav links (data.js) using map and displaying it in the page*/}
        <Box
          sx={{marginRight: "50px"}}
        >
          {
            links.map(
              (link) => {
                return(
                  <Link href={link.url} key={link.id} sx={{color: "white", textDecoration: "none", padding: "10px", "&:hover": {backgroundColor: "#444444", borderRadius: "10px"}}}>
                    {link.text}
                  </Link>
                )
              }
            )
          }
        </Box>
      </Box>
    </nav>
  )
}

export default Nav 