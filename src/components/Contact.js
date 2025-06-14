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
      transition={{ duration: 0.8 }}
      className="container mx-auto px-6 py-16"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-ph-red" role="heading" aria-level="1">
        Get in Touch
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          className="bg-ph-light p-8 rounded-lg border border-ph-light-gray shadow-md hover:shadow-lg transition-shadow duration-300"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-6 text-ph-white">Contact Information</h3>
          <p className="text-ph-gray mb-4"><span className="text-ph-red">📧</span> Email: contact@projecthub.com</p>
          <p className="text-ph-gray mb-4"><span className="text-ph-red">📞</span> Phone:</p>
          <p className="text-ph-gray mb-4"><span className="text-ph-red">📍</span> Address:Sri Lanka</p>
          <h4 className="text-lg font-semibold mt-6 mb-4 text-ph-white">Follow Us</h4>
          <div className="flex space-x-6">
            <button className="text-2xl text-ph-gray hover:text-ph-red focus:outline-none focus:ring-2 focus:ring-ph-red rounded-full" aria-label="Twitter">🐦</button>
            <button className="text-2xl text-ph-gray hover:text-ph-red focus:outline-none focus:ring-2 focus:ring-ph-red rounded-full" aria-label="Instagram">📷</button>
            <button className="text-2xl text-ph-gray hover:text-ph-red focus:outline-none focus:ring-2 focus:ring-ph-red rounded-full" aria-label="SoundCloud">🎵</button>
          </div>
        </motion.div>
        <motion.form
          onSubmit={handleSubmit}
          className="bg-ph-light p-8 rounded-lg border border-ph-light-gray shadow-md"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="mb-8">
            <label htmlFor="name" className="block text-xl text-ph-white font-semibold mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 bg-ph-dark border border-ph-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-ph-red"
              aria-required="true"
            />
          </div>
          <div className="mb-8">
            <label htmlFor="email" className="block text-xl text-ph-white font-semibold mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 bg-ph-dark border border-ph-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-ph-red"
              aria-required="true"
            />
          </div>
          <div className="mb-8">
            <label htmlFor="message" className="block text-xl text-ph-white font-semibold mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 bg-ph-dark border border-ph-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-ph-red"
              rows="6"
              aria-required="true"
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="w-full bg-ph-red text-ph-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-ph-red focus:ring-offset-2 focus:ring-offset-ph-dark transition-all duration-300"
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