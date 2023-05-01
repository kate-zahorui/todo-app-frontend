import React from 'react';
import { Box } from '@mui/material';
import useMediaScreen from '../../../../services/hooks/useMediaScreen';
import { FiltersGroup } from '../filtersGroup';
import { TodosList } from '../todosList';
import { TodosTable } from '../todosTable';

export const TodosContainer = () => {
  const isMobileScreen = useMediaScreen('mobile');
  const isTabletScreen = useMediaScreen('tablet');
  const isDesktopScreen = useMediaScreen('desktop');

  return (
    <Box pt={10}>
      <Box mb={2}>
        <FiltersGroup />
      </Box>
      {(isMobileScreen || isTabletScreen) && <TodosList />}
      {isDesktopScreen && <TodosTable />}
    </Box>
  );
};
