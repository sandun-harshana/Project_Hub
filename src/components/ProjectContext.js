import React, { createContext, useState } from 'react';

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Tiki Extension',
      description: 'Simplify text on the web with AI.',
      category: 'AI',
      creator: 'John Doe',
      createdAt: '2025-06-01',
      image: 'https://source.unsplash.com/random/800x600/?ai',
      rating: 4.5,
    },
    {
      id: 2,
      title: 'Custom Web Solutions',
      description: 'Tailored web systems for your needs.',
      category: 'Web',
      creator: 'Jane Smith',
      createdAt: '2025-06-02',
      image: 'https://source.unsplash.com/random/800x600/?web',
      rating: 4.7,
    },
    {
      id: 3,
      title: 'AI Agent',
      description: 'AI assistant to streamline tasks.',
      category: 'AI',
      creator: 'Alex Lee',
      createdAt: '2025-06-03',
      image: 'https://source.unsplash.com/random/800x600/?agent',
      status: 'Coming Soon',
    },
    {
      id: 4,
      title: 'Tiki App',
      description: 'A new way to connect and interact.',
      category: 'Mobile',
      creator: 'Sarah Brown',
      createdAt: '2025-06-04',
      image: 'https://source.unsplash.com/random/800x600/?mobile',
      status: 'Coming Soon',
    },
  ]);

  const addProject = (project) => {
    setProjects([
      ...projects,
      {
        ...project,
        id: projects.length + 1,
        creator: 'Anonymous',
        createdAt: new Date().toISOString().split('T')[0],
        image: project.image || 'https://source.unsplash.com/random/800x600/?project',
        rating: 0,
      },
    ]);
  };

  return (
    <ProjectContext.Provider value={{ projects, addProject }}>
      {children}
    </ProjectContext.Provider>
  );
};