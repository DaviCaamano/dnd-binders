import { MarkdownSection } from "@type/markdown-entry";

const monkSubclassLevel2Entries = `
### Patient Defense - 2nd level
You can take the Disengage Action as a Bonus Action. Alternatively, you can spend 1 Focus Point to take both the Disengage and the Dodge actions as a Bonus Action.

### Step of the Wind - 2nd level
You can take the Dash action as a Bonus Action. Alternatively, you can spend 1 Focus Point to take both the Disengage and Dash actions as a Bonus Action, and your jump distance is doubled for the turn.

### Uncanny Metabolism - 2nd level
When you roll Initiative, you can regain all expended Focus Points. When you do so, roll your Martial Arts die, and regain a number of Hit Points equal to your Monk level + the number rolled. Once you use this feature, you can’t use it again until you finish a Long Rest`;

export const monkClassLevel2Section: MarkdownSection = {
  title: "Monk Features (Level 2)",
  sections: [monkSubclassLevel2Entries],
};
