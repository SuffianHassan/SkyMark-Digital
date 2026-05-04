"use client";

import { AuthProvider } from "./context/AuthContext";
import { ContentProvider } from "./context/ContentContext";



export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ContentProvider>
        {children}
      </ContentProvider>
    </AuthProvider>
  );
}
