import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Toolbar } from '@mui/material';
import useMediaScreen from '../../../../services/hooks/useMediaScreen';
import { GenericButton } from '../genericButton';
import { APP_KEYS } from '../../consts';
import { StyledAppBar, Wrapper } from './header.styled';

export const Header: FC = () => {
  const isMobileScreen = useMediaScreen('mobile');
  const navigate = useNavigate();

  const handleListBtnClick = () => {
    navigate(APP_KEYS.ROUTER_KEYS.HOME);
    window.scrollTo(0, 0);
  };

  return (
    <StyledAppBar>
      <Toolbar>
        <Wrapper>
          {isMobileScreen && <GenericButton onClick={handleListBtnClick}>Todo List</GenericButton>}
          <GenericButton onClick={() => navigate(APP_KEYS.ROUTER_KEYS.MY_PROFILE)}>
            My Profile
          </GenericButton>
        </Wrapper>
      </Toolbar>
    </StyledAppBar>
  );
};
