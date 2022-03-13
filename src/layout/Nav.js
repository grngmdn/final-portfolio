import { Link, List, ListItem } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import {links} from "./Data"

function Nav() {
  return (
    <nav>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <Box>
          logo
        </Box>
        <Box>
          {
            links.map(
              (link) => {
                return(
                  <Link href={link.url} key={link.id} sx={{color: "white", textDecoration: "none", padding: "5px"}}>
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