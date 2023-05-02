import React, { FC, ChangeEvent, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import { Notify } from 'notiflix';
import { SwitchElement } from '../switchElement';
import { GenericButton } from '../genericButton';
import todoService from '../../../../services/api/todo.service';
import { ITodo, ITodoResponse } from '../../types/todo.type';
import { APP_KEYS } from '../../consts';
import { ButtonsWrapper, Wrapper } from './todoActions.styled';

interface IProps {
  item: ITodoResponse;
}

export const TodoActions: FC<IProps> = ({ item }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const deleteMutation = useMutation((id: number) => todoService.deleteTodo(id), {
    onSuccess: () => {
      queryClient.invalidateQueries([APP_KEYS.QUERY_KEYS.TODOS]);
      Notify.success('Todo is deleted!');
    },
    onError: (error) => {
      Notify.failure((error as Error).message);
    }
  });

  const updateStatusMutation = useMutation(
    (todo: Partial<ITodo>) =>
      todoService.updateTodo(item.id.toString(), {
        ...todo
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([APP_KEYS.QUERY_KEYS.TODOS]);
        Notify.success('Todo status is updated!');
      },
      onError: (error) => {
        Notify.failure((error as Error).message);
      }
    }
  );

  const handleDelete = () => deleteMutation.mutate(item.id);
  const handleUpdateStatus = (_: ChangeEvent<HTMLInputElement>, isChecked: boolean) =>
    updateStatusMutation.mutate({ isCompleted: isChecked });

  const isLoading = useMemo(
    () => deleteMutation.isLoading || updateStatusMutation.isLoading,
    [deleteMutation.isLoading, updateStatusMutation.isLoading]
  );

  return (
    <Wrapper>
      <ButtonsWrapper>
        <GenericButton onClick={() => navigate(`/${item.id}`)} disabled={isLoading}>
          View
        </GenericButton>
        <GenericButton onClick={handleDelete} disabled={isLoading}>
          Delete
        </GenericButton>
      </ButtonsWrapper>
      <SwitchElement value={item.isCompleted} onChange={handleUpdateStatus} disabled={isLoading} />
    </Wrapper>
  );
};
