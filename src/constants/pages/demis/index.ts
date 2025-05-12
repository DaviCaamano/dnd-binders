import { Page, PageArtPosition } from '@type/page';
import { paladinClassTable } from '@constants/pages/demis/paladin-class-table.page';
import { demisBackground } from '@constants/pages/demis/demis-background.page';
import { paladinLevel1 } from '@constants/pages/demis/paladin-page-1';
import { paladinLevel2 } from '@constants/pages/demis/paladin-page-2';
import { paladinLevel3 } from '@constants/pages/demis/paladin-page-3';
import { paladinLevel4 } from '@constants/pages/demis/paladin-page-4';

const urls = [
  '/img/feature/demis/1.png',
  '/img/feature/demis/2.png',
  '/img/feature/demis/3.png',
  '/img/feature/demis/4.png',
  '/img/feature/demis/5.png',
];

export const demisePages: Page[] = [
  {
    sections: paladinClassTable,
    compact: false,
  },
  {
    sections: demisBackground,
    compact: false,
    img: {
      position: PageArtPosition.bottom,
      url: urls[3],
    },
  },
  {
    sections: paladinLevel1,
    compact: true,
    img: {
      position: PageArtPosition.top,
      url: urls[0],
      offset: 180,
    },
  },
  {
    sections: paladinLevel2,
    compact: false,
    img: {
      position: PageArtPosition.bottom,
      url: urls[2],
      offset: 0,
    },
  },
  {
    sections: paladinLevel3,
    compact: false,
    img: {
      position: PageArtPosition.top,
      url: urls[1],
      offset: 0,
    },
  },
  {
    sections: paladinLevel4,
    compact: false,
    img: {
      position: PageArtPosition.bottom,
      url: urls[4],
      offset: 0,
    },
  },
];
