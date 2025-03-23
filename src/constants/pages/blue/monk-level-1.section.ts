import { MarkdownSection } from "@type/markdown-entry";

const monkSubclassLevel1Entries = `
### Dexterous Attacks - 1st level
You can use Dexterity modifier instead of Strength modifier for the attack and damage rolls of your Unarmed Strikes and Monk Weapons. In addition, when you choose the Grapple or Shove option of your Unarmed Strike, you can use your Dexterity modifier instead of Strength modifier to determine the save DC.

### Bonus unarmed Strike - 1st level
You can make one Unarmed Strike as a Bonus Action.

### Unarmored Defense - 1st level
While you aren’t wearing any armor or wielding a Shield, your base Armor Class equals 10 + your Dexterity modifier + your Wisdom modifier.`;

export const monkClassLevel1Section: MarkdownSection = {
  title: "Monk Features (Level 1)",
  sections: [monkSubclassLevel1Entries],
};
