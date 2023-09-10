import { httpClient } from '@/lib/axios';

export type Option = {
  label: string;
};

export async function fetchOptions(url: string): Promise<Option[]> {
  if (typeof url !== 'string') return Promise.reject(new Error('Invalid url'));

  const { data } = await httpClient.get<Option[]>(url);
  return data;
}
