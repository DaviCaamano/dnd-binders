

const rogueClassTableEntries = `
# Level Up Chart

| Level | Prof. Bonus | Class Features                                             | Sneak Attack |
|-------|-------------|------------------------------------------------------------|--------------|
| 1st   | +2          | Expertise, Sneak Attack, Thieves’ Cant, Weapon Mastery     | 1d6          |
| 2nd   | +2          | Cunning Action                                             | 1d6          |
| 3rd   | +2          | Rogue Subclass, Steady Aim                                 | 2d6          |
| 4th   | +2          | Ability Score Improvement                                  | 2d6          |
| 5th   | +3          | Cunning Strike, Uncanny Dodge                              | 3d6          |
| 6th   | +3          | Expertise                                                  | 3d6          |
| 7th   | +3          | Evasion, Reliable Talent                                   | 4d6          |
| 8th   | +3          | Ability Score Improvement                                  | 4d6          |
| 9th   | +4          | Subclass Feature                                           | 5d6          |
| 10th  | +4          | Ability Score Improvement                                  | 5d6          |
| 11th  | +4          | Improved Cunning Strike                                    | 6d6          |
| 12th  | +4          | Ability Score Improvement                                  | 6d6          |
| 13th  | +5          | Subclass Feature                                           | 7d6          |
| 14th  | +5          | Devious Strikes                                            | 7d6          |
| 15th  | +5          | Slippery Mind                                              | 8d6          |
| 16th  | +5          | Ability Score Improvement                                  | 8d6          |
| 17th  | +6          | Subclass Feature                                           | 9d6          |
| 18th  | +6          | Elusive                                                    | 9d6          |
| 19th  | +6          | Ability Score Improvement                                  | 10d6         |
| 20th  | +6          | Stroke of Luck                                             | 10d6         |

### Prof. Bonus
Your Proficiency Bonus and how much it increases per level

### Class Features
What new features you get per level

### Sneak Attack
Once per turn, if you have advantage against the target of your attack, or you are attacking a creature within 5 feet of an ally (without disadvantage) roll these die and add them to your weapon damage.`;

export const rogueClassTable: string[] = [rogueClassTableEntries];
