import React from "react";
import "./ProjectCard.scss";

const ProjectCard = ({ project }) => {
  return (
    <div className="projectCard">
      <h1>
        ..Project {project.id}.. <span>{project.title} </span>{" "}
      </h1>
      <div className="parent">
        <img
          src={project.image}
          alt="Project"
        />
        <div className="showOnHover">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
          doloremque harum impedit commodi possimus esse odio sed, eligendi
          nesciunt quos! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Dolores, ipsam optio mollitia quo ex eligendi vero
          necessitatibus consequuntur recusandae nemo tempora sunt saepe laborum
          quod incidunt dolorum nobis tempore. Libero?
        </div>
      </div>
      <div className="links">
        <a href={project.liveLink}>Live Link</a>
        <a href={project.gitHubRepo}>GitHub Repo</a>
      </div>
    </div>
  );
};

export default ProjectCard;
