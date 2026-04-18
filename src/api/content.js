import { api } from './client';

export async function fetchCarousel() {
  const { data } = await api.get('/carousel');
  return data;
}
