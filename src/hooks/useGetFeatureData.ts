import { useEffect, useState } from 'react';
import { Player } from '@type/player';
import { Page } from '@type/page';
import { getFeatureBackground } from '@utils/getFeatureBackground';

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
          const backgrounds = getFeatureBackground(pages.length);
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
