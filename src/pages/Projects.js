import { Box, Typography } from '@mui/material'
import React from 'react'

function Projects() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#292E39",
        padding: "40px 0 120px 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {/* Heading  */}
      <Typography
        variant='h4'
        sx={{fontWeight: "bold"}}
      >Projects</Typography>
    </Box>
  )
}

export default Projects