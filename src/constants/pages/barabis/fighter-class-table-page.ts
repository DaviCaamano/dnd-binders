import { MarkdownSection } from "@type/markdown-entry";

const fighterTablePageEntries = `
| Level | Prof. Bonus | Class Features                                           | Second Wind | Weapon Mastery |
|-------|-------------|----------------------------------------------------------|-------------|----------------|
| 1     | +2          | Fighting Style, Second Wind, Weapon Mastery              | 2           | 3              |
| 2     | +2          | Action Surge (One Use), Tactical Mind                    | 2           | 3              |
| 3     | +2          | Fighter Subclass                                         | 2           | 3              |
| 4     | +2          | Ability Score Improvement                                | 3           | 4              |
| 5     | +3          | Extra Attack, Tactical Shift                             | 3           | 4              |
| 6     | +3          | Ability Score Improvement                                | 3           | 4              |
| 7     | +3          | Subclass Feature                                         | 3           | 4              |
| 8     | +3          | Ability Score Improvement                                | 3           | 4              |
| 9     | +4          | Indomitable (One Use), Master of Armaments               | 3           | 4              |
| 10    | +4          | Subclass Feature                                         | 4           | 5              |
| 11    | +4          | Two Extra Attacks                                        | 4           | 5              |
| 12    | +4          | Ability Score Improvement                                | 4           | 5              |
| 13    | +5          | Indomitable (Two Uses), Studied Attacks                  | 4           | 5              |
| 14    | +5          | Ability Score Improvement                                | 4           | 5              |
| 15    | +5          | Subclass Feature                                         | 4           | 5              |
| 16    | +5          | Ability Score Improvement                                | 4           | 6              |
| 17    | +6          | Action Surge (Two Uses), Indomitable (Three Uses)        | 4           | 6              |
| 18    | +6          | Subclass Feature                                         | 4           | 6              |
| 19    | +6          | Ability Score Improvement                                | 4           | 6              |
| 20    | +6          | Three Extra Attacks                                      | 4           | 6              |

### Prof. Bonus
Your Proficiency Bonus and how much it increases per level

### Class Features
What new features you get per level

### Second Wind
You can use the Second Wind Feature to heal yourself this number of times. You get 1 charge back on a short rest once per day. You gain all charges back on a long rest.

### Weapon Mastery
Each weapon has a special effect when the wielder has a mastery of it. You can pick a number of weapons equal to this number to master.`;

export const fighterClassTablePage: MarkdownSection = {
  title: "Level Up Chart",
  sections: [fighterTablePageEntries],
};
