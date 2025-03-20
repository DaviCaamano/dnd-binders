export type Spell = {
  tailCardOffset?: number;
  castingTime?: string;
  components?: string;
  duration?: string;
  level?: string;
  optionalVariantClasses?: string;
  name: string;
  page?: string;
  range?: string;
  school?: string;
  source?: string;
  text: string[];
};

export enum SpellKeys {
  'Casting Time' = 'castingTime',
  'Range' = 'range',
  'Components' = 'components',
  'Duration' = 'duration',
  'Level' = 'level',
  'Name' = 'name',
  'School' = 'school',
  'Text' = 'text',
}
