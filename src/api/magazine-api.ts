import { httpClient } from '@/lib/axios';

export async function fetchBooks(offset = 0, limit = 10): Promise<any[]> {
  const { data } = await httpClient.get<any[]>(`/getBooks?offset=${offset}&limit=${limit}`);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return data;
}
