import React from 'react';
import { styled } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';
import InputBase, { InputBaseProps } from '@mui/material/InputBase';
import InputLabel, { InputLabelProps } from '@mui/material/InputLabel';

export const FormContainer = styled((props: BoxProps) => <Box {...props} />)(({ theme }) => ({
  maxWidth: theme.spacing(100),
  margin: '0 auto',
  paddingTop: theme.spacing(10)
}));

export const StyledInputBase = styled((props: InputBaseProps) => <InputBase {...props} />)(
  ({ theme }) => ({
    color: theme.palette.black.main,
    fontSize: '1.5rem'
  })
);

export const StyledLabel = styled((props: InputLabelProps) => <InputLabel {...props} />)(
  ({ theme }) => ({
    color: theme.palette.black.main
  })
);

export const StyledTexterea = styled((props: InputBaseProps) => <InputBase {...props} />)(
  ({ theme }) => ({
    marginTop: theme.spacing(2),
    minHeight: theme.spacing(20),
    alignItems: 'start'
  })
);

export const CheckboxContainer = styled((props: BoxProps) => <Box {...props} />)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  '&:not(:last-child)': {
    marginBottom: theme.spacing(1)
  }
}));

export const ButtonsWrapper = styled((props: BoxProps) => <Box {...props} />)(({ theme }) => ({
  marginTop: theme.spacing(3),
  display: 'flex',
  justifyContent: 'space-between',
  gap: theme.spacing(2)
}));
