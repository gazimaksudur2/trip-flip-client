import { useQuery } from '@tanstack/react-query';
import { fetchCarousel } from '../api/content';

export function useCarouselQuery() {
  return useQuery({
    queryKey: ['carousel'],
    queryFn: fetchCarousel,
  });
}
