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

export async function fetchMagazines(offset = 0, limit = 10): Promise<Magazine[]> {
  const { data } = await httpClient.get<Magazine[]>(`/magazines?offset=${offset}&limit=${limit}`);
  return data;
}
