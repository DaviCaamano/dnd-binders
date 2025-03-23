import { MarkdownSection } from "@type/markdown-entry";

const AStralElfSpeciesEntries = `
### Fey Ancestry - 1st level
You have advantage on saving throws you make to avoid or end the charmed condition on yourself.

### Starlight Step - 1st level
As a bonus action, you can magically teleport up to 30 feet to an unoccupied space you can see. You can use this trait a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.

### Astral Trance - 1st level
You don't need to sleep, and magic can't put you to sleep. You can finish a long rest in 4 hours if you spend those hours in a trancelike meditation, during which you remain conscious. Whenever you finish this trance, you gain proficiency in one skill of your choice and with one weapon or tool of your choice, selected from the Player's Handbook. You magically acquire these proficiencies by drawing them from shared elven memory and the experiences of entities on the Astral Plane, and you retain them until you finish your next long rest.`;

export const wizardClassFeatureSection: MarkdownSection = {
  title: "Astral Elf Features",
  sections: [AStralElfSpeciesEntries],
};

const backgroundSageEntries = `
### Feat: Magic Initiate - 1st level
    #### Two Cantrips:
        You learn two cantrips of your choice from the Cleric, Druid or Wizard spell list (choose when you select this feat). Intelligence, Wisdom or Charisma is your spellcasting ability for this feat's spells (choose when you select this feat).
        
    #### 1st-Level Spell:
        Choose a 1st-level Spell from the same spell list you selected for this feat's cantrips. You always have that Spell prepared. You can cast it once without a Spell Slot, and you regain the ability to cast it in that way when you finish a Long Rest. You can also cast the Spell using any Spell Slots you have.
        
    #### Spell Change:
        Whenever you gain a new level, you can replace one of the Spells you chose for this Feat with a different Spell of the same level from the chosen Spell list.`;

export const backgroundSageSection: MarkdownSection = {
  title: "Background (Sage) Features",
  sections: [backgroundSageEntries],
};
