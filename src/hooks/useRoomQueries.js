import { useQuery } from '@tanstack/react-query';
import { fetchRoomById, fetchRooms } from '../api/rooms';

/** @param {string} limit e.g. 'all', '40-150', '501 to more' */
export function parsePriceFilter(limit) {
  if (!limit || limit === 'all') return {};
  const s = String(limit);
  if (s.slice(s.length - 4) === 'more') {
    const middle = s.indexOf(' to');
    const startPoint = s.slice(0, middle);
    return { start: startPoint, end: 'all' };
  }
  const middle = s.indexOf('-');
  if (middle === -1) return {};
  const startPoint = s.slice(0, middle);
  const endPoint = s.slice(middle + 1);
  return { start: startPoint, end: endPoint };
}

export function useRoomsQuery(priceFilter = 'all') {
  const range = parsePriceFilter(priceFilter);
  return useQuery({
    queryKey: ['rooms', range],
    queryFn: () => fetchRooms(range),
  });
}

export function useRoomQuery(id, email) {
  return useQuery({
    queryKey: ['room', id, email],
    queryFn: () => fetchRoomById(id, email),
    enabled: Boolean(id && email),
  });
}
