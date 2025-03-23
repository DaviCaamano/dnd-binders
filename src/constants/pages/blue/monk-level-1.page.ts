import { MarkdownEntry, MarkdownPage } from "@type/markdown-entry";

const monkSubclassLevel1Entries: MarkdownEntry = `
# Monk Features (Level 1)

### Dexterous Attacks
You can use Dexterity modifier instead of Strength modifier for the attack and damage rolls of your Unarmed Strikes and Monk Weapons. In addition, when you choose the Grapple or Shove option of your Unarmed Strike, you can use your Dexterity modifier instead of Strength modifier to determine the save DC.

### Bonus unarmed Strike
You can make one Unarmed Strike as a Bonus Action.

### Unarmored Defense
While you aren’t wearing any armor or wielding a Shield, your base Armor Class equals 10 + your Dexterity modifier + your Wisdom modifier.`;

export const monkLevel1: MarkdownPage = [monkSubclassLevel1Entries];
