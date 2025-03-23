"use client";
import styles from "../../styles/SpellBook.module.scss";
import { useGetSpellData } from "@hooks/useGetSpellData";
import { useLargeCards } from "@hooks/useLargeCards";
import { SpellCard } from "@components/SpellBook/SpellCard";
import { Spell } from "@type/spells";
import { Routes } from "@type/routes";
import { generateRandomSpellCardBackgrounds } from "@utils/pixelPerInch";
import { useEffect, useRef, useState } from "react";
import isEqual from "lodash/isEqual";

type SpellCardNumbers = [
  Spell,
  [number, number] | undefined,
  [number, number],
][];
interface SpellBookProps {
  route: Routes;
}
export const SpellBook = ({ route }: SpellBookProps) => {
  const spellData: Spell[] = useGetSpellData(route);
  const { iteration, reportOversizedCard, spells } = useLargeCards(spellData);
  const [spellCardData, setSpellCardData] = useState<SpellCardNumbers>([]);

  const stickySpells = useRef<Spell[]>(spellData);
  useEffect(() => {
    const currentSpells = spellData ?? spells;
    if (!isEqual(currentSpells, stickySpells.current)) {
      stickySpells.current = currentSpells;
      const newSpellCardData = getSpellCardNumbers(currentSpells);
      setSpellCardData(newSpellCardData);
    }
  }, [spellData, spells]);

  const report = (index: number) => {
    return (offset: number | undefined) => {
      reportOversizedCard(index, offset);
    };
  };

  if (!spellCardData) return <div>Loading...</div>;
  return (
    <div className={styles.gridContainer}>
      {spellCardData?.map(([spell, cardNo, background], index) => (
        <SpellCard
          key={index}
          iteration={iteration}
          spell={spell}
          reportOversizedCard={report(index)}
          cardNo={cardNo}
          backgroundOffsets={background}
          omitCounter={route === Routes.extra}
        />
      ))}
    </div>
  );
};

// get the number for each card that represents which card of a series it is.
// ie: Wish has 3 cards, so the first wish card would be 1,
// the card holding the tail text would be 2,
// and the final card holding the end of the tail text would be 3
const getSpellCardNumbers = (
  spells: Spell[],
): [Spell, [number, number] | undefined, [number, number]][] => {
  const spellNames = spells
    .map((spell) => spell.name)
    .reduce(
      (acc, name) => {
        acc[name] = (acc[name] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );

  const spellsWithDuplicates: {
    [name: string]: { count: number; used: number };
  } = Object.fromEntries(
    Object.entries(spellNames).map(([name, count]) => [
      name,
      { count, used: 0 },
    ]),
  );

  const newSpells = spells.map((spell) => {
    const count: number | undefined = spellsWithDuplicates[spell.name]?.count;
    if (!count) {
      return [spell, undefined];
    }
    const used: number | undefined =
      spellsWithDuplicates[spell.name]?.used ?? undefined;
    if (used !== undefined) spellsWithDuplicates[spell.name].used++;
    return [spell, typeof used === "number" ? [used, count] : undefined];
  });
  const cardBgs = generateRandomSpellCardBackgrounds(spells.length);
  return newSpells.map(([spell, cardNo], index) => [
    spell,
    cardNo,
    cardBgs[index],
  ]);
};
