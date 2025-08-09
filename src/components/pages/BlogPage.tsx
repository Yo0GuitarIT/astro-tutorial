import { type Post } from "@/content/helpers";
import BlogPost from "@/components/BlogPost";

type BlogPageProps = {
  allPosts: Post[];
};

function BlogPage({ allPosts }: BlogPageProps) {
  return (
    <>
      <p>This is where I will post about my journey learning Astro.</p>
      <ul>
        {allPosts.map(post => (
          <BlogPost post={post} key={post.id} />
        ))}
      </ul>
    </>
  );
}

export default BlogPage;
