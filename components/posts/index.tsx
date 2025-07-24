import { getPosts } from "@/lib/mdx";

import Link from "next/link";
import React from "react";

interface PostProps {
  category: string;
  pathname?: string;
}

export const Posts = ({ category, pathname = "" }: PostProps) => {
  const isExperiencePage = pathname === "/experience";

  const posts = getPosts(category)
    .filter((post) => post.slug !== "cv")
    .sort((a, b) => {
      const dateA = new Date(a.time.created).getTime();
      const dateB = new Date(b.time.created).getTime();
      return dateB - dateA;
    });

  // Debug logging
  console.log("Posts component:", {
    category,
    postsCount: posts.length,
    posts: posts.map((p) => p.title),
  });

  const Seperator = () => <div className="border-border border-t separator-transition pointer-events-none" />;

  if (posts.length === 0) {
    console.log("No posts found for category:", category);
    return null;
  }

  const CategoryHeader = () => <h2 className="py-2 text-muted capitalize">{category === "experience" ? "Experience" : category}</h2>;

  return (
    <div className="mt-6 flex flex-col">
      {isExperiencePage ? (
        <CategoryHeader />
      ) : (
        <Link href={`/${category}`} className="flex justify-between">
          <CategoryHeader />
        </Link>
      )}

      {posts.map((post) => (
        <React.Fragment key={post.slug}>
          <Seperator />
          {category === "experience" && post.title === "Arm" && post.externalUrl ? (
            <a
              href={post.externalUrl}
              className="border-border border-b py-2 block"
              style={{ textDecoration: "none" }}
            >
              <span className="text-white transition-opacity hover:opacity-50 pointer-events-auto">{post.title}</span>
            </a>
          ) : category === "experience" ? (
            <div className="flex w-full justify-between py-2">
              <p className="text-muted">{post.title}</p>
            </div>
          ) : (
            <Link href={`/${category}/${post.slug}`} className="group hover:none py-2 no-underline focus:outline-none active:outline-none">
              <span className="transition-opacity group-hover:opacity-50">{post.title}</span>
            </Link>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
