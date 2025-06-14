import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ title, description, id }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={`/project/${id}`}>View Project</Link>
    </div>
  );
};

export default ProjectCard;