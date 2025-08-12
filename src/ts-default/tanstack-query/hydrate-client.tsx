import * as React from 'react';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import type { QueryClient } from '@tanstack/react-query';
import { getQueryClientServer } from './get-query-client';

export interface HydrateClientProps {
  children: React.ReactNode;
  queryClient: QueryClient;
}

export default function HydrateClient(props: HydrateClientProps) {
  const { children, queryClient = getQueryClientServer() } = props;
  return <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>;
}
