import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { ProjectContext } from './ProjectContext';

const ProjectSubmissionForm = () => {
  const { addProject } = useContext(ProjectContext);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    image: '',
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.category) newErrors.category = 'Category is required';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    addProject(formData);
    alert('Project submitted successfully!');
    setFormData({ title: '', description: '', category: '', image: '' });
    setErrors({});
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-6 py-16"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-ph-red" role="heading" aria-level="1">
        Submit a Project
      </h2>
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-ph-light p-8 rounded-lg shadow-md border border-ph-light-gray"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-8">
          <label htmlFor="title" className="block text-xl text-ph-white font-semibold mb-2">
            Title
          </label>
          <input
            id="title"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-ph-red ${
              errors.title ? 'border-red-500' : 'border-ph-light-gray'
            }`}
            aria-required="true"
            aria-invalid={!!errors.title}
            aria-describedby={errors.title ? 'title-error' : undefined}
          />
          {errors.title && (
            <p id="title-error" className="text-red-500 text-sm mt-2">
              {errors.title}
            </p>
          )}
        </div>
        <div className="mb-8">
          <label htmlFor="description" className="block text-xl text-ph-white font-semibold mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={`w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-ph-red ${
              errors.description ? 'border-red-500' : 'border-ph-light-gray'
            }`}
            rows="6"
            aria-required="true"
            aria-invalid={!!errors.description}
            aria-describedby={errors.description ? 'description-error' : undefined}
          ></textarea>
          {errors.description && (
            <p id="description-error" className="text-red-500 text-sm mt-2">
              {errors.description}
            </p>
          )}
        </div>
        <div className="mb-8">
          <label htmlFor="category" className="block text-xl text-ph-white font-semibold mb-2">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={`w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-ph-red ${
              errors.category ? 'border-red-500' : 'border-ph-light-gray'
            }`}
            aria-required="true"
            aria-invalid={!!errors.category}
            aria-describedby={errors.category ? 'category-error' : undefined}
          >
            <option value="">Select a category</option>
            <option value="AI">AI</option>
            <option value="Web">Web</option>
            <option value="Mobile">Mobile</option>
            <option value="Other">Other</option>
          </select>
          {errors.category && (
            <p id="category-error" className="text-red-500 text-sm mt-2">
              {errors.category}
            </p>
          )}
        </div>
        <div className="mb-8">
          <label htmlFor="image" className="block text-xl text-ph-white font-semibold mb-2">
            Image URL (Optional)
          </label>
          <input
            id="image"
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-ph-red border-ph-light-gray"
            placeholder="https://example.com/image.jpg"
          />
        </div>
        <motion.button
          type="submit"
          className="w-full bg-ph-red text-ph-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-ph-red focus:ring-offset-2 focus:ring-offset-ph-dark transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Submit Project
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default ProjectSubmissionForm;