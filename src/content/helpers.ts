import { getCollection, type CollectionEntry } from "astro:content";

// 創建一個函數來取得所有文章
export async function getAllPosts() {
  return await getCollection("blog");
}

// 導出類型
export type Post = CollectionEntry<"blog">;
