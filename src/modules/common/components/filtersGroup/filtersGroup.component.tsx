import React, { FC, useState } from 'react';
import { ButtonGroup } from '@mui/material';
import { GenericButton } from '../genericButton';

type FilterOption = 'All' | 'Private' | 'Public' | 'Completed';
const DEFAULT_FILTER_OPTION = 'All';

const filterValues: Readonly<FilterOption[]> = ['All', 'Private', 'Public', 'Completed'];

export const FiltersGroup: FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<FilterOption>(DEFAULT_FILTER_OPTION);

  return (
    <ButtonGroup aria-label="outlined button group">
      {filterValues.map((i) => (
        <GenericButton
          key={`filter-btn-${i}`}
          onClick={() => setSelectedFilter(i)}
          active={i === selectedFilter}
        >
          {i}
        </GenericButton>
      ))}
    </ButtonGroup>
  );
};
