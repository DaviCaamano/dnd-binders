import { Spell } from '../types/spells';
import {
  CSSProperties,
  ReactNode,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import { formatSpellText } from 'components/utils/formatSpellText';
import { getSchoolColor } from 'components/utils/schoolColors';

const TEXT_ROW_HEIGHT = 20;
interface CardProps {
  iteration: number;
  reportOversizedCard: (offset: number | undefined) => void;
  spell: Spell;
}
export const Card = ({ iteration, reportOversizedCard, spell }: CardProps) => {
  const reported = useRef<boolean>(false);
  const stickyIteration = useRef<number>(iteration);

  const [text, setText] = useState<ReactNode[]>(formatSpellText(spell.text));
  const [textRowHeight, setTextRowHeight] = useState<number | undefined>(
    undefined,
  );

  const textContainerRef = useRef<HTMLDivElement | null>(null);
  const textContentsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // if the iteration has changed, reset the component state
    if (stickyIteration.current !== iteration) {
      reported.current = false;
      stickyIteration.current = iteration;
      setText(formatSpellText(spell.text));
      setTextRowHeight(undefined);
    }
  }, [iteration, spell.text]);

  useEffect(() => {
    // Get the Height of the visible text area and round it down to the
    // nearest multiple of TEXT_ROW_HEIGHT

    if (textContainerRef.current !== null && textRowHeight === undefined) {
      const availableHeight = textContainerRef.current!.offsetHeight;
      const newHeight =
        Math.floor(availableHeight / TEXT_ROW_HEIGHT) * TEXT_ROW_HEIGHT;
      setTextRowHeight(newHeight);
    }
  }, [textRowHeight, textContainerRef.current]);

  useEffect(() => {
    // once the size of the container has been worked out,
    // check if the content is larger than the container
    // and report back to useLargeCards()
    if (
      !reported.current &&
      textRowHeight &&
      textContainerRef.current !== null
    ) {
      const contentHeight = textContainerRef.current!.scrollHeight;

      reportOversizedCard(
        contentHeight > textRowHeight
          ? textRowHeight + (spell.tailCardOffset || 0)
          : undefined,
      );
      reported.current = true;
    }
  }, [textRowHeight, textContainerRef.current, reportOversizedCard, spell.tailCardOffset]);

  return (
    <div className={`card shadow-md bg-wite border rounded-lg p-2`}>
      <div className="flex h-full flex-col">
        <h2 className="spell-name">
          <span>{spell?.name}</span>
          {spell.tailCardOffset && <span className="ml-2">cont.</span>}
        </h2>
        <div className="field-grid">
          <div className="column-left">
            <Row name={'Level'} value={spell?.level} />
            <Row name={'Casting Time'} value={spell?.castingTime} />
            <Row name={'Range'} value={spell?.range} />
          </div>
          <div className="column-right">
            <Row name={'Duration'} value={spell?.duration} />
            <Row
              name={'School'}
              value={spell?.school}
              style={{
                fontWeight: 'bold',
                color: getSchoolColor(spell?.school),
              }}
            />
          </div>
        </div>
        <Row name={'Components'} value={spell?.components} />
        <div
          className="text-field overflow-hidden"
          ref={textContainerRef as RefObject<HTMLDivElement>}
          style={{
            flex: textRowHeight ? 'unset' : 1,
            height: textRowHeight,
          }}
        >
          <div
            className={`text-field-inner`}
            ref={textContentsRef as RefObject<HTMLDivElement>}
            style={{ top: spell.tailCardOffset ? -spell.tailCardOffset : 0 }}
          >
            {text}
          </div>
        </div>
      </div>
    </div>
  );
};

interface TwinRowProps {
  name: string;
  value?: string;
  style?: CSSProperties;
}

const Row = ({ name, value, style }: TwinRowProps) => {
  if (!value) return null;
  return (
    <p className="field">
      <strong>{name}:</strong> <span style={{ ...style }}>{value}</span>
    </p>
  );
};
