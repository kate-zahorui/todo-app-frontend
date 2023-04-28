import React, { FC } from 'react';
import { StyledContainer } from './contentContainer.styled';

interface IProps {
  children: JSX.Element | JSX.Element[];
}

export const ContentContainer: FC<IProps> = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);
