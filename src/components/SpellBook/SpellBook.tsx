'use client';
import styles from '../../styles/SpellBook.module.scss';
import { SpellData, useGetSpellData } from '@hooks/useGetSpellData';
import { useLargeCards } from '@hooks/useLargeCards';
import { SpellCard } from '@components/SpellBook/SpellCard';
import { Routes } from '@type/routes';
import dynamic from 'next/dynamic';

const CARDS_PER_PAGE = 4;
type SpellCardsWithNumbers = [SpellData, [number, number] | undefined];
type SpellPage = [
  SpellCardsWithNumbers,
  SpellCardsWithNumbers,
  SpellCardsWithNumbers,
  SpellCardsWithNumbers,
];
interface SpellBookProps {
  route: Routes;
}
const SpellBook_component = ({ route }: SpellBookProps) => {
  const spellData: SpellData[] = useGetSpellData(route);
  const { iteration, reportOversizedCard, spells } = useLargeCards(spellData);

  const report = (index: number) => {
    return (offset: number | undefined) => {
      reportOversizedCard(index, offset);
    };
  };

  if (!spells) return <div>Loading...</div>;
  return (
    <div className={styles.spellBook}>
      {getSpellPages(spells)?.map((spellPage: SpellPage, pageIndex: number) => {
        return (
          <div className={styles.spellPageFrame} key={pageIndex}>
            <div className={styles.spellPage}>
              {spellPage.map(([spell, cardNo], index) => {
                const cardIndex = pageIndex * CARDS_PER_PAGE + index;
                return (
                  <SpellCard
                    key={cardIndex}
                    iteration={iteration}
                    spellData={spell}
                    reportOversizedCard={report(cardIndex)}
                    cardNo={cardNo}
                    omitCounter={route === Routes.extra}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

// get the number for each card that represents which card of a series it is.
// ie: Wish has 3 cards, so the first wish card would be 1,
// the card holding the tail text would be 2,
// and the final card holding the end of the tail text would be 3
const getSpellPages = (spells: SpellData[]): SpellPage[] => {
  const spellNames = spells
    .map((spell) => {
      return spell.spell.name;
    })
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

  const spellList: SpellCardsWithNumbers[] = spells.map((spellData) => {
    const { spell } = spellData;
    const count: number | undefined = spellsWithDuplicates[spell.name]?.count;
    if (!count) {
      return [spellData, undefined];
    }
    const used: number | undefined =
      spellsWithDuplicates[spell.name]?.used ?? undefined;
    if (used !== undefined) spellsWithDuplicates[spell.name].used++;
    return [spellData, typeof used === 'number' ? [used, count] : undefined];
  });

  return breakIntoPages(spellList);
};

// Breaks the array of spell cards into groups of 4 (1 page)
const breakIntoPages = (spellList: SpellCardsWithNumbers[]): SpellPage[] => {
  const result: SpellPage[] = [];
  for (let i = 0; i < spellList.length; i += 4) {
    result.push([...spellList.slice(i, i + 4)] as SpellPage);
  }
  return result;
};

export const SpellBook = dynamic(() => Promise.resolve(SpellBook_component), {
  ssr: false,
});
