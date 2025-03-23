import { MarkdownSection } from "@type/markdown-entry";

const paladinClassTableEntries = `
| Level | Prof. Bonus | Class Features                                          | Channel Divinity | Prepared Spells | 1st | 2nd | 3rd | 4th | 5th |
|-------|-------------|---------------------------------------------------------|------------------|-----------------|-----|-----|-----|-----|-----|
| 1st   | +2          | Lay on Hands, Spellcasting, Weapon Mastery              | —                | 2               | 2   | —   | —   | —   | —   |
| 2nd   | +2          | Fighting Style, Paladin’s Smite                         | —                | 3               | 2   | —   | —   | —   | —   |
| 3rd   | +2          | Channel Divinity, Paladin Subclass                      | 2                | 4               | 3   | —   | —   | —   | —   |
| 4th   | +2          | Ability Score Improvement                               | 2                | 5               | 3   | —   | —   | —   | —   |
| 5th   | +3          | Extra Attack, Faithful Steed                            | 2                | 6               | 4   | 2   | —   | —   | —   |
| 6th   | +3          | Aura of Protection                                      | 2                | 6               | 4   | 2   | —   | —   | —   |
| 7th   | +3          | Subclass Feature                                        | 2                | 7               | 4   | 3   | —   | —   | —   |
| 8th   | +3          | Ability Score Improvement                               | 2                | 7               | 4   | 3   | —   | —   | —   |
| 9th   | +4          | Abjure Foes                                             | 2                | 9               | 4   | 3   | 2   | —   | —   |
| 10th  | +4          | Aura of Courage                                         | 2                | 9               | 4   | 3   | 2   | —   | —   |
| 11th  | +4          | Radiant Strikes                                         | 3                | 10              | 4   | 3   | 3   | —   | —   |
| 12th  | +4          | Ability Score Improvement                               | 3                | 10              | 4   | 3   | 3   | —   | —   |
| 13th  | +5          | —                                                       | 3                | 11              | 4   | 3   | 3   | 1   | —   |
| 14th  | +5          | Restoring Touch                                         | 3                | 11              | 4   | 3   | 3   | 1   | —   |
| 15th  | +5          | Subclass Feature                                        | 3                | 12              | 4   | 3   | 3   | 2   | —   |
| 16th  | +5          | Ability Score Improvement                               | 3                | 12              | 4   | 3   | 3   | 2   | —   |
| 17th  | +6          | —                                                       | 3                | 14              | 4   | 3   | 3   | 3   | 1   |
| 18th  | +6          | Aura Expansion                                          | 3                | 14              | 4   | 3   | 3   | 3   | 1   |
| 19th  | +6          | Ability Score Improvement                               | 3                | 15              | 4   | 3   | 3   | 3   | 2   |
| 20th  | +6          | Subclass Feature                                        | 3                | 15              | 4   | 3   | 3   | 3   | 2   |

### Prof. Bonus
Your Proficiency Bonus and how much it increases per level

### Class Features
What new features you get per level

### Channel Divinity
Some of your powerful features use a charge of Channel Divinity. You recharge your divinity when you short or long rest.

### Prepared Spells
You have access to every paladin spell you have spell slots for. However, you can only cast spells you prepare for the day. When you finish a long rest, pick this number of spells to have access to for the day.`;

export const paladinClassTableSection: MarkdownSection = {
  title: "Level up Chart",
  sections: [paladinClassTableEntries],
};
