import React from 'react';
import ReactQuill from 'react-quill';
import { Box, Typography } from '@mui/material';
const QuillReceiver = ({ quillValue }) => {
  return (
    <Box>
      <Typography variant='h2' sx={{ mb: 3 }}>
        QuillReceiver
      </Typography>
      <Box sx={{ outline: '1px solid #fff', backgroundColor: '#fff' }}>
        <ReactQuill
          theme={'bubble'}
          value={quillValue}
          readOnly={true}
          style={{ width: '500px' }}
        />
      </Box>
    </Box>
  );
};

export default QuillReceiver;
