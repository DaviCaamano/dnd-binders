

const monkSubclassLevel3Entries = `
# Monk Features (Level 3)

### Deflect Attacks
When an attack roll hits you and its damage includes Bludgeoning, Piercing or Slashing damage, you can take a Reaction to reduce the attack's total damage against you. The reduction equals 1d10 + your Dexterity modifier + your Monk level.

If you reduce the damage to 0, you can expend 1 Focus Point to redirect some of the attack’s force. If you do so, choose a creature within 5 feet of you if the attack was a melee attack or a creature you can see within 60 feet of yourself that isn’t behind Total Cover if the attack was a ranged attack. That creature must succeed on a Dexterity saving throw or take damage equal to two rolls of your Martial Arts die + your Dexterity modifier. The damage is the same type dealt by the attack.`;

const monkSubclassEntries = `
# Way of the Ascendant Dragon Features (Level 3)

### Draconic Presence
If you fail a Charisma (Intimidation) or Charisma (Persuasion) check, you can use your reaction to reroll the check, as you tap into the mighty presence of dragons. Once this feature turns a failure into a success, you can’t use it again until you finish a long rest.

### Draconic Strike
When you damage a target with an unarmed strike, you can change the damage type to acid, cold, fire, lightning, or poison.

### Tongue of Dragons
You learn to speak, read, and write Draconic or one other language of your choice.

### Breath of the Dragon
At 3rd level you can channel destructive waves of energy, like those created by the dragons you emulate. When you take the Attack action on your turn, you can replace one of the attacks with an exhalation of draconic energy in either a 20-foot cone or a 30-foot line that is 5 feet wide (your choice). Choose a damage type: acid, cold, fire, lightning, or poison. Each creature in that area must make a Dexterity saving throw against your ki save DC, taking damage of the chosen type equal to two rolls of your Martial Arts die on a failed save, or half as much damage on a successful one.

At 11th level, the damage of this feature increases to three rolls of your Martial Arts die.

You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest. While you have no uses available, you can spend 2 ki points to use this feature again.`;

export const monkLevel3: string[] = [
  monkSubclassLevel3Entries,
  monkSubclassEntries,
];
