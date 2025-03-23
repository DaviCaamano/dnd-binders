import { MarkdownSection } from "@type/markdown-entry";

const tieflingSpeciesEntries = `
### Fiendish Legacy - 1st level
You are the recipient of a fiendish legacy that grants you supernatural abilities. Choose a legacy from the Fiendish Legacies table. You gain the level 1 benefit of that lineage. When you reach character levels 3 and 5, you learn a higher level spell, as shown on the table. You always have that spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Long Rest. You can also cast the spell using any spell slots you have of the appropriate level. Intelligence, Wisdom, or Charisma is your spellcasting ability for the Spells you cast with this trait (choose the ability when you select the lineage).

#### Infernal Legacy 
    * You have Resistance to Fire Damage.
    * Level 1: Cantrip - Fire Bolt
    * Level 3: Spell - Hellish Rebuke
    * Level 5: Darkness`;

export const tieflingSpeciesSection: MarkdownSection = {
  title: "Infernal Tiefling Features",
  sections: [tieflingSpeciesEntries],
};
