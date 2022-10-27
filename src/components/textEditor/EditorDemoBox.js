import React from 'react';
import { Box } from '@mui/material';

const EditorDemoBox = ({ editor, receiver }) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        background: '#f4f7f6;',
      }}
    >
      <Box
        sx={{
          width: '50%',
          p: 3,
          display: 'flex',
          justifyContent: 'center',
          pt: '20vh',
        }}
      >
        {editor}
      </Box>
      <Box
        sx={{
          width: '50%',
          p: 3,
          display: 'flex',
          justifyContent: 'center',
          pt: '20vh',
        }}
      >
        {receiver}
      </Box>
    </Box>
  );
};

export default EditorDemoBox;
