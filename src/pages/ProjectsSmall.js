import React from 'react'
import {projectData} from "./ProjectData"

function ProjectsSmall() {

  const filteredData = projectData.filter(
    (data) => {
      return data.type === "small"
    }
  )

  return (
    <div className='project-container'>
      {
        filteredData.map(
          (data) => {
            return(
              <div key={data.id} className="project-img-container" >
                <a  href={data.url} target="_blank" rel="noopener noreferrer">
                  <div style={{backgroundImage: "url(" + "data.img" +")", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}></div>
                  <div className='text-bar'>
                    <h2>{data.text}</h2>
                  </div>
                </a>
              </div>
            )
          }
        )
      }
    </div>
  )
}

export default ProjectsSmall