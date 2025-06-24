import { getPosts } from "@/lib/mdx";

import Link from "next/link";
import React from "react";

interface PostProps {
  category: string;
  pathname?: string;
}

export const Posts = ({ category, pathname = "" }: PostProps) => {
  const isProjectsPage = pathname === "/projects";
  
  const posts = getPosts(category)
    .filter((post) => post.slug !== "cv")
    .sort((a, b) => {
      const dateA = new Date(a.time.created).getTime();
      const dateB = new Date(b.time.created).getTime();
      return dateB - dateA;
    });

  // Debug logging
  console.log('Posts component:', { category, postsCount: posts.length, posts: posts.map(p => p.title) });

  const Seperator = () => <div className="border-border border-t" />;

  if (posts.length === 0) {
    console.log('No posts found for category:', category);
    return null;
  }

  const CategoryHeader = () => (
    <h2 className="py-2 text-muted capitalize">
      {category}
    </h2>
  );

  return (
    <div className="mt-6 flex flex-col">
      {isProjectsPage ? (
        <CategoryHeader />
      ) : (
        <Link href={`/${category}`} className="flex justify-between">
          <CategoryHeader />
        </Link>
      )}

      {posts.map((post) => (
          <React.Fragment key={post.slug}>
            <Seperator />
          {category === "projects" ? (
            <div className="flex w-full justify-between py-2">
              <p className="text-muted">{post.title}</p>
            </div>
          ) : (
            <Link href={`/${category}/${post.slug}`} className="flex w-full justify-between py-2 group no-underline hover:none focus:outline-none active:outline-none">
              <p className="transition-opacity group-hover:opacity-50">{post.title}</p>
            </Link>
          )}
          </React.Fragment>
      ))}
    </div>
  );
};
