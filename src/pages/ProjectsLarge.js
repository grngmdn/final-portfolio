import { Grid } from '@mui/material';
import React from 'react';
import { projectData } from './ProjectData';

function ProjectsLarge() {
  const filteredData = projectData.filter((data) => {
    return data.type === 'large';
  });

  return (
    <div className='project-container'>
      {filteredData.map((data) => {
        return (
          <div key={data.id} className='project-img-container'>
            <a href={data.url} target='_blank' rel='noopener noreferrer'>
              <img alt='large project thumbnail' src={data.img} width='400px' />
              <div className='text-bar'>
                <h2>{data.text}</h2>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectsLarge;
