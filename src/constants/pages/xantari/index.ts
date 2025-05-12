import { Page, PageArtPosition } from '@type/page';
import { rogueClassTable } from './rogue-class-table.page';
import { xantariBackground } from './xantari-background.page';
import { rogueLevel1 } from './rogue-page-1';
import { rogueLevel2 } from './rogue-page-2';
import { rogueLevel4 } from '@constants/pages/xantari/rogue-page-3';
import { rogueLevel5 } from '@constants/pages/xantari/rogue-page-4';

const urls = [
  '/img/feature/xantari/1.png',
  '/img/feature/xantari/2.png',
  '/img/feature/xantari/3.png',
  '/img/feature/xantari/4.png',
  '/img/feature/xantari/5.png',
];

export const xantarirPages: Page[] = [
  {
    sections: rogueClassTable,
    compact: false,
  },
  {
    sections: xantariBackground,
    compact: false,
    img: {
      position: PageArtPosition.bottom,
      url: urls[0],
    },
  },
  {
    sections: rogueLevel1,
    compact: false,
    img: {
      position: PageArtPosition.top,
      url: urls[2],
    },
  },
  {
    sections: rogueLevel2,
    compact: false,
    img: {
      position: PageArtPosition.bottom,
      url: urls[3],
    },
  },
  {
    sections: rogueLevel4,
    compact: false,
    img: {
      position: PageArtPosition.top,
      url: urls[1],
    },
  },
  {
    sections: rogueLevel5,
    compact: false,
    img: {
      position: PageArtPosition.bottom,
      url: urls[4],
    },
  },
];
