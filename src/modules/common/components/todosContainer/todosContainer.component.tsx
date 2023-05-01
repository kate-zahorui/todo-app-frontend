import React from 'react';
import { Box } from '@mui/material';
import useMediaScreen from '../../../../services/hooks/useMediaScreen';
import { TodosList } from '../todosList';
import { TodosTable } from '../todosTable';

export const TodosContainer = () => {
  const isMobileScreen = useMediaScreen('mobile');
  const isTabletScreen = useMediaScreen('tablet');
  const isDesktopScreen = useMediaScreen('desktop');

  return (
    <Box pt={10}>
      {(isMobileScreen || isTabletScreen) && <TodosList />}
      {isDesktopScreen && <TodosTable />}
    </Box>
  );
};
