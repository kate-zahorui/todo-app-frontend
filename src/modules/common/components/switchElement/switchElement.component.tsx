import React, { FC, ChangeEvent } from 'react';
import { FormControlLabel } from '@mui/material';
import { StyledSwitch } from './switchElement.styled';

interface IProps {
  value: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>, checked: boolean) => void;
}

export const SwitchElement: FC<IProps> = ({ value }) => (
  <FormControlLabel control={<StyledSwitch checked={value} type="checkbox" />} label="" />
);
