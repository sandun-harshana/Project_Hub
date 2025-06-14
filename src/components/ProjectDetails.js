import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const { id } = useParams();

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Project Details</h2>
      <p>Details for Project ID: {id}</p>
    </div>
  );
};

export default ProjectDetails;