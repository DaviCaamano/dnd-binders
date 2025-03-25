import { fighterPage1 } from './fighter-page-1';
import { fighterPage2 } from './fighter-page-2';

import { Page, PageArtPosition } from '@type/page';
import { barabisBackground } from '@constants/pages/barabis/barabis-background.page';
import { fighterClassTable } from '@constants/pages/barabis/fighter-class-table.page';

const urls = [
  '/img/feature/barabis/1.png',
  '/img/feature/barabis/2.png',
  '/img/feature/barabis/3.png',
  '/img/feature/barabis/4.png',
];

export const barabisPages: Page[] = [
  {
    sections: fighterClassTable,
    compact: false,
  },
  {
    sections: barabisBackground,
    compact: false,
    img: {
      url: urls[0],
      position: PageArtPosition.bottom,
      offset: 65,
    },
  },
  {
    sections: fighterPage1,
    compact: false,
    img: {
      url: urls[2],
      position: PageArtPosition.top,
      offset: 0,
    },
  },
  {
    sections: fighterPage2,
    compact: false,
    img: {
      url: urls[3],
      position: PageArtPosition.bottom,
      offset: 35,
    },
  },
];
