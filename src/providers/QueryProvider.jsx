import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

const defaultOptions = {
  queries: {
    staleTime: 60 * 1000,
    retry: 1,
    refetchOnWindowFocus: false,
  },
};

const QueryProvider = ({ children }) => {
  const [client] = useState(() => new QueryClient({ defaultOptions }));

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default QueryProvider;
