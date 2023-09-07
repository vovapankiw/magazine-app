/* eslint-disable */
import { useEffect, useState } from 'react';
import { Box, styled } from '@mui/material';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Logo } from '@/components/Logo';
import { SearchBar } from '@/components/SearchBar/SearchBar';
import { useObserver } from '@/hooks/useObserver';
import { MagazineGrid } from '../components/MagazineGrid';
import { fetchMagazines } from '@/api/magazine-api';
import { StringParam, useQueryParam } from 'use-query-params';

const HomeWrapper = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const SearchWrapper = styled(Box)`
  position: sticky;
  top: 82px;
  z-index: 1;
  padding: 40px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: white;
`;

const DEFAULT_LIMIT = 32;

export const Magazines = () => {
  const [searchValue, setSearchValue] = useQueryParam('query', StringParam);
  const [query, setQuery] = useState(searchValue || '');
  const [containerRef, isVisible] = useObserver({
    root: null,
    rootMargin: '100px',
    threshold: 1.0
  });

  const { data, fetchNextPage } = useInfiniteQuery(
    ['magazines', searchValue],
    ({ pageParam }) => {
      return fetchMagazines({
        offset: pageParam?.nextPage,
        limit: DEFAULT_LIMIT,
        query: searchValue
      });
    },
    {
      getNextPageParam: (pageParam) => {
        return pageParam.nextPage ? pageParam : undefined;
      }
    }
  );

  useEffect(() => {
    if (isVisible) {
      fetchNextPage();
    }
  }, [isVisible]);

  const debouncedSetSearchValue = (query: string) => {
    const sanitizedQuery = query.trim().toLowerCase();
    const searchValue = sanitizedQuery === '' ? undefined : sanitizedQuery;
    setSearchValue(searchValue);
  };

  const handleSearch = (query: string) => {
    setQuery(query);
    debouncedSetSearchValue(query);
  };

  return (
    <>
      <SearchWrapper>
        <Logo width="140" />
        <SearchBar query={query} setQuery={handleSearch} />
      </SearchWrapper>
      <HomeWrapper>
        <MagazineGrid data={data} />
        <div ref={containerRef}></div>
      </HomeWrapper>
    </>
  );
};
