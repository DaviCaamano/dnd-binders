"use client";

import { useGetSpellData } from "@hooks/useGetSpellData";
import { useLargeCards } from "@hooks/useLargeCards";
import { SpellCard } from "@components/SpellCard";
import {Spell} from '@type/spells';
import {Routes} from '@type/routes';

export default function Home() {
  const spellData: Spell[] = useGetSpellData(Routes.wizard);
  const { iteration, reportOversizedCard, spells } = useLargeCards(spellData);

  const report = (index: number) => {
    return (offset: number | undefined) => {
      reportOversizedCard(index, offset);
    };
  };

  if (!spells) return <div>Loading...</div>;
  return (
    <div className="grid-container">
      {spells?.map((spell: Spell, index: number) => (
        <SpellCard
          key={index}
          iteration={iteration}
          spell={spell}
          reportOversizedCard={report(index)}
        />
      ))}
    </div>
  );
}
