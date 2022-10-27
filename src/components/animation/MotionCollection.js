import React, { useRef } from 'react';
import { Box, Stack } from '@mui/material';
import { motion, useScroll } from 'framer-motion';

const CenterBox = ({ children }) => (
  <Box sx={{ display: 'grid', placeItems: 'center' }}>{children}</Box>
);

// didmount 時執行
export function BasicMotion() {
  return (
    <CenterBox>
      <motion.div
        style={{
          width: '200px',
          height: '200px',
          borderRadius: '999rem',
          backgroundColor: '#40ddf2',
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.div>
    </CenterBox>
  );
}

// 一樣 didmount 時執行 但可以做更多變化 (以陣列表示)
export function KeyframesMotion() {
  return (
    <CenterBox>
      <motion.div
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: '#f2f240',
        }}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ['50%', '20%', '20%', '50%', '50%'],
        }}
        transition={{ ease: 'easeOut', duration: 2 }}
      ></motion.div>
    </CenterBox>
  );
}

// 有些需作用在 interactive element
export function GestureMotion() {
  // 限制 drag 有效範圍用
  const dragContainerRef = useRef(null);
  const commonStyle = {
    width: '200px',
    height: '200px',
    borderRadius: '999rem',
    backgroundColor: '#f24040',
    border: 'none',
    cursor: 'pointer',
  };
  return (
    <Stack
      ref={dragContainerRef}
      direction='row'
      spacing={8}
      justifyContent='center'
      alignItems='center'
      sx={{ maxWidth: '100%' }}
    >
      <motion.button
        style={commonStyle}
        whileTap={{
          scale: 1.25,
        }}
      ></motion.button>
      <motion.button
        style={commonStyle}
        whileHover={{
          scale: 1.5,
          backgroundColor: '#f2406f',
          transition: { duration: 2 },
        }}
        onHoverStart={() => console.log('onHoverStart')}
        onHoverEnd={() => console.log('onHoverEnd')}
      ></motion.button>
      <motion.button
        style={commonStyle}
        whileFocus={{ scale: 1.2, translateY: -50, backgroundColor: '#f2406f' }}
      />
      <motion.div
        style={commonStyle}
        whileDrag={{ scale: 1.2, backgroundColor: '#ee114c' }}
        drag='x'
        dragConstraints={dragContainerRef}
        // 看你要多滑
        dragElastic={0.2}
        // 通通不准滑
        dragMomentum={false}
      />
    </Stack>
  );
}

export function ScrollProgressMotion() {
  const scroll = useScroll();
  console.log(scroll);
  return (
    <CenterBox>
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '10px',
          transformOrigin: '0%',
          backgroundColor: '#40ddf2',
        }}
        animate={{ rotate: 180 }}
        transition={{ type: 'spring' }}
      />
    </CenterBox>
  );
}
