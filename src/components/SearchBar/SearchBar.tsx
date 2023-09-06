import { TextField } from '@mui/material';

type SearchBarProps = {
  setQuery: (val: string) => void;
  query: string;
};

export const SearchBar = ({ setQuery, query = '' }: SearchBarProps) => (
  <TextField
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    label="Search field"
    type="search"
    variant="filled"
  />
);
