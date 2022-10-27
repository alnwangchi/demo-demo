import React from 'react';
import { motion } from 'framer-motion';

const MotionWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      // initial={{ opacity: 0, x: '-100%' }}
      // animate={{ opacity: 1, x: 0 }}
      // exit={{ opacity: 0, x: '100%' }}
      transition={{ duration: 0.75 }}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
