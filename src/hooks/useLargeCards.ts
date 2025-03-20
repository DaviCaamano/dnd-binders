import { useRef, useState } from 'react';
import {Spell} from '@type/spells';

interface OversizedCard {
  count: number;
  largeCard: Record<number, number>;
  alreadyReported: number[];
}
export const useLargeCards = (spellData: Spell[]) => {
  const iteration = useRef<number>(0);
  const reported = useRef<OversizedCard>({
    count: 0,
    largeCard: {},
    alreadyReported: [],
  });
  const [spells, setSpells] = useState<Spell[]>([]);

  const generateTailCards = () => {
    console.log('Large Card Report Completed');
    // ALl Cards have reported in.

    const oldSpells: Spell[] = [...(spells.length ? spells : spellData)];
    const newSpells: Spell[] = [...(spells.length ? spells : spellData)];
    const largeCardsIndexes = Object.keys(reported.current.largeCard)
      .map(Number)
      .sort((a, b) => b - a);

    let newCardsCreated = 0;
    for (const cardIndex of largeCardsIndexes) {
      if (reported.current.alreadyReported.includes(cardIndex)) {
        continue;
      }
      newCardsCreated++;
      const card = oldSpells[cardIndex];
      newSpells.splice(cardIndex + 1, 0, {
        tailCardOffset: reported.current.largeCard[cardIndex],
        name: card.name,
        text: card.text,
      });
      reported.current.alreadyReported.push(cardIndex);
      reported.current.alreadyReported = reported.current.alreadyReported.map(
        (index) => (index > cardIndex ? index + 1 : index),
      );
    }
    reported.current = {
      count: 0,
      largeCard: {},
      alreadyReported: reported.current.alreadyReported,
    };
    if (newCardsCreated === 0) {
      console.log(
        'No new cards created',
        getElementsThreeTimes(newSpells.map((spell) => spell.name)),
      );
    } else {
      iteration.current += 1;
      setSpells(newSpells);
    }
  };

  const reportOversizedCard = (index: number, offset: number | undefined) => {
    if (offset) {
      reported.current.largeCard[index] = offset;
    }
    reported.current.count += 1;
    if (spellData.length && reported.current.count === (spells.length ? spells : spellData).length) {
      generateTailCards();
    }
  };

  return {
    iteration: iteration.current,
    reportOversizedCard,
    spells: spells.length ? spells : spellData,
  };
};

function getElementsThreeTimes<T>(arr: T[]): T[] {
  const elementCount = new Map<T, number>();
  const result: T[] = [];

  for (const item of arr) {
    elementCount.set(item, (elementCount.get(item) || 0) + 1);
  }

  for (const [item, count] of elementCount.entries()) {
    if (count === 3) {
      result.push(item);
    }
  }

  return result;
}
