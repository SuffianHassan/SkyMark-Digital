import BlogDetail from "@/components/admin/BlogDetailClient";
import { Suspense } from "react";

export default function BlogPage() {
  return (
    <Suspense fallback={<div className="p-10">Loading...</div>}>
      <BlogDetail />
    </Suspense>
  );
}