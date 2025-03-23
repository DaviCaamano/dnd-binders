export type DetailedMarkdownEntry = { width: string; markdown: string };

export type MarkdownEntry = (
  | string
  | DetailedMarkdownEntry
  | DetailedMarkdownEntry[]
)[];

export interface MarkdownSection {
  title?: string;
  sections: MarkdownEntry;
}
