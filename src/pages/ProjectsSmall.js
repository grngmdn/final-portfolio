import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { projectData } from './ProjectData';
import { FaReact, FaBootstrap } from 'react-icons/fa';
import { SiMaterialui } from 'react-icons/si';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';

function ProjectsSmall() {
  const filteredData = projectData.filter((data) => {
    return data.type === 'small';
  });

  return (
    <div className='project-container'>
      {filteredData.map((data, index) => {
        return (
          <div key={index} className='project-img-container container'>
            <a href={data.url} target='_blank' rel='noopener noreferrer'>
              <div key={data.id} className='project-img-block'>
                <img
                  alt='large project thumbnail'
                  src={data.img}
                  className='project-img'
                />
              </div>
              <div className='text-bar'>
                <p>{data.text}</p>
              </div>
              <div className='overlay'>
                <div className='text'>
                  <div>
                    <Typography variant='h6'>{data.description}</Typography>
                  </div>
                  <Box mt={1}>
                    <Typography variant='overline'>technology used:</Typography>
                    <Box>
                      {data.tech.html === 'html' && <AiFillHtml5 />}
                      {data.tech.css === 'css' && <DiCss3 />}
                      {data.tech.react === 'react' && <FaReact />}
                      {data.tech.mui === 'mui' && <SiMaterialui />}
                      {data.tech.bootstrap === 'bootstrap' && <FaBootstrap />}
                    </Box>
                  </Box>
                </div>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectsSmall;
