import { Box, Button, Link, Typography } from '@mui/material'
import React, { useState } from 'react'
import ProjectsSmall from "./ProjectsSmall"
import ProjectsLarge from "./ProjectsLarge"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function Projects() {

  const [project, setProject] = useState(0)

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
      >Projects
      </Typography>
      <Box className='underline-projects'></Box>
      <Box
        sx={{
          padding: "20px 0 20px 0",
          display: "flex",
          // border: "solid",
          width: "15%",
          justifyContent: "space-evenly"
        }}
      >
        <Button
          onClick={
            () => {
              setProject(0)
            }
          }
          variant= "contained"
        >
          small
        </Button>
        <Button
          onClick={
            () => {
              setProject(1)
            }
          }
          variant= "contained"
        >
          large
        </Button>
      </Box>
      
      <Box>
        {project === 0 ? <ProjectsSmall /> : <ProjectsLarge />}
      </Box>
    </Box>
  )
}

export default Projects 