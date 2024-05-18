export const sortingOptions = [
  { value: 'number', label: 'Number (Ascending)' },
  { value: '-number', label: 'Number (Descending)' },
  { value: 'name', label: 'Name (Ascending)' },
  { value: '-name', label: 'Name (Descending)' },
  { value: 'type_1', label: 'Type 1 (Ascending)' },
  { value: '-type_1', label: 'Type 1 (Descending)' },
  { value: 'type_2', label: 'Type 2 (Ascending)' },
  { value: '-type_2', label: 'Type 2 (Descending)' },
  { value: 'total', label: 'Total (Ascending)' },
  { value: '-total', label: 'Total (Descending)' },
  { value: 'hp', label: 'HP (Ascending)' },
  { value: '-hp', label: 'HP (Descending)' },
  { value: 'attack', label: 'Attack (Ascending)' },
  { value: '-attack', label: 'Attack (Descending)' },
  { value: 'defense', label: 'Defense (Ascending)' },
  { value: '-defense', label: 'Defense (Descending)' },
  { value: 'sp_atk', label: 'Special Attack (Ascending)' },
  { value: '-sp_atk', label: 'Special Attack (Descending)' },
  { value: 'sp_def', label: 'Special Defense (Ascending)' },
  { value: '-sp_def', label: 'Special Defense (Descending)' },
  { value: 'speed', label: 'Speed (Ascending)' },
  { value: '-speed', label: 'Speed (Descending)' },
  { value: 'generation', label: 'Generation (Ascending)' },
  { value: '-generation', label: 'Generation (Descending)' },
  { value: 'legendary', label: 'Legendary (Ascending)' },
  { value: '-legendary', label: 'Legendary (Descending)' },
  { value: 'created_at', label: 'Created At (Ascending)' },
  { value: '-created_at', label: 'Created At (Descending)' },
  { value: 'updated_at', label: 'Updated At (Ascending)' },
  { value: '-updated_at', label: 'Updated At (Descending)' },
];

export const typeColours: Record<PokemonType, string> = {
  Normal: '#A8A77A',
  Fire: '#EE8130',
  Water: '#6390F0',
  Electric: '#F7D02C',
  Grass: '#7AC74C',
  Ice: '#96D9D6',
  Fighting: '#C22E28',
  Poison: '#A33EA1',
  Ground: '#E2BF65',
  Flying: '#A98FF3',
  Psychic: '#F95587',
  Bug: '#A6B91A',
  Rock: '#B6A136',
  Ghost: '#735797',
  Dragon: '#6F35FC',
  Dark: '#705746',
  Steel: '#B7B7CE',
  Fairy: '#D685AD'
};


export type PokemonType =
  | 'Normal'
  | 'Fire'
  | 'Water'
  | 'Electric'
  | 'Grass'
  | 'Ice'
  | 'Fighting'
  | 'Poison'
  | 'Ground'
  | 'Flying'
  | 'Psychic'
  | 'Bug'
  | 'Rock'
  | 'Ghost'
  | 'Dragon'
  | 'Dark'
  | 'Steel'
  | 'Fairy';