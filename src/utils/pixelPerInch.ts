"use client";
// height of a <SpellCard> component in inches
const CARD_HEIGHT_IN_INCHES = 5.5;
// The card is reduced by this amount in pixels to allow gaps between cards
const CARD_HEIGH_OFFSET_IN_PIXELS = 8;
// The card background image is this many pixels high
const CARD_BG_HEIGHT_IN_PIXELS = 3000; // 6000px tall background image
// SpellCards all use the same 6000px tall background image.
// To keep the cards looking like they are on a single sheet,
// we need to calculate the offset for each card based on the screen size.
export const randomCardBGOffsetRange = () => {
  // Get the screen width in pixels
  const screenWidthPixels = window.screen.width;

  // Get the screen width in inches
  const screenWidthInches = window.screen.width / window.devicePixelRatio / 96;

  // Calculate PPI (pixels per inch)
  const ppi = screenWidthPixels / screenWidthInches;

  const cardHeightInPixels =
    CARD_HEIGHT_IN_INCHES * ppi - CARD_HEIGH_OFFSET_IN_PIXELS;
  // Calculate the height of the card in pixels
  return [cardHeightInPixels, CARD_BG_HEIGHT_IN_PIXELS - cardHeightInPixels];
};

export const generateRandomSpellCardBackgrounds = (
  cardCount: number,
): [number, number][] => {
  const bgs: [number, number][] = [];
  const [cardHeight, backgroundOffsetRange] = randomCardBGOffsetRange();
  //between 0 and 1 which background index to use
  let lastBgLeft = undefined;
  let lastBgRight = undefined;
  for (let i = 0; i < cardCount; i++) {
    const leftOffset = generateRandomSpellCardBackgroundOffset(
      lastBgLeft,
      backgroundOffsetRange,
      cardHeight,
    );
    lastBgLeft = leftOffset;
    const rightOffset = generateRandomSpellCardBackgroundOffset(
      lastBgRight,
      backgroundOffsetRange,
      cardHeight,
    );
    lastBgRight = rightOffset;
    bgs.push([leftOffset, rightOffset]);
  }
  return bgs;
};

const generateRandomSpellCardBackgroundOffset = (
  lastOffset: number | undefined,
  range: number,
  cardHeight: number,
) => {
  if (lastOffset === undefined) {
    return Math.floor(Math.random() * range);
  }
  while (true) {
    const newOffset = Math.floor(Math.random() * range);
    if (Math.abs(newOffset - lastOffset) > cardHeight) {
      return newOffset;
    }
  }
};
