import React, { useState } from 'react'
import {projectData} from "./ProjectData"

function ProjectsSmall() {
  const [datas, setDatas] = useState(projectData)

  const filteredData = datas.filter(
    (data) => {
      if(data.type == "small"){
        return data
      }
    }
  )

  return (
    <div>
      {
        filteredData.map(
          (data) => {
            return(
              <div key={data.id}>
                <a  href={data.url} target="_blank" rel="noopener noreferrer">
                  {data.text}
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