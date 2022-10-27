import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Box, Fab } from '@mui/material';
import routers from '../routers';

const TextEditorPage = () => {
  const links = routers.find((r) => r.name === '文字編輯器').nested;
  const navigate = useNavigate();

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      <Outlet />
      <Box sx={{ position: 'fixed', right: '25px', bottom: '25px', display: 'flex', gap: '5px' }}>
        {links.map((link, idx) => (
          <Fab color='primary' key={idx} variant='extended' onClick={() => navigate(link.path)}>
            {link.name}
          </Fab>
        ))}
      </Box>
    </Box>
  );
};

export default TextEditorPage;
