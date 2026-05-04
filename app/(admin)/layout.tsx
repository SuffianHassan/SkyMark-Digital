"use client";

import Layout from "@/components/admin/adminLayout";
import ProtectedRoute from "@/components/admin/ProtectedRoute";
import { ReactNode } from "react";



export default function AdminLayout({ children }: {children: ReactNode}) {
  return (
    <ProtectedRoute>
      <Layout>{children}</Layout>
    </ProtectedRoute>
  );
}
