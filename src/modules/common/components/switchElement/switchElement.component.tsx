import React, { FC, ChangeEvent } from 'react';
import { FormControlLabel } from '@mui/material';
import { StyledSwitch } from './switchElement.styled';

interface IProps {
  value: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  disabled?: boolean;
  name?: string;
  id?: string;
}

export const SwitchElement: FC<IProps> = ({ id, value, onChange, disabled, ...props }) => (
  <FormControlLabel
    control={
      <StyledSwitch
        id={id}
        value={value}
        checked={value}
        disabled={disabled}
        type="checkbox"
        {...props}
      />
    }
    label=""
  />
);
