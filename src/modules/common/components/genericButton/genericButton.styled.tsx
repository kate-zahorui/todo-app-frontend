import React from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

export const StyledButton = styled((props: ButtonProps) => (
  <Button variant="outlined" {...props} />
))(({ theme }) => ({
  textTransform: 'none',
  borderColor: theme.palette.black.main,
  color: theme.palette.black.main,
  borderRadius: 0,
  '&:hover': {
    borderColor: theme.palette.black.main,
    backgroundColor: theme.palette.primary.main
  }
}));
