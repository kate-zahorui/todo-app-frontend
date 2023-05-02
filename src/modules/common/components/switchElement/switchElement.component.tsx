import React, { FC, ChangeEvent } from 'react';
import { FormControlLabel } from '@mui/material';
import { StyledSwitch } from './switchElement.styled';

interface IProps {
  value: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  disabled: boolean;
  name?: string;
  id?: string;
}

export const SwitchElement: FC<IProps> = ({ id, value, onChange, disabled, ...props }) => {
  const isSeparateForm = Boolean(!id);
  const handleCheck = isSeparateForm
    ? (e: ChangeEvent<HTMLInputElement>, checked: boolean) => {
        onChange(e, checked);
      }
    : onChange;

  return (
    <FormControlLabel
      control={
        <StyledSwitch
          id={id}
          value={value}
          checked={value}
          onChange={handleCheck}
          disabled={disabled}
          type="checkbox"
          {...props}
        />
      }
      label=""
    />
  );
};
