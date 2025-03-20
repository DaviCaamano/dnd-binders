const levelRegex = /level\s+(\d+)/i;

const spellSchools = [
  'Abjuration',
  'Conjuration',
  'Divination',
  'Enchantment',
  'Evocation',
  'Illusion',
  'Necromancy',
  'Transmutation',
];

export const getLevelAndSchool = (levelAndSchool: string | undefined) => {
  if (!levelAndSchool) return [undefined, undefined];
  const school = spellSchools.find((school) => levelAndSchool.includes(school));
  if (levelAndSchool.includes('Cantrip')) {
    return ['Cantrip', school];
  }
  return [levelRegex.exec(levelAndSchool)?.[1], school];
};

// Turn tables that look like "##### Table Name" into "***Table Name***"
export const replaceTableHeaders = (input: string): string => {
  return input.replace(/#####\s+(.*)/g, '***$1***');
};
