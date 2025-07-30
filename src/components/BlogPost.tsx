import type { Post } from "@/pages/tags/[tag].astro";

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
