'use client';

import { isServer, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

interface ProvidersProps {
    children: ReactNode;
}

const makeQueryClient = () => {
    return new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 1000 * 60,
            }
        }
    });
};

let browserQueryClient: QueryClient | undefined = undefined;

const getQueryClient = () => {
    if (isServer) return makeQueryClient();
    else {
        if (!browserQueryClient) browserQueryClient = makeQueryClient();
        return browserQueryClient;
    }
};

export const Providers = ({ children }: ProvidersProps) => {
    const queryClient = getQueryClient();
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}