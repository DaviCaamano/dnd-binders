const BACKGROUND_URL = '/img/feature-backgrounds/BG';
const BACKGROUND_EXT = '.png';

export const getFeatureBackground = (backgroundCount: number | undefined) => {
  return getRandomNumbers(backgroundCount || 0).map(
    (index) =>
      BACKGROUND_URL + (index < 10 ? '0' : '') + index + BACKGROUND_EXT,
  );
};

function getRandomNumbers(n: number): number[] {
  const numbers = Array.from({ length: 20 }, (_, i) => i + 1);
  const result = [];

  for (let i = 0; i < n; i++) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    result.push(numbers[randomIndex]);
  }

  return result;
}
