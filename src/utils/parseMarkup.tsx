// Convert a string with markdown-like syntax to JSX
import { JSX, ReactNode } from 'react';

export const parseMarkup = (input: string, rowIndex: number): ReactNode => {
  const parts = input.split(/(\*\*\*|\*\*)/);
  const elements: JSX.Element[] = [];
  let isBold = false;
  let isItalic = false;

  parts.forEach((part, index) => {
    if (part === '***') {
      isBold = !isBold;
    } else if (part === '**') {
      isItalic = !isItalic;
    } else {
      if (isBold) {
        elements.push(
          <strong className="leading-5" key={`strong-${index}`}>
            {part}
          </strong>,
        );
      } else if (isItalic) {
        elements.push(
          <em className="leading-5 font-semibold" key={`em-${index}`}>
            {part}
          </em>,
        );
      } else {
        elements.push(
          <span key={`span-${index}`} className="leading-5">
            {part}
          </span>,
        );
      }
    }
  });

  return <span key={'part-container-' + rowIndex}>{elements}</span>;
};
