import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";

import { db } from "./firebase.config";

export type Blog = {
  id?: string;
  title: string;
  slug: string;
  author: string;
  category: string;
  imageUrl: string;
  content: string;
  createdAt?: any;
  updatedAt?: any;
};

const BLOG_COLLECTION = "blogs";

/**
 * Create Blog
 */
export const addBlog = async (blog: Blog) => {
  return await addDoc(collection(db, BLOG_COLLECTION), {
    ...blog,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

};

/**
 * Get All Blogs
 */
export const fetchBlogs = async (): Promise<Blog[]> => {

  const q = query(
    collection(db, "blogs"),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Blog[];
};

/**
 * Get Blog By Slug
 */
// export const getBlogBySlug = async (slug: string) => {
//   const blogs = await fetchBlogs();

//   return blogs.find((b) => b.slug === slug);
// };
export const getBlogBySlug = async (slug: string) => {

  const q = query(
    collection(db, "blogs"),
    where("slug", "==", slug)
  );

  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    return null;
  }

  return {
    id: querySnapshot.docs[0].id,
    ...querySnapshot.docs[0].data(),
  };
};
/**
 * Update Blog
 */
export const updateBlog = async (
  id: string,
  data: Partial<Blog>
) => {
  await updateDoc(doc(db, BLOG_COLLECTION, id), {
    ...data,
    updatedAt: serverTimestamp(),
  });
};