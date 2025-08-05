export type Post = {
  url: string;
  frontmatter: {
    tags: string[];
    title: string;
  };
};
