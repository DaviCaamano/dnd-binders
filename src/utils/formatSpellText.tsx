import { parseMarkup } from 'components/utils/parseMarkup';
import { ReactNode } from 'react';

const atHigherLevels = '***At Higher Levels.***';
const atHigherLevelsAlt = '***Using a Higher-Level Spell Slot.***';
const atHigherLevelsReplacement = '***At Higher Levels:***';
export const formatSpellText = (input: string[]): ReactNode[] => {
  const output: ReactNode[] = [];
  for (const str of input) {
    if (str.startsWith(atHigherLevels) || str.startsWith(atHigherLevelsAlt)) {
      output.push('');
      output.push(
        str
          .replace(atHigherLevels, atHigherLevelsReplacement)
          .replace(atHigherLevelsAlt, atHigherLevelsReplacement),
      );
    } else if (
      str.startsWith('***') &&
      str.replace('***', '').includes('.***')
    ) {
      // turn any bolded titles with a period and turn that period into a colon.
      output.push(str.replace('.***', ':***'));
    } else {
      output.push(str);
    }
  }

  // @ts-expect-error just build damnit
  return output.map((text: string, rowIndex: number) =>
    text === ''
      // @ts-expect-error just build damnit
      ? ((
          <span key={'new-line-' + rowIndex}>
            <br />
            <br />
          </span>
        ) as ReactNode[])
      : parseMarkup(text, rowIndex),
  );
};
