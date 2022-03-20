import React, {useState} from 'react'
import {projectData} from "./ProjectData"


function ProjectsLarge() {
  const [datas, setDatas] = useState(projectData)

  const filteredData = datas.filter(
    (data) => {
      if(data.type == "large"){
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

export default ProjectsLarge