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
          <div className='project-img-container container'>
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
              <div class='overlay'>
                <div class='text'>{data.text}</div>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectsLarge;
