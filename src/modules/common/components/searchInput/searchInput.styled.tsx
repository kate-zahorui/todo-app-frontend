import React from 'react';
import { styled } from '@mui/material/styles';
import InputBase, { InputBaseProps } from '@mui/material/InputBase';

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(0, 1),
  border: '1px solid',
  borderColor: theme.palette.black.main,
  color: theme.palette.black.main,
  borderRadius: 0
}));

export const SearchIconWrapper = styled('div')(() => ({
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

export const StyledInputBase = styled((props: InputBaseProps) => <InputBase {...props} />)(
  ({ theme }) => ({
    paddingLeft: `calc(1em + ${theme.spacing(2)})`,
    color: 'inherit'
  })
);
