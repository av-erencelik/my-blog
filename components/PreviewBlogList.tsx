"use client";

import { usePreview } from "../lib/sanity.preview";
import BlogList from "./BlogList";

export default function PreviewBlogList({ query }: { query: string }) {
  const posts = usePreview(null, query);
  return <BlogList posts={posts}></BlogList>;
}
