import React from 'react';
import { styled } from '@mui/material/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

export const StyledIconButton = styled((props: IconButtonProps) => <IconButton {...props} />)(
  ({ theme }) => ({
    position: 'fixed',
    right: theme.spacing(5),
    bottom: theme.spacing(5),
    padding: 0,
    width: theme.spacing(10),
    height: theme.spacing(10),
    color: theme.palette.white.main,
    backgroundColor: theme.palette.primary.main,
    border: '2px solid',
    borderColor: theme.palette.primary.main,
    zIndex: '2',
    '&:hover': {
      backgroundColor: theme.palette.white.main,
      color: theme.palette.primary.main
    }
  })
);

export const StyledAddIcon = styled(() => <AddOutlinedIcon />)(() => ({
  width: '100%',
  height: '100%'
}));
