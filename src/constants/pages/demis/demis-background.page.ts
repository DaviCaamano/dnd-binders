import { MarkdownPage, MarkdownEntry } from "@type/markdown-entry";

const tieflingSpeciesEntries: MarkdownEntry = `
# Infernal Tiefling Features

### Fiendish Legacy
You are the recipient of a legacy that grants you supernatural abilities. Choose a legacy from the Fiendish Legacies table. You gain the level 1 benefit of the chosen legacy.

When you reach character levels 3 and 5, you learn a higher-level spell, as shown on the table. You always have that spell prepared. You can cast it once without a spell slot, and you regain the ability to cast it in that way when you finish a Long Rest. You can also cast the spell using any spell slots you have of the appropriate level.
#### Infernal Legacy 
    * You have Resistance to Fire Damage.
    * Level 1: Cantrip - Fire Bolt
    * Level 3: Spell - Hellish Rebuke
    * Level 5: Spell - Darkness`;



export const demisBackground: MarkdownPage = [tieflingSpeciesEntries];
