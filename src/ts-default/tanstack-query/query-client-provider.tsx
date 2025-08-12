'use client';

import * as React from 'react';
import { QueryClientProvider as TanstackQueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { getQueryClient } from './get-query-client';

export interface QueryClientProviderProps {
  children: React.ReactNode;
}

export default function QueryClientProvider(props: QueryClientProviderProps) {
  const { children } = props;
  const queryClient = getQueryClient();

  return (
    <TanstackQueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </TanstackQueryClientProvider>
  );
}
