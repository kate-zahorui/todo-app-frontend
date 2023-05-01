import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import useMediaScreen from '../../../../services/hooks/useMediaScreen';
import { GenericButton } from '../genericButton';
import { StyledAddIcon, StyledIconButton } from './addButton.styled';
import { APP_KEYS } from '../../consts';

export const AddButton: FC = () => {
  const navigate = useNavigate();
  const isDesktopScreen = useMediaScreen('desktop');

  const handleAddTodo = () => {
    navigate(`${APP_KEYS.ROUTER_KEYS.ADD_TODO}`);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {isDesktopScreen && <GenericButton onClick={handleAddTodo}>Add Todo</GenericButton>}
      {!isDesktopScreen && (
        <StyledIconButton onClick={handleAddTodo}>
          <StyledAddIcon />
        </StyledIconButton>
      )}
    </>
  );
};
