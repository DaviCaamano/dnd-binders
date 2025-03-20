export const schoolColors = {
  abjuration: "#2e2e72",
  conjuration: "#731e73",
  divination: "#5d5731",
  enchantment: "#2e5954",
  evocation: "#601414",
  illusion: "#4B0082",
  necromancy: "#000000",
  transmutation: "#044804",
};

export const getSchoolColor = (school?: string) => {
  if (!school) return undefined;
  return schoolColors[school.toLowerCase() as keyof typeof schoolColors];
};
