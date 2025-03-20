"use client";

import { Spell } from "@types/spells";
import { useGetSpellData } from "@hooks/useGetSpellData";
import { Routes } from "@types/routes";
import { useLargeCards } from "@hooks/useLargeCards";
import {Card} from '@components/Card';

export default function Home() {
  const spellData: Spell[] = useGetSpellData(Routes.paladin);
  const { iteration, reportOversizedCard, spells } = useLargeCards(spellData);

  const report = (index: number) => {
    return (offset: number | undefined) => {
      reportOversizedCard(index, offset);
    };
  };

  if (!spells) return <div>Loading...</div>;
  return (
    <div className="grid-container">
      {spells?.map((spell, index) => (
        <Card
          key={index}
          iteration={iteration}
          spell={spell}
          reportOversizedCard={report(index)}
        />
      ))}
    </div>
  );
}
