import React from 'react';
import { Box, Stack } from '@mui/material';
import {
  BasicMotion,
  KeyframesMotion,
  GestureMotion,
  ScrollProgressMotion,
} from '../components/animation/MotionCollection';

export default function AnimationPage() {
  return (
    <Stack spacing={10} sx={{ position: 'relative', minHeight: '200vh', p: 10 }}>
      <BasicMotion />
      <KeyframesMotion />
      <GestureMotion />
      <ScrollProgressMotion />
    </Stack>
  );
}
