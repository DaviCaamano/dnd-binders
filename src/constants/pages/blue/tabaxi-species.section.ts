import { MarkdownSection } from "@type/markdown-entry";

const tabaxiSpeciesPageEntries = `
### Darkvision
You have a cat's keen senses, especially in the dark. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern colour in darkness, only shades of grey.

### Feline Agility
Your reflexes and agility allow you to move with a burst of speed. When you move on your tum in combat, you can double your speed until the end of the tum. Once you use this trait, you can't use it again until you move 0 feet on one of your turns.

### Cat's Claws
Because of your claws, you have a climbing speed of 20 feet. In addition, your claws are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d6 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.`;

export const tabaxiSpeciesSection: MarkdownSection = {
  title: "Tabaxi Features",
  sections: [tabaxiSpeciesPageEntries],
};

const backgroundFeylostPageEntries = `
### Feywild Connection
Your mannerisms and knowledge of fey customs are recognized by natives of the Feywild, who see you as one of their own. Because of this, friendly Fey creatures are inclined to come to your aid if you are lost or need help in the Feywild.`;

export const backgroundFeylostSection: MarkdownSection = {
  title: "Background: Feylost Features",
  sections: [backgroundFeylostPageEntries],
};
