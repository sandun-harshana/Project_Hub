import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ProjectContext } from './ProjectContext';

const ProjectDetails = () => {
  const { id } = useParams();
  const { projects } = useContext(ProjectContext);
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 py-12 text-center"
      >
        <h2 className="text-2xl font-bold text-ph-white">Project Not Found</h2>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 py-12"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-96 object-cover rounded-lg mb-6"
      />
      <h2 className="text-3xl font-bold mb-4 text-ph-white">{project.title}</h2>
      <div className="project-details">
        <p className="text-ph-gray mb-4">{project.description}</p>
        <p className="text-sm text-ph-gray mb-2">Category: {project.category}</p>
        <p className="text-sm text-ph-gray mb-2">Creator: {project.creator}</p>
        <p className="text-sm text-ph-gray">Created: {project.createdAt}</p>
        {project.rating && <p className="text-sm text-ph-gray">Rating: {project.rating.toFixed(1)}/5</p>}
      </div>
    </motion.div>
  );
};

export default ProjectDetails;