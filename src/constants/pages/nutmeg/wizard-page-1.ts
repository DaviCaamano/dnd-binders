

const wizardClassFeatureEntries = `
# Wizard Features (Level 1)

### Ritual Adept
You can cast any spell as a Ritual if that spell has the Ritual tag and the spell is in your spellbook. You needn’t have the spell prepared, but you must read from the book to cast a spell in this way.

### Arcane Recovery
You can regain some of your magical energy by studying your spellbook. When you finish a Short Rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your Wizard level (rounded up), and none of the slots can be level 6 or higher. For example, if you’re a level 4 Wizard, you can recover up to two levels worth of spell slots, regaining either a level 2 spell slot or two level 1 spell slots. Once you use this feature, you can’t do so again until you finish a Long Rest.`;

const wizardLevel2SubclassEntries = `
# School of Chronurgy Features (Level 2)

### Chronal Shift
At 2nd level, you can magically exert limited control over the flow of time around a creature. As a reaction, after you or a creature you can see within 30 feet of you makes an attack roll, an ability check, or a saving throw, you can force the creature to reroll. You make this decision after you see whether the roll succeeds or fails. The target must use the result of the second roll.

You can use this ability twice, and you regain any expended uses when you finish a long rest.

### Temporal Awareness
Starting at 2nd level, you can add your Intelligence modifiers to your initiative rolls.`;

export const wizardLevel1: string[] = [wizardClassFeatureEntries, wizardLevel2SubclassEntries];
