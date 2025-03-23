import { MarkdownEntry, MarkdownPage } from "@type/markdown-entry";

const fighterLevel2Entries: MarkdownEntry = `
# Fighter Features (Level 2)

### Action Surge
You can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action, except the Magic action.

Once you use this feature, you can't do so again until you finish a Short or Long Rest. Starting at level 17, you can use it twice before a rest but only once on a turn.

### Tactical Mind
You have a mind for tactics on and off the battlefield. When you fail an ability check, you can expend a use of your Second Wind to push yourself toward success. Rather than regaining Hit Points, you roll 1d10 and add the number rolled to the ability check, potentially turning it into a success. If the check still fails, this use of Second Wind isn't expended.`;

export const fighterLevel2: MarkdownPage = [fighterLevel2Entries];
