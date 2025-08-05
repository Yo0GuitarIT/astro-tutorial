import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// 定義 blog collection 的 schema
const blog = defineCollection({
  // 使用 glob loader 來載入 Markdown 和 MDX 檔案
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/blog",
  }),
  // 定義 frontmatter 的 schema
  schema: z.object({
    layout: z.string().optional(),
    title: z.string(),
    pubDate: z.coerce.date().optional(),
    description: z.string().optional(),
    author: z.string().optional(),
    image: z
      .object({
        url: z.string(),
        alt: z.string(),
      })
      .optional(),
    tags: z.array(z.string()).default([]),
  }),
});

// 匯出 collections 物件
export const collections = {
  blog,
};
