import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="hero relative h-screen flex items-center justify-center text-center overflow-hidden"
      style={{ backgroundImage: 'url(https://source.unsplash.com/random/1600x900/?technology)' }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-ph-red/30 rounded-full"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}vw`,
              top: `${Math.random() * 100}vh`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
      <div className="relative z-10 px-6">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-ph-red mb-6 leading-tight"
        >
          Welcome to ProjectHub
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-ph-gray mb-10 max-w-2xl mx-auto"
        >
          Revolutionizing software development and AI services with cutting-edge solutions
        </motion.p>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <Link
            to="/marketplace"
            className="bg-ph-red text-ph-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-ph-red focus:ring-offset-2 focus:ring-offset-ph-dark"
            aria-label="Explore projects"
          >
            Explore Projects
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;