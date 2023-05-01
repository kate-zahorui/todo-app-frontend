import React from 'react';
import { Box } from '@mui/material';
import useMediaScreen from '../../../../services/hooks/useMediaScreen';
import { AddButton } from '../addButton';
import { FiltersGroup } from '../filtersGroup';
import { SearchInput } from '../searchInput';
import { TodosList } from '../todosList';
import { TodosTable } from '../todosTable';
import { FiltersWrapper, Wrapper } from './todosContainer.styled';

export const TodosContainer = () => {
  const isMobileScreen = useMediaScreen('mobile');
  const isTabletScreen = useMediaScreen('tablet');
  const isDesktopScreen = useMediaScreen('desktop');

  return (
    <Box pt={10}>
      <FiltersWrapper>
        <FiltersGroup />
        <Wrapper>
          <AddButton />
          <SearchInput />
        </Wrapper>
      </FiltersWrapper>
      {(isMobileScreen || isTabletScreen) && <TodosList />}
      {isDesktopScreen && <TodosTable />}
    </Box>
  );
};
