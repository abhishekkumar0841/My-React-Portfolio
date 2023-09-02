import React, { useState } from 'react'
import './Projects.scss'
import projectsData from '../../projectsData/projectsData'
import ProjectCard from './ProjectCard'
import {BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill} from 'react-icons/bs'

const Projects = () => {

  const [index, setIndex] = useState(0)

  return (
    <div className='projects' id='projects'>
      <h1>My Projects</h1>
      <div className="projectContainer">
        {
          projectsData.map((project)=>(
            <ProjectCard key={project.id} project={project} />
          ))
        }
        <div className="leftArrow">
        <BsFillArrowLeftCircleFill/>
        </div>
        <div className="rightArrow">
          <BsFillArrowRightCircleFill/>
        </div>
      </div>
    </div>
  )
}

export default Projects
