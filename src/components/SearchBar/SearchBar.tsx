import { IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ChangeEvent } from 'react';

type SearchBarProps = {
  setQuery: (val: string) => void;
  query: string;
};

export const SearchBar = ({ setQuery, query = '' }: SearchBarProps) => {
  const updateQuery = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setQuery(e.target.value);
  };
  return (
    <Paper
      component="form"
      onSubmit={(e) => e.preventDefault()}
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '30vw', minWidth: '200px' }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{
          'aria-label': 'search',
          onChange: updateQuery,
          value: query
        }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
