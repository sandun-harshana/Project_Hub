import React from 'react';
import { Link } from 'react-router-dom';

const ProjectMarketplace = () => {
  // Mock project data
  const projects = [
    { id: 1, title: 'Project 1' },
    { id: 2, title: 'Project 2' },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Project Marketplace</h2>
      {projects.map((project) => (
        <div key={project.id}>
          <Link to={`/project/${project.id}`}>{project.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default ProjectMarketplace;