import { useCallback, useEffect, useMemo, useState } from 'react';
import { StringParam, useQueryParam } from 'use-query-params';
import { Box, styled } from '@mui/material';
import { QueryFunctionContext, useInfiniteQuery } from '@tanstack/react-query';
import { SearchBar } from '@/components/SearchBar/SearchBar';
import { useObserver } from '@/hooks/useObserver';
import { MagazineGrid } from '../components/MagazineGrid';
import { fetchMagazines } from '@/api/magazine-api';
import { debounce } from '@/utils/debounce';
import { AddMagazineButton } from '../components/AddMagazineButton';
import { CreateMagazineDialog } from '../components/CreateMagazineDialog';

const HomeWrapper = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const SearchWrapper = styled(Box)(({ theme }) => ({
  position: 'sticky',
  top: '83px',
  zIndex: 1,
  padding: '40px 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  background: theme.palette.background.default
}));

const DEFAULT_LIMIT = 32;

export const Magazines = () => {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useQueryParam('query', StringParam);
  const [query, setQuery] = useState(searchValue || '');
  const [containerRef, isVisible] = useObserver({
    root: null,
    rootMargin: '100px',
    threshold: 1.0
  });

  const { data, fetchNextPage } = useInfiniteQuery(
    ['magazines', searchValue],
    ({ pageParam }: QueryFunctionContext<(string | null | undefined)[], { nextPage: number }>) =>
      fetchMagazines({
        offset: pageParam?.nextPage as number,
        limit: DEFAULT_LIMIT,
        query: searchValue
      }),
    {
      getNextPageParam: (pageParam) => (pageParam.nextPage ? pageParam : undefined)
    }
  );

  useEffect(() => {
    if (isVisible) {
      void fetchNextPage();
    }
  }, [isVisible, fetchNextPage]);

  const saveSearchValue = useCallback(
    (searchQuery: string) => {
      const sanitizedQuery = searchQuery.trim().toLowerCase();
      const searchValueToUpdate = sanitizedQuery === '' ? undefined : sanitizedQuery;
      setSearchValue(searchValueToUpdate);
    },
    [setSearchValue]
  );

  const debouncedSetSearchValue = useMemo(() => debounce(saveSearchValue, 500), [saveSearchValue]);

  const handleSearch = useCallback(
    (searchInput: string) => {
      setQuery(searchInput);
      debouncedSetSearchValue(searchInput);
    },
    [debouncedSetSearchValue]
  );

  return (
    <>
      <SearchWrapper>
        <SearchBar query={query} setQuery={handleSearch} />
      </SearchWrapper>
      <HomeWrapper>
        <MagazineGrid data={data} />
        <div ref={containerRef} />
      </HomeWrapper>
      <AddMagazineButton addMagazine={() => setOpen(true)} />
      <CreateMagazineDialog open={open} handleClose={() => setOpen(false)} />
    </>
  );
};
