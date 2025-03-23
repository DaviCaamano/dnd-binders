export type DetailedMarkdownEntry = { width: string; markdown: string };

export type MarkdownEntry = (
  | string
  | DetailedMarkdownEntry
  | DetailedMarkdownEntry[]
);

export type MarkdownPage = MarkdownEntry[]
