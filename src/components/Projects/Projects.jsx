import React from "react";
import "./Projects.scss";
import projectsData from "../../projectsData/projectsData";
import ProjectCard from "./ProjectCard";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Projects = () => {
  return (
    <Carousel responsive={responsive} className="carousel" showDots={true} >
        {
          projectsData.map((project)=>(
            <ProjectCard key={project.id} project={project} />
          ))
        }
    </Carousel>
  );
};

export default Projects;
