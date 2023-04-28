import React from 'react';
import { styled } from '@mui/material/styles';
import Container, { ContainerProps } from '@mui/material/Container';

export const StyledContainer = styled((props: ContainerProps) => <Container {...props} />)(() => ({
  minHeight: '100vh'
}));
