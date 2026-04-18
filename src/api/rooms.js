import { api } from './client';

/**
 * @param {{ start?: string | number; end?: string | number }} [range] - price filter from server
 */
export async function fetchRooms(range = {}) {
  const params = {};
  if (range.start != null && range.start !== 'all') params.start = range.start;
  if (range.end != null && range.end !== 'all') params.end = range.end;

  const { data } = await api.get('/rooms', { params });
  return data;
}

export async function fetchRoomById(id, email) {
  const { data } = await api.get(`/rooms/${id}`, {
    params: email ? { email } : {},
  });
  return data;
}
