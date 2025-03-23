import { MarkdownSection } from "@type/markdown-entry";

const paladinLevel2Entries = `
### Fighting Style: Great Weapon Fighting - 2nd level
When you roll damage for an attack you make with a Melee weapon that you are holding with two hands, you can treat any 1 or 2 on a damage die as a 3. The weapon must have the Two-Handed or Versatile property to gain this benefit.

### Paladin’s Smite - 2nd level
You always have the Divine Smite spell prepared. In addition, you can cast it from this feature once without expending a spell slot, and you must finish a Long Rest before you can cast it this way again.`;

export const paladinLevel2Section: MarkdownSection = {
  title: "Paladin Features (Level 2)",
  sections: [paladinLevel2Entries],
};
