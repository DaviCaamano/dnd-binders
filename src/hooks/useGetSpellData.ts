import { useEffect, useState } from 'react';
import { Routes } from '@type/routes';
import { Spell } from '@type/spells';
import { getFeatureBackground } from '@utils/getFeatureBackground';

export interface SpellData {
  spell: Spell;
  background: string;
}
export const useGetSpellData = (route: Routes) => {
  const [spellData, setSpellData] = useState<SpellData[]>([]);

  useEffect(() => {
    fetch(`/api/spellbook/${route}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const spells = data.spells;
        const backgrounds = getFeatureBackground(spells.length);
        let backgroundIndex = 0;
        setSpellData(
          spells.map((spell: string[]) => ({
            spell,
            background: backgrounds[backgroundIndex++],
          })),
        );
        return;
      })
      .catch((error) => console.error('Error fetching the JSON data:', error));
  }, [route]);

  return spellData;
};
