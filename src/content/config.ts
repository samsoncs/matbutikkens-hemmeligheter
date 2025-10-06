import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const episodes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/episodes" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      published: z.string(),
      length: z.string(),
      cover: image(),
      description: z.string(),
    }),
});

export const collections = { episodes };
