import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-ph-dark text-ph-white py-6"
    >
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2">© 2025 ProjectHub. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-ph-red">Privacy Policy</a>
          <a href="#" className="hover:text-ph-red">Terms of Service</a>
          <a href="#" className="hover:text-ph-red">Contact Us</a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;