"use client";

import { skeletonBaseColor, skeletonHighlightColor } from "@/shared/variables";
import {
  isServer,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { SkeletonTheme } from "react-loading-skeleton";
import ReactGA from "react-ga4";

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
  if (isServer) {
    return makeQueryClient();
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient();
  ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || "");

  return (
    <SkeletonTheme
      baseColor={skeletonBaseColor}
      highlightColor={skeletonHighlightColor}
      borderRadius={20}
      enableAnimation={true}
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </SkeletonTheme>
  );
}
