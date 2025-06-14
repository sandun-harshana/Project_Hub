import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProjectProvider } from './ProjectContext';
import Header from './Header';
import Hero from './Hero';
import ProjectMarketplace from './ProjectMarketplace';
import ProjectDetails from './ProjectDetails';
import ProjectSubmissionForm from './ProjectSubmissionForm';
import Dashboard from './Dashboard';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <ProjectProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen bg-ph-dark text-ph-white">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/marketplace" element={<ProjectMarketplace />} />
              <Route path="/project/:id" element={<ProjectDetails />} />
              <Route path="/submit-project" element={<ProjectSubmissionForm />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ProjectProvider>
  );
}

export default App;