import React from 'react';
import { styled } from '@mui/material/styles';
import AppBar, { AppBarProps } from '@mui/material/AppBar';
import Box, { BoxProps } from '@mui/material/Box';

export const StyledAppBar = styled((props: AppBarProps) => <AppBar {...props} />)(({ theme }) => ({
  backgroundColor: theme.palette.white.main,
  boxShadow: 'none'
}));

export const Wrapper = styled((props: BoxProps) => <Box {...props} />)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.up('sm')]: {
    justifyContent: 'flex-end'
  }
}));
