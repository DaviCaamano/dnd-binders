import { CSSProperties, RefObject, useEffect, useRef, useState } from "react";
import { Spell } from "@type/spells";
import { getSchoolColor } from "@utils/schoolColors";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import rehypeRaw from "rehype-raw";
import { SpellCardBackground } from "@components/SpellBook/SpellCardBackground";

const TEXT_ROW_HEIGHT = 12;
interface CardProps {
  cardNo: [number, number] | undefined;
  iteration: number;
  reportOversizedCard: (offset: number | undefined) => void;
  spell: Spell;
  backgroundOffsets: [number, number];
}
export const SpellCard = ({
  cardNo,
  iteration,
  reportOversizedCard,
  spell,
  backgroundOffsets,
}: CardProps) => {
  const cardNumber = cardNo?.[0];
  const totalCards = cardNo?.[1];
  const reported = useRef<boolean>(false);
  const stickyIteration = useRef<number>(iteration);
  const stickyText = useRef<string>(spell.text);

  const [text, setText] = useState<string>(spell.text);
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
      setText(spell.text);
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
  }, [iteration, spell.name, textRowHeight]);

  useEffect(() => {
    if (stickyText.current !== spell.text) {
      stickyText.current = spell.text;
      setText(spell.text);
    }
    // once the size of the container has been worked out,
    // check if the content is larger than the container
    // and report back to useLargeCards()
    else if (
      !reported.current &&
      textRowHeight &&
      textContainerRef.current !== null
    ) {
      const contentHeight = textContentsRef.current!.scrollHeight;

      // Hard far down the content is visible from the top of the content area.
      const containerReach = (spell.tailCardOffset || 0) + textRowHeight;

      // containerReach increased by TEXT_ROW_HEIGHT due to extra empty line added to end of markdown
      reportOversizedCard(
        contentHeight > containerReach + TEXT_ROW_HEIGHT
          ? containerReach
          : undefined,
      );
      reported.current = true;
    }
  }, [
    textRowHeight,
    reportOversizedCard,
    spell.tailCardOffset,
    spell.name,
    text,
    iteration,
    spell,
  ]);
  return (
    <div className={`card bg-wite border rounded-lg p-2 overflow-hidden`}>
      <SpellCardBackground offSets={backgroundOffsets} />
      {/* Spell Name and Card Number */}
      <div className="flex h-full flex-col">
        <h2 className="spell-name">
          <span>{spell?.name}</span>
          <CardNumber cardNumber={cardNumber} totalCards={totalCards} />
        </h2>
        <div className="field-grid">
          <div className="column-left">
            <Row name={"Level"} value={spell?.level} />
            <Row name={"Casting Time"} value={spell?.castingTime} />
            <Row name={"Range"} value={spell?.range} />
          </div>
          <div className="column-right">
            <Row name={"Duration"} value={spell?.duration} />
            <Row
              name={"School"}
              value={spell?.school}
              style={{
                fontWeight: "bold",
                color: getSchoolColor(spell?.school),
              }}
            />
          </div>
        </div>
        <Row name={"Components"} value={spell?.components} />
        <div
          className="text-field overflow-hidden"
          ref={textContainerRef as RefObject<HTMLDivElement>}
          style={{
            flex: textRowHeight ? "unset" : 1,
            height: textRowHeight,
          }}
        >
          <div
            className={`text-field-inner`}
            ref={textContentsRef as RefObject<HTMLDivElement>}
            style={{ top: spell.tailCardOffset ? -spell.tailCardOffset : 0 }}
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm, remarkBreaks]}
              rehypePlugins={[rehypeRaw]}
              components={{
                p: ({ children, ...props }) => {
                  return (
                    <p {...props} style={{ marginBottom: "1em" }}>
                      {children}
                    </p>
                  );
                },
                table: ({ ...props }) => (
                  <table {...props} className="markdown-table" />
                ),
                th: ({ ...props }) => <th {...props} className="markdown-th" />,
                td: ({ ...props }) => <td {...props} className="markdown-td" />,
              }}
            >
              {/* add empty lines after paragraphs
              (but not after table as it breaks the table */}
              {formatDamageDice(text).replace(/(?<!\|.*)\n(?!.*\|)/g, "\n\n")}
            </ReactMarkdown>
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

interface CardNumberProps {
  cardNumber: number | undefined;
  totalCards: number | undefined;
}
const CardNumber = ({ cardNumber, totalCards }: CardNumberProps) =>
  typeof totalCards === "number" &&
  typeof cardNumber === "number" &&
  totalCards > 1 ? (
    <span className="ml-2">
      <span className="cardNumberParenthese">(</span>{" "}
      <span className="cardNo">{cardNumber + 1}</span>{" "}
      <span className="cardNumberParenthese">)</span>
    </span>
  ) : null;

const formatDamageDice = (text: string) => {
  return text.replace(
    /\d+d\d+/g,
    (match) => `<span className="damageDice">${match}</span>`,
  );
};
