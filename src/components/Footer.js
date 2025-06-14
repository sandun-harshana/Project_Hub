import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-ph-dark text-ph-white py-8"
    >
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg mb-4">© 2025 ProjectHub. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <a
            href="/privacy-policy"
            className="text-lg text-ph-gray hover:text-ph-red transition-colors duration-300"
            aria-label="Privacy Policy"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            className="text-lg text-ph-gray hover:text-ph-red transition-colors duration-300"
            aria-label="Terms of Service"
          >
            Terms of Service
          </a>
          <a
            href="/contact"
            className="text-lg text-ph-gray hover:text-ph-red transition-colors duration-300"
            aria-label="Contact Us"
          >
            Contact Us
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;