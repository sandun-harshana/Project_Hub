import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="header bg-ph-dark text-ph-white py-6 shadow-lg fixed w-full z-50"
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.h1
          className="text-3xl font-bold text-ph-red"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          ProjectHub
        </motion.h1>
        <nav aria-label="Main navigation">
          <ul className="flex space-x-8">
            {['Home', 'Marketplace', 'My Products', 'Contact'].map((item) => (
              <li key={item}>
                <NavLink
                  to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                  className={({ isActive }) =>
                    `text-lg hover:text-ph-red transition-colors duration-300 ${
                      isActive ? 'text-ph-red underline' : 'text-ph-white'
                    }`
                  }
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item}
                </NavLink>
              </li>
            ))}
            <li>
              <button
                className="text-xl hover:text-ph-red focus:outline-none focus:ring-2 focus:ring-ph-red rounded-full"
                aria-label="User profile"
              >
                👤
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;