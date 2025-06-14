import React from 'react';

const ProjectSubmissionForm = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Submit a Project</h2>
      <form>
        <div>
          <label>Title: </label>
          <input type="text" placeholder="Project Title" />
        </div>
        <div>
          <label>Description: </label>
          <textarea placeholder="Project Description"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProjectSubmissionForm;