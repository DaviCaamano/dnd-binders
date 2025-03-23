import { MarkdownSection } from "@type/markdown-entry";

const paladinLevel1Entries = `
### Lay on Hands - 1st level
Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you finish a Long Rest. With that pool, you can restore a total number of Hit Points equal to five times your Paladin level. As a Bonus Action, you can touch a creature (which could be yourself) and draw power from the pool of healing to restore a number of Hit Points to that creature, up to the maximum amount remaining in the pool. In addition, you can expend 5 Hit Points from the pool of healing power to remove the Poisoned condition from the creature; those points don't also restore Hit Points to the creature.

### Weapon Mastery - 1st level
Your training with weapons allows you to use the Mastery property of two kinds of weapons of your choice with which you have proficiency, such as Longswords and Javelins. Whenever you finish a Long Rest, you can change the kinds of weapons you chose.

### Fighting Style: Great Weapon Fighting - 2nd level
When you roll damage for an attack you make with a Melee weapon that you are holding with two hands, you can treat any 1 or 2 on a damage die as a 3. The weapon must have the Two-Handed or Versatile property to gain this benefit.

### Paladin’s Smite - 2nd level
You always have the Divine Smite spell prepared. In addition, you can cast it from this feature once without expending a spell slot, and you must finish a Long Rest before you can cast it this way again.

### Channel Divinity - 3rd level
You can channel divine energy directly from the Outer Planes, using that energy to fuel magical effects. You start with one such effect: Divine Sense, which is described below. Other Paladin features give additional Channel Divinity effect options. Each time you use this Channel Divinity, you choose which effect from this class to create.

You can use this class's Channel Divinity twice. You regain one of its expended uses when you finish a Short Rest and you regain all expended uses when you finish a Long Rest. You gain an additional use when you reach Paladin level 11. If a Channel Divinity effect requires a saving throw, the DC equals the Spell Save DC from this class’s Spellcasting feature.`;

export const paladinLevel1Section: MarkdownSection = {
  title: "Paladin Features (Level 1)",
  sections: [paladinLevel1Entries],
};
