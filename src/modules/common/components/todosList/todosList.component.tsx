import React from 'react';
import { useQuery } from 'react-query';
import { Grid, Typography } from '@mui/material';
import { ITodoResponse } from '../../types/todo.type';
import { APP_KEYS } from '../../consts';
import { TodoActions } from '../todoActions';

export const TodosList = () => {
  const { isLoading, isError, data } = useQuery<{ data: ITodoResponse[] }>(
    APP_KEYS.QUERY_KEYS.TODOS
  );

  const noData = !isLoading && !isError && data?.data.length === 0;
  const showData = !isLoading && !isError && data?.data;
  return (
    <div>
      {noData && <p>You haven&apos;t added any todo yet.</p>}

      {showData && (
        <Grid container spacing={3}>
          {data?.data.map((i) => (
            <Grid key={i.id} item xs={12}>
              <Typography variant="h6" mb={1}>
                {i.title}
              </Typography>
              <Typography variant="body2" mb={2}>
                {i.description}
              </Typography>
              <TodoActions item={i} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};
