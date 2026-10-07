import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

// Every page section is one Markdown file in src/content/sections, told apart by
// its `section` field. A discriminated union gives each its own schema, so a typo
// in a file's frontmatter fails the build instead of rendering a blank block.

const link = z.object({ label: z.string(), href: z.url() });
const shot = z.enum(["home", "query", "browse", "plan"]);

const hero = z.object({
  section: z.literal("hero"),
  title: z.string(),
  subtitle: z.string(),
  command: z.string(),
  secondary: link,
  shot,
  shot_alt: z.string(),
});

const engines = z.object({
  section: z.literal("engines"),
  title: z.string(),
  items: z.array(z.object({ name: z.string(), icon: z.string() })),
});

const features = z.object({
  section: z.literal("features"),
  title: z.string(),
  cells: z.array(
    z.object({
      title: z.string(),
      body: z.string(),
      icon: z.string(),
      shot: shot.optional(),
      shot_alt: z.string().optional(),
      span: z.enum(["narrow", "wide", "full"]),
    }),
  ),
  more_title: z.string(),
  more: z.array(z.object({ title: z.string(), body: z.string() })),
});

const omarchy = z.object({
  section: z.literal("omarchy"),
  title: z.string(),
  subtitle: z.string(),
  link,
  points: z.array(z.object({ title: z.string(), body: z.string(), icon: z.string() })),
});

const install = z.object({
  section: z.literal("install"),
  title: z.string(),
  subtitle: z.string(),
  methods: z.array(
    z.object({
      id: z.string(),
      label: z.string(),
      command: z.string(),
      note: z.string(),
      link: link.optional(),
    }),
  ),
  requirements: z.string(),
});

const quickstart = z.object({
  section: z.literal("quickstart"),
  title: z.string(),
  steps: z.array(z.object({ verb: z.string(), body: z.string() })),
});

const faq = z.object({
  section: z.literal("faq"),
  title: z.string(),
  items: z.array(z.object({ q: z.string(), a: z.string() })),
});

const footer = z.object({
  section: z.literal("footer"),
  title: z.string(),
  tagline: z.string(),
  links: z.array(link),
});

const sections = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/sections" }),
  schema: z.discriminatedUnion("section", [hero, engines, features, omarchy, install, quickstart, faq, footer]),
});

export const collections = { sections };
