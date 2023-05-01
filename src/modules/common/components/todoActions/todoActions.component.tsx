import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { SwitchElement } from '../switchElement';
import { GenericButton } from '../genericButton';
import { ITodoResponse } from '../../types/todo.type';
import { ButtonsWrapper, Wrapper } from './todoActions.styled';

interface IProps {
  item: ITodoResponse;
}

export const TodoActions: FC<IProps> = ({ item }) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <ButtonsWrapper>
        <GenericButton onClick={() => navigate(`/${item.id}`)}>View</GenericButton>
        <GenericButton>Delete</GenericButton>
      </ButtonsWrapper>
      <SwitchElement value={item.isCompleted} />
    </Wrapper>
  );
};
