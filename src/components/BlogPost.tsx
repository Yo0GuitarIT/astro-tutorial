import { type Post } from "@/types";

type BlogPostProps = {
  post: Post;
};

function BlogPost({ post }: BlogPostProps) {
  const { url, frontmatter } = post;
  return (
    <li>
      <a href={url}>{frontmatter.title}</a>
    </li>
  );
}

export default BlogPost;
