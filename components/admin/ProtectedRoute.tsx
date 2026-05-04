"use client";

import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";


const ADMIN_EMAIL = "admin@smd.com";


export default function ProtectedRoute({ children }: {children: ReactNode}) {
  const { user, loading } = useAuth();
  const router = useRouter();


    useEffect(() => {
      if (!loading) {
        if (!user) {
          router.replace("/login");
        } else if (user.email !== ADMIN_EMAIL) {
          router.replace("/");
        }
      }
    }, [user, loading, router]);


    if (loading) return <div className="p-6">Checking access...</div>;


  return children;
}
