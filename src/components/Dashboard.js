import React from 'react';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const credits = 10;
  const daysRemaining = 23;
  const activePlans = 1;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-6 py-16"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-ph-red" role="heading" aria-level="1">
        Tiki Dashboard
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <motion.div
          className="bg-ph-light p-6 rounded-lg border border-ph-light-gray shadow-md hover:shadow-lg transition-shadow duration-300"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-lg font-semibold mb-4 text-ph-white">Total Credits</h3>
          <p className="text-3xl text-ph-red">${credits}</p>
        </motion.div>
        <motion.div
          className="bg-ph-light p-6 rounded-lg border border-ph-light-gray shadow-md hover:shadow-lg transition-shadow duration-300"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-lg font-semibold mb-4 text-ph-white">Avg. Days Remaining</h3>
          <p className="text-3xl text-ph-red">{daysRemaining}</p>
        </motion.div>
        <motion.div
          className="bg-ph-light p-6 rounded-lg border border-ph-light-gray shadow-md hover:shadow-lg transition-shadow duration-300"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-lg font-semibold mb-4 text-ph-white">Active Plans</h3>
          <p className="text-3xl text-ph-red">{activePlans}</p>
        </motion.div>
      </div>
      <div className="bg-ph-light p-8 rounded-lg border border-ph-light-gray shadow-md">
        <h3 className="text-lg font-semibold mb-6 text-ph-white">tiki-free</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-ph-gray mb-4">23 days remaining</p>
            <p className="text-ph-gray mb-4">10 credits available</p>
            <p className="text-ph-gray mb-4">Activated: 6/7/2025</p>
            <p className="text-ph-gray">Activation Code: KW8E6WRV</p>
          </div>
          <div>
            <p className="text-ph-gray mb-4">Text Usage: 0%</p>
            <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
              <div className="bg-gray-600 h-3 rounded-full" style={{ width: '0%' }}></div>
            </div>
            <p className="text-ph-gray mb-4">Image Response Usage: 0%</p>
            <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
              <div className="bg-gray-600 h-3 rounded-full" style={{ width: '0%' }}></div>
            </div>
            <motion.button
              className="bg-ph-red text-ph-white px-6 py-3 rounded-lg text-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-ph-red focus:ring-offset-2 focus:ring-offset-ph-dark transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Activated
            </motion.button>
            <button
              className="text-ph-gray ml-4 text-lg hover:text-ph-red focus:outline-none focus:ring-2 focus:ring-ph-red rounded"
              aria-label="Download the Latest Tiki Extension"
            >
              Download the Latest Tiki Extension
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;