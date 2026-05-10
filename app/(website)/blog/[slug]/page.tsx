"use client";

import { BlogBanner } from "@/components/services/banners/blog-banner";
import { fetchBlogs, getBlogBySlug } from "@/components/services/BlogService";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";


export default function BlogDetail() {
  const params = useParams();

  const slug = params.slug as string;

  const [blog, setBlog] = useState<any>(null);

  const [otherBlogs, setOtherBlogs] = useState<any[]>([]);

  useEffect(() => {
    const loadBlog = async () => {
      const foundBlog = await getBlogBySlug(slug);

      if (!foundBlog) return;

      setBlog(foundBlog);

      const allBlogs = await fetchBlogs();

      setOtherBlogs(
        allBlogs.filter((b) => b.slug !== slug)
      );
    };

    loadBlog();
  }, [slug]);

 function getPreview(text: string, words = 20) {
  const cleaned = text
    .replace(/<[^>]+>/g, "")     // remove HTML tags
    .replace(/&nbsp;/g, " ")     // fix non-breaking spaces
    .replace(/\u00A0/g, " ");    // extra safety

  return cleaned.split(" ").slice(0, words).join(" ") + "...";
}

  if (!blog) {
    return (
      <div className="p-10">
        Loading...
      </div>
    );
  }

  return (
    <div>
      <BlogBanner />

      <section className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-5 gap-10">

        {/* Main Blog */}
        <div className="lg:col-span-4 min-w-0">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">

            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              {blog.title}
            </h1>

            <p className="text-sm text-gray-500 mb-8">
              {blog.author} • {blog.category}
            </p>

            <div
              className="blog-content"
              dangerouslySetInnerHTML={{
                __html: blog.content.replace(/&nbsp;/g, " "),
              }}
            />
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">

          <h3 className="font-semibold text-lg mb-4">
            Other Blogs
          </h3>

          {otherBlogs.map((item, index) => (
            <Link
              key={index}
              href={`/blog/${item.slug}`}
            >
              <div className="group cursor-pointer border-b pb-4 mb-7">

                <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition">
                  {item.title}
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  {getPreview(item.content, 15)}
                </p>

              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}