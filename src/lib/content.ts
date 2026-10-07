import { getEntry, type CollectionEntry } from "astro:content";
import type { ImageMetadata } from "astro";
import home from "../assets/shots/home.png";
import query from "../assets/shots/query.png";
import browse from "../assets/shots/browse.png";
import plan from "../assets/shots/plan.png";

type Data = CollectionEntry<"sections">["data"];
export type Section<K extends Data["section"]> = Extract<Data, { section: K }>;

/** Loads one page section by its file name, typed by its `section` field. */
export async function section<K extends Data["section"]>(name: K): Promise<Section<K>> {
  const entry = await getEntry("sections", name);
  if (!entry || entry.data.section !== name) {
    throw new Error(`content: missing section "${name}" in src/content/sections`);
  }
  return entry.data as Section<K>;
}

/** Real DBWiz screenshots, rendered from the terminal with freeze. */
export const shots: Record<"home" | "query" | "browse" | "plan", ImageMetadata> = { home, query, browse, plan };

const escape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** Escapes copy and turns `backticked` spans into <code>, for set:html. */
export function inline(text: string): string {
  return escape(text).replace(/`([^`]+)`/g, "<code>$1</code>");
}
