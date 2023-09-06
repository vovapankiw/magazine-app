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

const DEFAULT_LIMIT = 32;

export const Magazines = () => {
  const [searchValue, setSearchValue] = useQueryParam('search', StringParam);
  const [query, setQuery] = useState(searchValue || '');
  const [containerRef, isVisible] = useObserver({
    root: null,
    rootMargin: '100px',
    threshold: 1.0
  });

  const { data, fetchNextPage } = useInfiniteQuery(
    ['magazines', searchValue],
    ({ pageParam }) => {
      console.log(searchValue);
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
    const searchValue = query.trim() === '' ? undefined : query;
    setSearchValue(searchValue);
  };

  const handleSearch = (query: string) => {
    setQuery(query);
    debouncedSetSearchValue(query);
  };

  return (
    <HomeWrapper>
      <Logo width="140" />
      <SearchBar query={query} setQuery={handleSearch} />
      <MagazineGrid data={data} />
      <div ref={containerRef}></div>
    </HomeWrapper>
  );
};
