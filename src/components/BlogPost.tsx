import type { Post } from "@/pages/tags/[tag].astro";

function BlogPost({url, frontmatter} : Post ) {
  return (
    <li>
      <a href={url}>{frontmatter.title}</a>
    </li>
  );
}

export default BlogPost;
