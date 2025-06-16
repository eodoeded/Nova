import { getPosts } from "@/lib/mdx";

import Link from "next/link";
import React from "react";

interface PostProps {
  category: string;
}

export const Posts = ({ category }: PostProps) => {
  const posts = getPosts(category).sort((a, b) => {
    return new Date(b.time.created).getTime() - new Date(a.time.created).getTime();
  });

  const Seperator = () => <div className="border-border border-t" />;

  if (posts.length === 0) {
    return null;
  }

  return (
    <div className="mt-6 flex flex-col">
      <Link href={`/${category}`} className="flex justify-between">
        <h2 className="py-2 text-muted capitalize">
          {category} {posts.length > 0 && `(${posts.length})`}
        </h2>
      </Link>

      {posts.map((post) => {
        const content = (
          <div className="flex w-full justify-between py-2">
            <p className={category === "projects" ? "text-muted" : "cursor-pointer transition-opacity hover:opacity-50"}>{post.title}</p>
          </div>
        );

        return (
          <React.Fragment key={post.slug}>
            <Seperator />
            <Link href={`/${category}/${post.slug}`}>{content}</Link>
          </React.Fragment>
        );
      })}
    </div>
  );
};
