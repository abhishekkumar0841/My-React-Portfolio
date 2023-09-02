import React from "react";
import "./ProjectCard.scss";

const ProjectCard = ({ project }) => {
  return (
    <div className="projectCard">
      <h1> {project.title} </h1>
      <div className="image">
        <img src={project.image} alt="Project Image" />
      </div>
      <div className="links">
        <a href={project.liveLink}>Live Link</a>
        <a href={project.gitHubRepo}>GitHub Repo</a>
      </div>
    </div>
  );
};

export default ProjectCard;
