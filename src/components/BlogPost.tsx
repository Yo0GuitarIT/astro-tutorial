import { type Post } from "@/content/helpers";

type BlogPostProps = {
  post: Post;
};

function BlogPost({ post }: BlogPostProps) {
  return (
    <li>
      <a href={`/blog/${post.id.replace(/\.[^/.]+$/, "")}`}>
        {post.data.title}
      </a>
    </li>
  );
}

export default BlogPost;
