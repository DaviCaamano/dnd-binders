import { useEffect, useState } from 'react';
import { Player } from '@type/player';
import { Page } from '@type/page';

export interface FeaturePage {
  page: Page;
  background: string;
}
export const useGetFeatureData = (player: Player): FeaturePage[] => {
  const [pages, setFeatureData] = useState<FeaturePage[]>([]);

  useEffect(() => {
    fetch(`/api/feature/${player}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const pages = data.features;
        if (pages) {
          const backgrounds = getPageBackgrounds(pages);
          let backgroundIndex = 0;
          setFeatureData(
            pages.map((page: string[]) => ({
              page,
              background: backgrounds[backgroundIndex++],
            })),
          );
        }
      })
      .catch((error) => console.error('Error fetching the JSON data:', error));
  }, [player]);

  return pages;
};

const BACKGROUND_URL = '/img/feature-backgrounds/BG';
const BACKGROUND_EXT = '.png';
const getPageBackgrounds = (pages: string[][]) => {
  return getRandomNumbers(pages.length || 0).map(
    (i) => BACKGROUND_URL + i + BACKGROUND_EXT,
  );
};

function getRandomNumbers(n: number): number[] {
  const numbers = Array.from({ length: 19 }, (_, i) => i + 1);
  const result = [];

  for (let i = 0; i < n; i++) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    result.push(numbers[randomIndex]);
    numbers.splice(randomIndex, 1);
  }

  return result;
}
