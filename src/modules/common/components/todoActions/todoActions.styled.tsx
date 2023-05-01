import React from 'react';
import { styled } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';

export const Wrapper = styled((props: BoxProps) => <Box {...props} />)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  gap: theme.spacing(2)
}));

export const ButtonsWrapper = styled((props: BoxProps) => <Box {...props} />)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1)
}));
