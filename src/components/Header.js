import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="header"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.h1
          className="text-2xl font-bold text-ph-red"
          whileHover={{ scale: 1.05 }}
        >
          ProjectHub
        </motion.h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => `hover:text-ph-red ${isActive ? 'text-ph-red underline' : 'text-ph-white'}`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/marketplace"
                className={({ isActive }) => `hover:text-ph-red ${isActive ? 'text-ph-red underline' : 'text-ph-white'}`}
              >
                Marketplace
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-products"
                className={({ isActive }) => `hover:text-ph-red ${isActive ? 'text-ph-red underline' : 'text-ph-white'}`}
              >
                My Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => `hover:text-ph-red ${isActive ? 'text-ph-red underline' : 'text-ph-white'}`}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <span className="cursor-pointer hover:text-ph-red">👤</span>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;