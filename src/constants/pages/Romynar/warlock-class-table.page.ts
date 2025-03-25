

const warlockClassTableEntries = `
# Level Up Chart

| Level | Prof. Bonus | Class Features                              | Invocations | Cantrips | Spells Prep'd | Spell Slots | Slot Level |
|-------|-------------|---------------------------------------------|-------------|----------|-----------------|-------------|------------|
| 1     | +2          | Eldritch Invocations, Pact Magic            | 1           | 2        | 2               | 1           | 1          |
| 2     | +2          | Magical Cunning                             | 3           | 2        | 3               | 2           | 1          |
| 3     | +2          | Warlock Subclass                            | 3           | 2        | 4               | 2           | 2          |
| 4     | +2          | Ability Score Improvement                   | 3           | 3        | 5               | 2           | 2          |
| 5     | +3          | —                                           | 5           | 3        | 6               | 2           | 3          |
| 6     | +3          | Subclass Feature                            | 5           | 3        | 7               | 2           | 3          |
| 7     | +3          | —                                           | 6           | 3        | 8               | 2           | 4          |
| 8     | +3          | Ability Score Improvement                   | 6           | 3        | 9               | 2           | 4          |
| 9     | +4          | Contact Patron                              | 7           | 3        | 10              | 2           | 5          |
| 10    | +4          | Subclass Feature                            | 7           | 4        | 10              | 2           | 5          |
| 11    | +4          | Mystic Arcanum (Level 6 Spell)              | 7           | 4        | 11              | 3           | 5          |
| 12    | +4          | Ability Score Improvement                   | 8           | 4        | 11              | 3           | 5          |
| 13    | +5          | Mystic Arcanum (Level 7 Spell)              | 8           | 4        | 12              | 3           | 5          |
| 14    | +5          | Subclass Feature                            | 8           | 4        | 12              | 3           | 5          |
| 15    | +5          | Mystic Arcanum (Level 8 Spell)              | 9           | 4        | 13              | 3           | 5          |
| 16    | +5          | Ability Score Improvement                   | 9           | 4        | 13              | 3           | 5          |
| 17    | +6          | Mystic Arcanum (Level 9 Spell)              | 9           | 4        | 14              | 4           | 5          |
| 18    | +6          | —                                           | 10          | 4        | 14              | 4           | 5          |
| 19    | +6          | Ability Score Improvement                   | 10          | 4        | 15              | 4           | 5          |
| 20    | +6          | Eldritch Master                             | 10          | 4        | 15              | 4           | 5          |

### Prof. Bonus
Your Proficiency Bonus and how much it increases per level

### Class Features
What new features you get per level

### Invocations
The number of warlock invocations you can pick. You can swap one every time you level up.

### Cantrips
Level 0 spells that only cost an action to cast. Each time this number increases you can pick a new cantrip to learn.

### Spells Prepared
You have access to every warlock spell you have spell slots for. However, you can only cast spells you prepare for the day. When you finish a long rest, pick this number of spells to have access to for the day.

### Slot Level
All of your non-cantrip spells are cast at this level.

`;
export const warlockClassTable: string[] = [warlockClassTableEntries];
