import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createBooking, deleteBooking, fetchBookingsByEmail, updateBooking } from '../api/bookings';
import { incrementRoomReviewCount, postReview } from '../api/reviews';

export function useBookingsQuery(email) {
  return useQuery({
    queryKey: ['bookings', email],
    queryFn: () => fetchBookingsByEmail(email),
    enabled: Boolean(email),
  });
}

export function useDeleteBookingMutation(email) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id) => deleteBooking(id),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['bookings', email] });
    },
  });
}

export function useUpdateBookingMutation(email) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, payload }) => updateBooking(id, payload),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['bookings', email] });
    },
  });
}

export function useCreateBookingMutation(email) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload) => createBooking(payload),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['bookings', email] });
      qc.invalidateQueries({ queryKey: ['rooms'] });
    },
  });
}

export function usePostReviewMutation(email) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({ reviewPayload, roomId }) => {
      await postReview(reviewPayload);
      await incrementRoomReviewCount(roomId);
    },
    onSuccess: (_data, variables) => {
      qc.invalidateQueries({ queryKey: ['bookings', email] });
      qc.invalidateQueries({ queryKey: ['reviews'] });
      qc.invalidateQueries({ queryKey: ['rooms'] });
      qc.invalidateQueries({
        predicate: (q) => q.queryKey[0] === 'room' && q.queryKey[1] === variables.roomId,
      });
    },
  });
}
