import React from 'react';
import { Box } from '@mui/material';
import AnimatedTextStagger from '../../components/animation/AnimatedTextStagger';

const Welcome = () => {
  return (
    <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <AnimatedTextStagger>Rich Text Editor</AnimatedTextStagger>
    </Box>
  );
};

export default Welcome;
