import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import ProjectMarketplace from './ProjectMarketplace';
import ProjectDetails from './ProjectDetails';
import ProjectSubmissionForm from './ProjectSubmissionForm';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/marketplace" element={<ProjectMarketplace />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/submit-project" element={<ProjectSubmissionForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;