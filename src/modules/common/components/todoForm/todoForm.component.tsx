import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Formik, Form } from 'formik';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Box, Typography } from '@mui/material';
import todoService from '../../../../services/api/todo.service';
import { ITodo, ITodoResponse } from '../../types/todo.type';
import { GenericButton } from '../genericButton';
import { SwitchElement } from '../switchElement';
import {
  ButtonsWrapper,
  CheckboxContainer,
  FormContainer,
  StyledInputBase,
  StyledLabel,
  StyledTexterea
} from './todoForm.styled';
import { APP_KEYS } from '../../consts';

const INITIAL_FORM_VALUES = {
  title: '',
  description: '',
  isPrivate: false,
  isCompleted: false
};

export const TodoForm = () => {
  const [isEditModeOn, setIsEditModeOn] = useState<boolean>(false);
  const [formikValues, setFormikValues] = useState<ITodo>(INITIAL_FORM_VALUES);
  const navigate = useNavigate();
  const { todoid } = useParams();
  const { data } = useQuery<{ data: ITodoResponse[] }>(
    APP_KEYS.QUERY_KEYS.TODOS,
    todoService.getTodos.bind(todoService)
  );
  const queryClient = useQueryClient();

  const addMutation = useMutation((newTodo: ITodo) => todoService.addTodo(newTodo), {
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries([APP_KEYS.QUERY_KEYS.TODOS]);
      Notify.success(`Todo '${variables.title}' is added!`);
    },
    onError: (error) => {
      Notify.failure((error as Error).message);
    }
  });

  const updateMutation = useMutation(
    ({ id, newTodo }: { id: string; newTodo: ITodo }) => todoService.updateTodo(id, newTodo),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([APP_KEYS.QUERY_KEYS.TODOS]);
        Notify.success('Todo is updated!');
      },
      onError: (error) => {
        Notify.failure((error as Error).message);
      }
    }
  );

  const isLoading = useMemo(
    () => addMutation.isLoading || updateMutation.isLoading,
    [addMutation.isLoading, updateMutation.isLoading]
  );

  useEffect(() => {
    if (!todoid) return;
    setIsEditModeOn(true);
  }, [todoid]);

  useEffect(() => {
    if (!isEditModeOn || !data || !todoid) return;
    const todo = data.data.find((i) => i.id.toString() === todoid);
    if (!todo) return;
    setFormikValues({
      title: todo.title,
      description: todo.description,
      isPrivate: todo.isPrivate,
      isCompleted: todo.isCompleted
    });
  }, [isEditModeOn, data, todoid]);

  return (
    <FormContainer>
      <Formik
        enableReinitialize
        initialValues={formikValues}
        onSubmit={(values, actions) => {
          switch (isEditModeOn) {
            case true:
              if (!todoid) break;
              updateMutation.mutate({ id: todoid, newTodo: values });
              break;

            default:
              addMutation.mutate(values);
              break;
          }
          actions.resetForm();
          navigate(APP_KEYS.ROUTER_KEYS.HOME);
        }}
      >
        {({ values, handleChange, isSubmitting }) => (
          <Form>
            <StyledInputBase
              fullWidth
              id="title"
              name="title"
              placeholder="Todo title"
              value={values.title}
              required
              onChange={handleChange}
              disabled={isLoading}
            />
            <Box mt={5}>
              <StyledLabel htmlFor="description">Description:</StyledLabel>
              <StyledTexterea
                fullWidth
                id="description"
                name="description"
                placeholder="Write your todo description here ..."
                value={values.description}
                required
                onChange={handleChange}
                multiline
                maxRows={8}
                disabled={isLoading}
              />
            </Box>
            <Box mt={3}>
              <CheckboxContainer>
                <Typography>Complete</Typography>
                <SwitchElement
                  id="isCompleted"
                  value={values.isCompleted}
                  name="isCompleted"
                  onChange={handleChange}
                  disabled={isLoading}
                />
              </CheckboxContainer>
              <CheckboxContainer>
                <Typography>Private</Typography>
                <SwitchElement
                  id="isPrivate"
                  value={values.isPrivate}
                  name="isPrivate"
                  onChange={handleChange}
                  disabled={isLoading}
                />
              </CheckboxContainer>
            </Box>
            <ButtonsWrapper>
              <GenericButton
                onClick={() => navigate(APP_KEYS.ROUTER_KEYS.HOME)}
                disabled={isSubmitting || isLoading}
              >
                Back
              </GenericButton>
              <GenericButton type="submit" disabled={isSubmitting || isLoading}>
                {isEditModeOn ? 'Save' : 'Add todo'}
              </GenericButton>
            </ButtonsWrapper>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};
