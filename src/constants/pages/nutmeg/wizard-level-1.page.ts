import { MarkdownEntry, MarkdownPage } from "@type/markdown-entry";

const wizardClassFeatureEntries: MarkdownEntry = `
# Wizard Features (Level 1)

### Ritual Adept
You can cast any spell as a Ritual if that spell has the Ritual tag and the spell is in your spellbook. You needn’t have the spell prepared, but you must read from the book to cast a spell in this way.

### Arcane Recovery
You can regain some of your magical energy by studying your spellbook. When you finish a Short Rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your Wizard level (rounded up), and none of the slots can be level 6 or higher. For example, if you’re a level 4 Wizard, you can recover up to two levels worth of spell slots, regaining either a level 2 spell slot or two level 1 spell slots. Once you use this feature, you can’t do so again until you finish a Long Rest.`;

export const wizardLevel1: MarkdownPage = [wizardClassFeatureEntries];
