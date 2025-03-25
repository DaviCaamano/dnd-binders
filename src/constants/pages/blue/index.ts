import { Page, PageArtPosition } from '@type/page';
import { monkClassTable } from './monk-class-table.page';
import { blueBackground } from './blue-background.page';
import { monkPage1 } from './monk-page-1';
import { monkPage2 } from './monk-page-2';
import { monkPage3 } from './monk-page-3';

const urls = [
  '/img/feature/blue/1.png',
  '/img/feature/blue/2.png',
  '/img/feature/blue/3.png',
  '/img/feature/blue/4.png',
];

export const bluePages: Page[] = [
  {
    sections: monkClassTable,
    compact: false,
  },
  {
    sections: blueBackground,
    compact: true,
    img: {
      position: PageArtPosition.top,
      url: urls[3],
      offset: 135,
    },
  },
  {
    sections: monkPage1,
    compact: true,
    img: {
      position: PageArtPosition.bottom,
      url: urls[0],
      offset: 50,
    },
  },
  {
    sections: monkPage2,
    compact: false,
    img: {
      position: PageArtPosition.bottom,
      url: urls[2],
      offset: 0,
    },
  },
  {
    sections: monkPage3,
    compact: true,
    img: {
      position: PageArtPosition.top,
      url: urls[1],
      offset: 0,
    },
  },
];
