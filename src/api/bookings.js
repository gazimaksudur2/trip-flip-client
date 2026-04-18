import { api } from './client';

export async function fetchBookingsByEmail(email) {
  const { data } = await api.get('/bookings', { params: { email } });
  return data;
}

export async function createBooking(payload) {
  const { data } = await api.post('/bookings', payload);
  return data;
}

export async function updateBooking(id, payload) {
  const { data } = await api.patch(`/bookings/${id}`, payload);
  return data;
}

export async function deleteBooking(id) {
  const { data } = await api.delete(`/bookings/${id}`);
  return data;
}
