export enum PageArtPosition {
  top = 'top',
  bottom = 'bottom',
}

export interface PageImage {
  position?: PageArtPosition;
  url: string;
  offset?: number;
}

export interface Page {
  sections: string[];
  compact?: boolean;
  img?: PageImage;
}
