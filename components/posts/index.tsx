import { formatter } from "@/lib/formatter";
import { getPosts } from "@/lib/mdx";
import { LockIcon } from "@/components/lock-icon";

import { Link as NextViewTransition } from "next-view-transitions";
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
      <NextViewTransition href={`/${category}`} className="flex justify-between">
        <h2 className="py-2 text-muted capitalize">
          {category} {posts.length > 0 && `(${posts.length})`}
        </h2>
      </NextViewTransition>

      {posts.map((post) => {
        const content = (
          <div className="flex w-full justify-between py-2">
            <div className="flex items-center">
              {category === "projects" && <LockIcon />}
              <p className="hover:opacity-50 transition-opacity cursor-pointer">{post.title}</p>
            </div>
            <p className="mt-0 text-muted">{post.time.role}</p>
          </div>
        );

        return (
          <React.Fragment key={post.slug}>
            <Seperator />
            {category === "projects" ? (
              content
            ) : (
              <NextViewTransition href={`/${category}/${post.slug}`}>
                {content}
              </NextViewTransition>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
