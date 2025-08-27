import { Page, PageArtPosition } from '@type/page';

import { romynarBackground } from './romynar-background.page';
import { romynarSpecies } from './romynar-species';
import { warlockClassTable } from './warlock-class-table.page';
import { warlockLevel1 } from './warlock-page-1';
import { warlockLevel2 } from './warlock-page-2';
import { warlockInvocations } from './warlock-invocations.page';
import { warlockLevel6 } from '@constants/pages/Romynar/warlock-page-3';

const urls = [
  '/img/feature/romynar/1.png',
  '/img/feature/romynar/2.png',
  '/img/feature/romynar/3.png',
  '/img/feature/romynar/4.png',
  '/img/feature/romynar/5.png',
];

export const romynarPages: Page[] = [
  {
    sections: warlockClassTable,
    compact: true,
  },
  {
    sections: romynarBackground,
    compact: false,
    img: {
      position: PageArtPosition.bottom,
      url: urls[1],
    },
  },
  {
    sections: romynarSpecies,
    compact: false,
    img: {
      position: PageArtPosition.top,
      url: urls[2],
    },
  },
  {
    sections: warlockLevel1,
    compact: false,
    img: {
      position: PageArtPosition.bottom,
      url: urls[0],
    },
  },
  {
    sections: warlockLevel2,
    compact: false,
    img: {
      position: PageArtPosition.top,
      url: urls[3],
    },
  },
  {
    sections: warlockLevel6,
    compact: false,
    img: {
      position: PageArtPosition.bottom,
      url: urls[4],
    },
  },
  ...warlockInvocations.map((section: string[]) => ({
    sections: section,
    compact: false,
  })),
];
