import React from 'react';
import { useQuery } from 'react-query';
import { TableBody, TableContainer, TableRow } from '@mui/material';
import { ITodoResponse } from '../../types/todo.type';
import { StyledTable, StyledTableCell, StyledTableHead, StyledTableRow } from './todosTable.styled';
import { APP_KEYS } from '../../consts';
import { TodoActions } from '../todoActions';

export const TodosTable = () => {
  const { isLoading, isError, data } = useQuery<{ data: ITodoResponse[] }>(
    APP_KEYS.QUERY_KEYS.TODOS
  );

  const noData = !isLoading && !isError && data?.data.length === 0;
  const showData = !isLoading && !isError && data?.data;

  return (
    <TableContainer>
      <StyledTable>
        <StyledTableHead>
          <TableRow>
            <StyledTableCell>Todo Title</StyledTableCell>
            <StyledTableCell>Description</StyledTableCell>
            <StyledTableCell>Actions</StyledTableCell>
          </TableRow>
        </StyledTableHead>
        <TableBody>
          {noData && <TableRow>You haven&apos;t added any todo yet.</TableRow>}
          {showData &&
            data?.data.map((i) => (
              <StyledTableRow key={i.id}>
                <StyledTableCell>{i.title}</StyledTableCell>
                <StyledTableCell>{i.description}</StyledTableCell>
                <StyledTableCell>
                  <TodoActions item={i} />
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
};
