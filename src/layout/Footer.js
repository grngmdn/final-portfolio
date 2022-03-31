import { Box, Link } from '@mui/material'
import React from 'react'
import DownloadIcon from '@mui/icons-material/Download';
import { GitHub, LinkedIn } from '@mui/icons-material';


function Footer() {
  return (
    <Box
      sx={{
        height: "5vh",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
      }}
    >
        <h5>Copyright © 2022 Madan Gurung</h5>
        <Box
            sx={{
              // border: "solid",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "90px"
            }}
        >
          <Link
            href='https://github.com/grngmdn'
            color= "#ECEFF4"
          >
            <GitHub fontSize='large' />
          </Link>
          <Link
            href='https://www.linkedin.com/in/madangurung'
            sx={{
              color: "#ECEFF4"
            }}
          >
            <LinkedIn fontSize='large' />
          </Link>
        </Box>
    </Box>
  )
}

export default Footer