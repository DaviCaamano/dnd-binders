import { MarkdownPage, MarkdownEntry } from "@type/markdown-entry";

const drowSpeciesEntries: MarkdownEntry = `
# Elf (Drow) Features

### Dark Vision
You can see in dim light within 60 feet of yourself as if it were bright light, and in darkness as if it were dim light. You discern colors in that darkness only as shades of gray.

### Fey Ancestry
You have advantage on saving throws you make to avoid or end the charmed condition on yourself.

### Elven Linage
You are part of a lineage that grants you supernatural abilities. Choose a lineage from the Elven Lineages table. You gain the level 1 benefit of that lineage.

When you reach character levels 3 and 5, you learn a higher-level spell, as shown on the table. You always have that spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Long Rest. You can also cast the spell using any spell slots you have of the appropriate level.
#### Drow Lineage 
    * Level 1: The range of your Darkvision increases to 120 feet. You also know the Dancing Lights cantrip.
    * Level 3: Spell - Faerie Fire
    * Level 5: Spell - Darkness`;

const acolyteBackgroundEntries: MarkdownEntry = `
# Background (Acolyte) Features

### Feat: Magic Initiate
    #### Two Cantrips:
        You learn two cantrips of your choice from the Cleric, Druid or Wizard spell list (choose when you select this feat). Intelligence, Wisdom or Charisma is your spellcasting ability for this feat's spells (choose when you select this feat).
        
    #### 1st-Level Spell:
        Choose a 1st-level Spell from the same spell list you selected for this feat's cantrips. You always have that Spell prepared. You can cast it once without a Spell Slot, and you regain the ability to cast it in that way when you finish a Long Rest. You can also cast the Spell using any Spell Slots you have.
        
    #### Spell Change:
        Whenever you gain a new level, you can replace one of the Spells you chose for this Feat with a different Spell of the same level from the chosen Spell list.`;
export const demisBackground: MarkdownPage = [drowSpeciesEntries, acolyteBackgroundEntries];
