import React, { FC } from 'react';
import { StyledButton } from './genericButton.styled';

interface IProps {
  children: string;
  onClick?: () => void;
  active?: boolean;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export const GenericButton: FC<IProps> = ({
  children,
  onClick,
  active = false,
  type = 'button',
  disabled = false
}) => (
  <StyledButton
    variant="outlined"
    type={type}
    disabled={disabled}
    onClick={onClick}
    sx={{ backgroundColor: active ? 'primary.main' : 'white.main' }}
  >
    {children}
  </StyledButton>
);
