import { type Post } from "@/utils";
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
          <BlogPost post={post} />
        ))}
      </ul>
    </>
  );
}

export default BlogPage;
