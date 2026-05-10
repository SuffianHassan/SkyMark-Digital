"use client";

import { addBlog, fetchBlogs, updateBlog } from "@/components/services/BlogService";
import { db } from "@/components/services/firebase.config";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";


type MediaItem = {
  id: string;
  fileName: string;
  mediaUrl: string;
  mediaType: string;
  altText?: string;
};

type Blog = {
  id?: string;
  title: string;
  slug: string;
  author: string;
  category: string;
  imageId?: string;
  imageUrl: string;
  content: string;
};

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([])

  const [media, setMedia] = useState<MediaItem[]>([]);

  const [selectedBlogId, setSelectedBlogId] = useState("");

  const [form, setForm] = useState<Blog>({
    title: "",
    slug: "",
    author: "",
    category: "",
    imageId: "",
    imageUrl: "",
    content: "",
  });

  /**
   * Generate slug
   */
  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
  };

  /**
   * Load blogs
   */
  const loadBlogs = async () => {
    const data = await fetchBlogs();
    setBlogs(data);
  };

  /**
   * Load media
   */
  const loadMedia = async () => {
    const snapshot = await getDocs(collection(db, "media"));

    const items = snapshot.docs.map((doc) => ({
      id: doc.id,
      fileName: doc.data().fileName,
      mediaUrl: doc.data().mediaUrl,
      mediaType: doc.data().mediaType,
      altText: doc.data().altText || "",
    }));

    setMedia(items as MediaItem[]);
  };

  useEffect(() => {
    loadBlogs();
    loadMedia();
  }, []);

  /**
   * Handle form change
   */
  const handleChange = (
    field: keyof Blog,
    value: string
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  /**
   * Handle image select
   */
  const handleImageSelect = (imageId: string) => {
    const selectedImage = media.find(
      (m) => m.id === imageId
    );

    setForm((prev) => ({
      ...prev,
      imageId,
      imageUrl: selectedImage?.mediaUrl || "",
    }));
  };

  /**
   * Handle select existing blog
   */
  const handleSelectBlog = (id: string) => {
    setSelectedBlogId(id);

    const selectedBlog = blogs.find(
      (b) => b.id === id
    );

    if (!selectedBlog) return;

    setForm({
      title: selectedBlog.title,
      slug: selectedBlog.slug,
      author: selectedBlog.author,
      category: selectedBlog.category,
      imageId: selectedBlog.imageId,
      imageUrl: selectedBlog.imageUrl,
      content: selectedBlog.content,
    });
  };

  /**
   * Create Blog
   */
  const handleCreateBlog = async () => {
    try {
      await addBlog(form);

      toast.success("Blog created successfully");

      setForm({
        title: "",
        slug: "",
        author: "",
        category: "",
        imageId: "",
        imageUrl: "",
        content: "",
      });

      loadBlogs();

    } catch (err) {
      console.error(err);

      toast.error("Error creating blog");
    }
  };

  /**
   * Update Blog
   */
  const handleUpdateBlog = async () => {
    if (!selectedBlogId) {
      return toast.error(
        "Please select a blog first"
      );
    }

    try {
      await updateBlog(selectedBlogId, form);

      toast.success("Blog updated successfully");

      loadBlogs();

    } catch (err) {
      console.error(err);

      toast.error("Error updating blog");
    }
  };

  const handleDeleteBlog = async () => {
    if (!selectedBlogId) {
      return toast.error("Please select a blog first");
    }

    try {
      await deleteDoc(doc(db, "blogs", selectedBlogId));

      toast.success("Blog deleted successfully");

      setSelectedBlogId("");

      setForm({
        title: "",
        slug: "",
        author: "",
        category: "",
        imageId: "",
        imageUrl: "",
        content: "",
      });

      loadBlogs();
    } catch (err) {
      console.error(err);
      toast.error("Error deleting blog");
    }
  };

  const styles: Record<string, React.CSSProperties> = {
    wrapper: {
      padding: "30px",
      background: "#f3f3f3",
      minHeight: "100vh",
    },

    title: {
      fontSize: 28,
      fontWeight: 700,
      marginBottom: 25,
      color: "#000",
    },

    card: {
      background: "#006941",
      borderRadius: 14,
      padding: 20,
      display: "flex",
      flexDirection: "column",
      gap: 15,
    },

    input: {
      width: "100%",
      padding: "12px",
      borderRadius: 8,
      border: "1px solid #ccc",
      background: "#fff",
      color: "#000",
    },

    textarea: {
      width: "100%",
      padding: "12px",
      borderRadius: 8,
      border: "1px solid #ccc",
      minHeight: 300,
      background: "#fff",
      color: "#000",
    },

    label: {
      color: "#fff",
      fontSize: 14,
      fontWeight: 600,
      marginBottom: 6,
    },

    button: {
      padding: "12px 20px",
      borderRadius: 8,
      border: "none",
      background: "#00407d",
      color: "#fff",
      cursor: "pointer",
      marginTop: 10,
    },

    imagePreview: {
      width: 180,
      borderRadius: 12,
      marginTop: 10,
    },
  };

  const ReactQuill = dynamic(
    () => import("react-quill-new"),
    { ssr: false }
  );

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.title}>
        Blogs Management
      </h1>

      <div style={styles.card}>

        {/* Existing Blogs */}
        <div>
          <label style={styles.label}>
            Select Existing Blog
          </label>

          <select
            style={styles.input}
            value={selectedBlogId}
            onChange={(e) =>
              handleSelectBlog(e.target.value)
            }
          >
            <option value="">
              -- Select Blog --
            </option>

            {blogs.map((blog) => (
              <option
                key={blog.id}
                value={blog.id}
              >
                {blog.title}
              </option>
            ))}
          </select>
        </div>

        {/* Title */}
        <div>
          <label style={styles.label}>
            Blog Title
          </label>

          <input
            style={styles.input}
            value={form.title}
            onChange={(e) => {
              handleChange(
                "title",
                e.target.value
              );

              handleChange(
                "slug",
                generateSlug(e.target.value)
              );
            }}
          />
        </div>

        {/* Slug */}
        <div>
          <label style={styles.label}>
            Blog Slug
          </label>

          <input
            style={styles.input}
            value={form.slug}
            onChange={(e) =>
              handleChange(
                "slug",
                e.target.value
              )
            }
          />
        </div>

        {/* Author */}
        <div>
          <label style={styles.label}>
            Author
          </label>

          <input
            style={styles.input}
            value={form.author}
            onChange={(e) =>
              handleChange(
                "author",
                e.target.value
              )
            }
          />
        </div>

        {/* Category */}
        <div>
          <label style={styles.label}>
            Category
          </label>

          <input
            style={styles.input}
            value={form.category}
            onChange={(e) =>
              handleChange(
                "category",
                e.target.value
              )
            }
          />
        </div>

        {/* Image */}
        <div>
          <label style={styles.label}>
            Featured Image
          </label>

          <select
            style={styles.input}
            value={form.imageId}
            onChange={(e) =>
              handleImageSelect(
                e.target.value
              )
            }
          >
            <option value="">
              Select Image
            </option>

            {media.map((m) => (
              <option
                key={m.id}
                value={m.id}
              >
                {m.altText ||
                  m.fileName}
              </option>
            ))}
          </select>

          {form.imageUrl && (
            <img
              src={form.imageUrl}
              style={styles.imagePreview}
            />
          )}
        </div>

        {/* Content */}
        <div>
          <label style={styles.label}>
            Blog Content
          </label>

          <ReactQuill
            style={styles.textarea}
            theme="snow"
            value={form.content}
            onChange={(value) =>
              handleChange("content", value)
            }
          />

        </div>


        {/* Buttons */}
        <div
          style={{
            display: "flex",
            gap: 10,
          }}
        >
          <button
            style={styles.button}
            onClick={
              handleCreateBlog
            }
          >
            Create Blog
          </button>

          <button
            style={styles.button}
            onClick={
              handleUpdateBlog
            }
          >
            Update Blog
          </button>

          <button
            style={{
              ...styles.button,
              background: "#b00020",
            }}
            onClick={handleDeleteBlog}
            disabled={!selectedBlogId}
          >
            Delete Blog
          </button>
        </div>
      </div>
    </div>
  );
}