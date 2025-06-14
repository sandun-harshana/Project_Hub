import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 py-12"
    >
      <h2 className="text-4xl font-bold text-center mb-8 text-ph-red">Get in Touch</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-ph-light p-6 rounded-lg border border-ph-light-gray">
          <h3 className="text-xl font-semibold mb-4 text-ph-white">Contact Information</h3>
          <p className="text-ph-gray mb-2"><span className="text-ph-red">📧</span> Email: contact@projecthub.com</p>
          <p className="text-ph-gray mb-2"><span className="text-ph-red">📞</span> Phone: </p>
          <p className="text-ph-gray mb-2"><span className="text-ph-red">📍</span> Address: Sri Lanka</p>
          <h4 className="text-lg font-semibold mt-4 mb-2 text-ph-white">Follow Us</h4>
          <div className="flex space-x-4">
            <button className="text-ph-gray hover:text-ph-red focus:outline-none" aria-label="Twitter">🐦</button>
            <button className="text-ph-gray hover:text-ph-red focus:outline-none" aria-label="Instagram">📷</button>
            <button className="text-ph-gray hover:text-ph-red focus:outline-none" aria-label="SoundCloud">🎵</button>
          </div>
        </div>
        <motion.form
          onSubmit={handleSubmit}
          className="bg-ph-light p-6 rounded-lg border border-ph-light-gray"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-ph-white font-semibold mb-2">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-ph-dark border border-ph-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-ph-red"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-ph-white font-semibold mb-2">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-ph-dark border border-ph-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-ph-red"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-ph-white font-semibold mb-2">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 bg-ph-dark border border-ph-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-ph-red"
              rows="5"
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="w-full bg-ph-red text-ph-white px-8 py-4 rounded hover:bg-red-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;