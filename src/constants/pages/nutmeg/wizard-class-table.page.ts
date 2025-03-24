

const wizardClassTableEntries = `
# Level Up Chart

### Wizard

| Level | Prof. Bonus | Class Features                         | Cantrips | Prepared Spells | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|-------|-------------|----------------------------------------|----------|-----------------|---|---|---|---|---|---|---|---|---|
| 1     | +2          | Arcane Recovery, Spellcasting          | 3        | 4               | 2 | — | — | — | — | — | — | — | — |
| 2     | +2          | Scholar                                | 3        | 5               | 3 | — | — | — | — | — | — | — | — |
| 3     | +2          | Wizard Subclass                        | 3        | 6               | 4 | 2 | — | — | — | — | — | — | — |
| 4     | +2          | Ability Score Improvement              | 4        | 7               | 4 | 3 | — | — | — | — | — | — | — |
| 5     | +3          | Memorize Spell                         | 4        | 9               | 4 | 3 | 2 | — | — | — | — | — | — |
| 6     | +3          | Subclass Feature                       | 4        | 10              | 4 | 3 | 3 | — | — | — | — | — | — |
| 7     | +3          | —                                      | 4        | 11              | 4 | 3 | 3 | 1 | — | — | — | — | — |
| 8     | +3          | Ability Score Improvement              | 4        | 12              | 4 | 3 | 3 | 2 | — | — | — | — | — |
| 9     | +4          | —                                      | 4        | 14              | 4 | 3 | 3 | 3 | 1 | — | — | — | — |
| 10    | +4          | Subclass Feature                       | 5        | 15              | 4 | 3 | 3 | 3 | 2 | — | — | — | — |
| 11    | +4          | —                                      | 5        | 16              | 4 | 3 | 3 | 3 | 2 | 1 | — | — | — |
| 12    | +4          | Ability Score Improvement              | 5        | 16              | 4 | 3 | 3 | 3 | 2 | 1 | — | — | — |
| 13    | +5          | —                                      | 5        | 17              | 4 | 3 | 3 | 3 | 2 | 1 | 1 | — | — |
| 14    | +5          | Subclass Feature                       | 5        | 18              | 4 | 3 | 3 | 3 | 2 | 1 | 1 | — | — |
| 15    | +5          | —                                      | 5        | 19              | 4 | 3 | 3 | 3 | 2 | 1 | 1 | 1 | — |
| 16    | +5          | Ability Score Improvement              | 5        | 21              | 4 | 3 | 3 | 3 | 2 | 1 | 1 | 1 | — |
| 17    | +6          | —                                      | 5        | 22              | 4 | 3 | 3 | 3 | 2 | 1 | 1 | 1 | 1 |
| 18    | +6          | Spell Mastery                          | 5        | 23              | 4 | 3 | 3 | 3 | 3 | 1 | 1 | 1 | 1 |
| 19    | +6          | Ability Score Improvement              | 5        | 24              | 4 | 3 | 3 | 3 | 3 | 2 | 1 | 1 | 1 |
| 20    | +6          | Signature Spells                       | 5        | 25              | 4 | 3 | 3 | 3 | 3 | 2 | 1 | 1 | 1 |

### Prof. Bonus
Your Proficiency Bonus and how much it increases per level

### Class Features
What new features you get per level

### Cantrips
Level 0 spells that only cost an action to cast. Each time this number increases you can pick a new cantrip to learn.

### Prepared Spells
Your spell book can have as many spells as you can collect, however you can only cast spells you prepared for the day, when you finish a long rest pick this number of spells to prepare.`;

export const wizardClassTable: string[] = [wizardClassTableEntries];
