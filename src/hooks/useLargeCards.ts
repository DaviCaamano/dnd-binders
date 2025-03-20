import { useRef, useState } from "react";
import { Spell } from "@type/spells";
const { log } = console;
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
    let largeCardsIndexes = Object.keys(reported.current.largeCard)
      .map(Number)
      .sort((a, b) => b - a);
    const newSpells: Spell[] = [...(spells.length ? spells : spellData)];

    // increment all indexes after the inserted card
    const incrementLargeCards = (incrementedIndex: number) => {
      largeCardsIndexes = largeCardsIndexes.map((oldCardIndex) =>
        oldCardIndex > incrementedIndex ? oldCardIndex + 1 : oldCardIndex,
      );

      reported.current.alreadyReported.push(incrementedIndex);
      reported.current.alreadyReported = reported.current.alreadyReported.map(
        (index) => (index > incrementedIndex ? index + 1 : index),
      );

      // bump keys of largeCard up by one if a card at a lower index is inserted
      reported.current.largeCard = Object.fromEntries(
        Object.entries(reported.current.largeCard).map(([index, value]) => [
          parseInt(index) > incrementedIndex ? parseInt(index) + 1 : index,
          value,
        ]),
      );
    };

    let newCardsCreated = 0;
    for (let i = 0; i < largeCardsIndexes.length; i++) {
      const cardIndex = largeCardsIndexes[i];

      if (reported.current.alreadyReported.includes(cardIndex)) {
        continue;
      }
      newCardsCreated++;
      const card = newSpells[cardIndex];
      newSpells.splice(cardIndex + 1, 0, {
        tailCardOffset: reported.current.largeCard[cardIndex],
        name: card.name,
        text: card.text,
      });

      incrementLargeCards(cardIndex);
    }
    reported.current = {
      count: 0,
      largeCard: {},
      alreadyReported: reported.current.alreadyReported,
    };

    if (newCardsCreated === 0) {
      log("Card Duplication Complete:");
      const tripplets = getDuplicates(
        newSpells.map((spell) => spell.name),
        3,
      );
      if (tripplets.length) {
        log("3 Cards:", tripplets);
      }

      const quadruplets = getDuplicates(
        newSpells.map((spell) => spell.name),
        4,
      );
      if (quadruplets.length) {
        log("4 cards:", quadruplets);
      }
      const miniBooks = getDuplicates(
        newSpells.map((spell) => spell.name),
        5,
        true,
      );
      if (miniBooks.length) {
        log("Mini-books:", miniBooks);
      }
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
    if (
      spellData.length &&
      reported.current.count === (spells.length ? spells : spellData).length
    ) {
      generateTailCards();
    }
  };

  return {
    iteration: iteration.current,
    reportOversizedCard,
    spells: spells.length ? spells : spellData,
  };
};

function getDuplicates<T>(arr: T[], targetNumber: number, orMore = false): T[] {
  const elementCount = new Map<T, number>();
  const result: T[] = [];

  for (const item of arr) {
    elementCount.set(item, (elementCount.get(item) || 0) + 1);
  }

  for (const [item, count] of elementCount.entries()) {
    if (
      ((orMore && count >= targetNumber) ||
        (!orMore && count === targetNumber)) &&
      !result.includes(item)
    ) {
      result.push(item);
    }
  }

  return result;
}
