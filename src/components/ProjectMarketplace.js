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
      transition={{ duration: 0.6 }}
      className="project-marketplace"
    >
      <h2 className="text-4xl font-bold text-center mb-8 text-ph-red">ProjectHub Marketplace</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="project-card"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl mb-4 text-ph-white">{project.title}</h3>
            <p className="text-lg mb-8 text-ph-gray">{project.description}</p>
            {project.rating && (
              <div className="flex items-center mb-2">
                <span>⭐</span> {project.rating.toFixed(1)}/5
              </div>
            )}
            {project.status === 'Coming Soon' ? (
              <span className="inline-block bg-yellow-500 text-ph-white text-sm px-2 py-1 rounded">Coming Soon</span>
            ) : (
              <Link
                to={`/project/${project.id}`}
                className="bg-ph-red text-ph-white px-8 py-4 rounded hover:bg-red-600"
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