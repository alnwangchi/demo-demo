import React from 'react';
import { Box, Typography } from '@mui/material';
import parse from 'html-react-parser';

const TiptapReceiver = ({ tiptapValue }) => {
  const displayContent = parse(tiptapValue);
  return (
    <Box>
      <Typography sx={{ mb: 3 }} variant='h2'>
        TiptapReceiver
      </Typography>
      <Box sx={{ border: '1px solid #ccc', minHeight: '120px', backgroundColor: '#fff' }}>
        {displayContent}
      </Box>
    </Box>
  );
};

export default TiptapReceiver;
