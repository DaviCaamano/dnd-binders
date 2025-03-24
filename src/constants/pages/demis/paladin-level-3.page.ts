
const paladinLevel3Entries = `
# Paladin Features (Level 3)

### Channel Divinity
You can channel divine energy directly from the Outer Planes, using that energy to fuel magical effects. You start with one such effect: Divine Sense, which is described below. Other Paladin features give additional Channel Divinity effect options. Each time you use this Channel Divinity, you choose which effect from this class to create.

You can use this class's Channel Divinity twice. You regain one of its expended uses when you finish a Short Rest and you regain all expended uses when you finish a Long Rest. You gain an additional use when you reach Paladin level 11. If a Channel Divinity effect requires a saving throw, the DC equals the Spell Save DC from this class’s Spellcasting feature.`;

export const paladinSubclassLevel3Entries = `
# Oath of Glory Features (Level 3)
  
### Oath Spells
The magic of your oath ensures you always have certain spells ready; when you reach a Paladin level specified in the Oath of Glory Spells table, you thereafter always have the listed spells prepared.

  | Paladin Level | Spells                                  |
|---------------|-----------------------------------------|
| 3             | Guiding Bolt, Heroism                   |
| 5             | Enhance Ability, Magic Weapon           |
| 9             | Haste, Protection from Energy           |
| 13            | Compulsion, Freedom of Movement         |
| 17            | Legend Lore, Yolande's Regal Presence   |

### Inspiring Smite- 3rd level
Immediately after you cast Divine Smite, you can expend one use of your Channel Divinity and distribute Temporary Hit Points to creatures of your choice within 30 feet of yourself, which can include you. The total number of Temporary Hit Points equals 2d8 + your Paladin level, divided among the chosen creatures however you like.

### Peerless Athlete
As a Bonus Action, you can expend one use of your Channel Divinity to augment your athleticism. For 1 hour, you have Advantage on Strength (Athletics) and Dexterity (Acrobatics) checks and the distance of your Long and High Jumps increases by 10 feet (this extra distance costs movement as normal).`;

export const paladinLevel3: string[] = [
  ...paladinLevel3Entries,
  ...paladinSubclassLevel3Entries,
];
