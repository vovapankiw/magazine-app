import { httpClient } from '@/lib/axios';

type FetchMagazinesProps = {
  offset: number;
  limit: number;
  query?: string | undefined | null;
};

export type Magazine = {
  name: string;
  circulation: string;
  country: string;
  language: string;
  image: string;
  frequency: string;
  founded: string;
  final_issue: string;
  link: string;
  categories: string;
};

export interface IPaginate<T> {
  data: T;
  nextPage: number;
  previousPage: number;
  limit?: number;
}

export async function fetchMagazines({
  offset = 0,
  limit = 10,
  query = ''
}: FetchMagazinesProps): Promise<IPaginate<Magazine[]>> {
  const { data } = await httpClient.get<IPaginate<Magazine[]>>(
    `/magazines?offset=${offset}&limit=${limit}&query=${query || ''}`
  );
  return data;
}

export async function fetchMagazine(name: string | undefined = ''): Promise<Magazine> {
  const { data } = await httpClient.get<Magazine>(`/magazines/${name}`);
  return data;
}
