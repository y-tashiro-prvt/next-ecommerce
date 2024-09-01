// components/ClientOnlyProvider.tsx
"use client";

import { ThemeProvider } from "@emotion/react";
import { WixClientContextProvider } from "@/context/wixContext";
import theme from "@/theme";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

const ClientOnlyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <WixClientContextProvider>
          {children}
        </WixClientContextProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
};

export default ClientOnlyProvider;
