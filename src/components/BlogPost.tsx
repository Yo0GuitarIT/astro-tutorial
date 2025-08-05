import { type Post } from "@/utils";

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
