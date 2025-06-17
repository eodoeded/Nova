import type { Post } from "@/types";

import { TableOfContents } from "@/components/on-this-page";
import { PostNavigation } from "@/components/post-navigation";
import { formatDate } from "@/lib/date";
import { getPosts } from "@/lib/mdx";
import { MDX } from "@/mdx-components";

import React from "react";
import { readingTime } from "reading-time-estimator";

interface Props {
  post: Post;
  route: string;
}

export const Layout = ({ post, route }: Props) => {
  const posts = getPosts(route);

  const Seperator = () => {
    return <div>⋅</div>;
  };

  const PublishedTime = () => {
    return <div>Published {formatDate(post.time.created)}</div>;
  };
  const UpdateTime = () => {
    return <div>Updated {formatDate(post.time.updated)}</div>;
  };

  const ReadingTime = () => {
    return <div>{readingTime(post.content).minutes} minutes read</div>;
  };

  return (
    <React.Fragment>
      <div className="flex flex-col">
        <div>
          <h1>{post.title}</h1>
        </div>
        <div className="mt-1 flex gap-2 text-muted text-small">
          <PublishedTime />
          <Seperator />
          <UpdateTime />
          <Seperator />
          <ReadingTime />
        </div>
      </div>

      <MDX source={post.content} />
      {post.type !== "cv" && <PostNavigation posts={posts} />}
      {post.type === "cv" && <TableOfContents />}
    </React.Fragment>
  );
};
