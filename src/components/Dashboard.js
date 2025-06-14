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
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 py-12"
    >
      <h2 className="text-4xl font-bold text-center mb-8 text-ph-red">Tiki Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-ph-light p-4 rounded-lg border border-ph-light-gray">
          <h3 className="text-lg font-semibold mb-2 text-ph-white">Total Credits</h3>
          <p className="text-2xl text-ph-red">${credits}</p>
        </div>
        <div className="bg-ph-light p-4 rounded-lg border border-ph-light-gray">
          <h3 className="text-lg font-semibold mb-2 text-ph-white">Avg. Days Remaining</h3>
          <p className="text-2xl text-ph-red">{daysRemaining}</p>
        </div>
        <div className="bg-ph-light p-4 rounded-lg border border-ph-light-gray">
          <h3 className="text-lg font-semibold mb-2 text-ph-white">Active Plans</h3>
          <p className="text-2xl text-ph-red">{activePlans}</p>
        </div>
      </div>
      <div className="bg-ph-light p-6 rounded-lg border border-ph-light-gray">
        <h3 className="text-lg font-semibold mb-4 text-ph-white">tiki-free</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-ph-gray mb-2">23 days remaining</p>
            <p className="text-ph-gray mb-2">10 credits available</p>
            <p className="text-ph-gray mb-2">Activated: 6/7/2025</p>
            <p className="text-ph-gray">Activation Code: KW8E6WRV</p>
          </div>
          <div>
            <p className="text-ph-gray mb-2">Text Usage: 0%</p>
            <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
              <div className="bg-gray-600 h-2.5 rounded-full" style={{ width: '0%' }}></div>
            </div>
            <p className="text-ph-gray mb-2">Image Response Usage: 0%</p>
            <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
              <div className="bg-gray-600 h-2.5 rounded-full" style={{ width: '0%' }}></div>
            </div>
            <motion.button
              className="bg-ph-red text-ph-white px-8 py-4 rounded hover:bg-red-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Activated
            </motion.button>
            <button className="text-ph-gray ml-4 hover:text-ph-red focus:outline-none" aria-label="Download the Latest Tiki Extension">
              Download the Latest Tiki Extension
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;