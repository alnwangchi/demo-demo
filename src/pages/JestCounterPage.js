import React, { useState } from 'react';
import { Box, Button, ButtonGroup, Typography } from '@mui/material';

const defaultCount = 0;

const JestCounterPage = () => {
  const [count, setCount] = useState(defaultCount);

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };
  const reset = () => {
    setCount(defaultCount);
  };
  const toggle = () => {
    setCount((prev) => prev * -1);
  };
  // test && operator
  const tmp = null;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      {tmp && <Box>YO</Box>}
      <Box>
        <Typography variant='h2' sx={{ mb: 4 }} data-testid='count'>
          {count}
        </Typography>
        <ButtonGroup variant='contained' aria-label='outlined primary button group'>
          <Button onClick={increment}>increment</Button>
          <Button onClick={decrement}>decrement</Button>
          <Button onClick={reset}>reset</Button>
          <Button onClick={toggle}>toggle</Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default JestCounterPage;
