import { Page, PageArtPosition } from '@type/page';
import { wizardClassTable } from './wizard-class-table.page';
import { nutmegBackground } from './nutmeg-background';
import { nutmegSpecies } from './nutmeg-species';
import { wizardLevel1 } from './wizard-page-1';
import { wizardLevel2 } from '@constants/pages/nutmeg/wizard-page-2';

const urls = [
  '/img/feature/nutmeg/1.png',
  '/img/feature/nutmeg/2.png',
  '/img/feature/nutmeg/3.png',
  '/img/feature/nutmeg/4.png',
];

export const nutmegPages: Page[] = [
  {
    sections: wizardClassTable,
    compact: false,
  },
  {
    sections: nutmegSpecies,
    compact: false,
    img: {
      position: PageArtPosition.top,
      url: urls[3],
    },
  },
  {
    sections: nutmegBackground,
    compact: false,
    img: {
      position: PageArtPosition.bottom,
      url: urls[1],
    },
  },
  {
    sections: wizardLevel1,
    compact: true,
    img: {
      position: PageArtPosition.top,
      url: urls[0],
    },
  },
  {
    sections: wizardLevel2,
    compact: true,
    img: {
      position: PageArtPosition.top,
      url: urls[2],
    },
  },
];
