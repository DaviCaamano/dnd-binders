const warlockLevel1Entries = `
# Warlock Features (Level 1)

### Eldritch Invocations (See Eldritch Invocation Options Sheets)
You have unearthed Eldritch Invocations, pieces of forbidden knowledge that imbue you with an abiding magical ability or other lessons. You gain one invocation of your choice, such as Pact of the Tome. Invocations are described in the "Eldritch Invocation Options" section later in this class's description.

Prerequisites. If an invocation has a prerequisite, you must meet it to learn that invocation. For example, if an invocation requires you to be a level 5+ Warlock, you can select the invocation once you reach Warlock level 5.

Replacing and Gaining Invocations. Whenever you gain a Warlock level, you can replace one of your invocations with another one for which you qualify. You can't replace an invocation if it's a prerequisite for another invocation that you have.

When you gain certain Warlock levels, you gain more invocations of your choice, as shown in the Invocations column of the Warlock Features table.

You can't pick the same invocation more than once unless its description says otherwise.
`;

const warlockLevel2Entries = `
# Warlock Features (Level 2)

### Magical Cunning
You can perform an esoteric rite for 1 minute. At the end of it, you regain expended Pact Magic spell slots but no more than a number equal to half your maximum (round up). Once you use this feature, you can't do so again until you finish a Long Rest.
`;

export const warlockLevel1: string[] = [
  warlockLevel1Entries,
  warlockLevel2Entries,
];
