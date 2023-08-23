/* eslint-disable */
import { useEffect } from 'react';
import { Box, styled } from '@mui/material';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Logo } from '@/components/Logo';
import { SearchBar } from '@/components/SearchBar/SearchBar';
import { useObserver } from '@/hooks/useObserver';
import { fetchBooks } from '@/services/magazine.service';
import { MagazineGrid } from './MagazineGrid';

const HomeWrapper = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

const DEFAULT_LIMIT = 10;

export const Magazines = () => {
  const [containerRef, isVisible] = useObserver({
    root: null,
    rootMargin: '100px',
    threshold: 1.0
  });

  const { data, error, isFetching, fetchNextPage } = useInfiniteQuery(
    ['books'],
    ({ pageParam }) => fetchBooks(pageParam?.nextPage, DEFAULT_LIMIT),
    {
      getPreviousPageParam: (previousPage) => previousPage ?? undefined,
      getNextPageParam: (nextPage) => nextPage ?? undefined
    }
  );

  useEffect(() => {
    if (isVisible) {
      fetchNextPage();
    }
  }, [isVisible]);

  return (
    <HomeWrapper>
      <Logo width="140" />
      <SearchBar />
      <MagazineGrid data={data} />
      <div ref={containerRef}></div>
    </HomeWrapper>
  );
};
