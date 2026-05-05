"use client";

import { blogs } from "@/components/data/blog";
// import { Header } from "@/components/layout/header";
// import { TopBar } from "@/components/layout/top-bar";
import { BlogBanner } from "@/components/services/banners/blog-banner";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function BlogDetail() {
    const params = useParams();
    const slug = params.slug as string;
   
    const blog = blogs.find((b) => b.slug === slug);
  
    if (!blog) return <div className="p-10">Blog not found</div>;
  
    const otherBlogs = blogs.filter((b) => b.slug !== slug);

    function getPreview(text: string, words = 20) {
        const stripped = text.replace(/<[^>]+>/g, "") // remove HTML
        return stripped.split(" ").slice(0, words).join(" ") + "..."
      }

  return (
    <div>
      {/* <TopBar />
      <Header /> */}
      <BlogBanner />
      {/* 📄 CONTENT AREA */}
      
      <section className="max-w-6xl mx-auto px-6 py-16 grid lg:grid-cols-5 gap-10">
        
        {/* 📰 MAIN BLOG (80%) */}
        <div className="lg:col-span-4">
            
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 ">
            
            {/* TITLE */}
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                {blog.title}
            </h1>

            {/* META */}
            <p className="text-sm text-gray-500 mb-8">
                {blog.date} • {blog.author} • {blog.category}
            </p>
            {/* ✅ ONLY ONE CONTENT BLOCK */}
    <div
      className="blog-content text-gray-700"
      dangerouslySetInnerHTML={{ __html: blog.content }}
    />
            </div>
        </div>

        {/* 📚 SIDEBAR (20%) */}
        <div className="lg:col-span-1 space-y-6">

            <h3 className="font-semibold text-lg mb-4">Other Blogs</h3>

            {otherBlogs.map((item, index) => (
            <Link key={index} href={`/blog/${item.slug}`}>
                <div className="group cursor-pointer border-b pb-4 mb-7">

                <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition">
                    {item.title}
                </p>

                <p className="text-xs text-gray-500 mt-1">
                    {getPreview(item.content, 20)}
                </p>

                </div>
            </Link>
            ))}

        </div>

        </section>
    </div>
  )
}