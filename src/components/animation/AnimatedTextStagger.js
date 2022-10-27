import React from 'react';
import { motion } from 'framer-motion';
// import { makeStyles } from '@mui/styles';

// 接收一個 MUI Typography
const AnimatedTextStagger = ({ children }) => {
  // 拆字
  const letters = Array.from(children);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.075, delayChildren: 0.4 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const textStyle = {
    fontFamily: 'Tanker',
    fontSize: 'clamp(40px,15vw,160px)',
    textAlign: 'center',
  };

  return (
    <motion.div style={textStyle} variants={container} initial='hidden' animate='visible'>
      {letters.map((letter, idx) => (
        <motion.span variants={child} key={idx}>
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextStagger;
