import { api } from './client';

export async function fetchAllReviews() {
  const { data } = await api.get('/reviews');
  return data;
}

export async function fetchReviewsByRoomId(roomId) {
  const { data } = await api.get(`/reviews/${roomId}`);
  return data;
}

export async function postReview(payload) {
  const { data } = await api.post('/reviews', payload);
  return data;
}

export async function incrementRoomReviewCount(roomId) {
  await api.patch('/rooms/review', { roomId });
}
