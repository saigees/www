import { defineCollection, z } from "astro:content"

export const collections = {
    "blog": defineCollection({
        type: "content",
        schema: z.object({
            title: z.string(),
            description: z.string().default("🤷‍♀️"),
            date: z.string(),
            private: z.boolean().default(false),
        })
    })
}