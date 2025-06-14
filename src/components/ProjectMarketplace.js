import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ProjectContext } from './ProjectContext';

const ProjectMarketplace = () => {
  const { projects } = useContext(ProjectContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="project-marketplace py-16 px-6"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-ph-red" role="heading" aria-level="1">
        ProjectHub Marketplace
      </h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="project-card bg-ph-light p-6 rounded-lg border border-ph-light-gray shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-6"
              loading="lazy"
            />
            <h3 className="text-2xl font-semibold text-ph-white mb-4">{project.title}</h3>
            <p className="text-lg text-ph-gray mb-6">{project.description}</p>
            {project.rating && (
              <div className="flex items-center mb-4 text-ph-white">
                <span className="mr-2">⭐</span> {project.rating.toFixed(1)}/5
              </div>
            )}
            {project.status === 'Coming Soon' ? (
              <span className="inline-block bg-yellow-500 text-ph-white text-sm px-3 py-1 rounded-full">
                Coming Soon
              </span>
            ) : (
              <Link
                to={`/project/${project.id}`}
                className="bg-ph-red text-ph-white px-6 py-3 rounded-full text-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-ph-red focus:ring-offset-2 focus:ring-offset-ph-dark transition-colors duration-300"
                aria-label={`View details for ${project.title}`}
              >
                View Details
              </Link>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectMarketplace;