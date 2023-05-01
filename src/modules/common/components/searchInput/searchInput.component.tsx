import React, { FC } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from './searchInput.styled';

export const SearchInput: FC = () => (
  <Search>
    <SearchIconWrapper>
      <SearchIcon />
    </SearchIconWrapper>
    <StyledInputBase placeholder="search" inputProps={{ 'aria-label': 'search' }} />
  </Search>
);
