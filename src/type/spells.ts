export type Spell = {
  tailCardOffset?: number;
  size: SpellSize;
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
  text: string;
};

export enum SpellSize {
  compact = 'compact',
  normal = 'normal',
  'large' = 'large',
}
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
