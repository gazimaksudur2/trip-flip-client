import { useQuery } from '@tanstack/react-query';
import { fetchAllReviews, fetchReviewsByRoomId } from '../api/reviews';

export function useAllReviewsQuery() {
  return useQuery({
    queryKey: ['reviews', 'all'],
    queryFn: fetchAllReviews,
  });
}

export function useRoomReviewsQuery(roomId) {
  return useQuery({
    queryKey: ['reviews', 'room', roomId],
    queryFn: () => fetchReviewsByRoomId(roomId),
    enabled: Boolean(roomId),
  });
}
