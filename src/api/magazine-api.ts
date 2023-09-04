import { httpClient } from '@/lib/axios';

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

export async function fetchMagazines(offset = 0, limit = 10): Promise<IPaginate<Magazine[]>> {
  const { data } = await httpClient.get<IPaginate<Magazine[]>>(
    `/magazines?offset=${offset}&limit=${limit}`
  );
  return data;
}
