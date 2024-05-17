export interface CurrencyData {
    id: number;
    currency: string;
    rate: string;
    selected: boolean;
}

export interface Pokemon {
    id: string;
    image: string | null;
    number: number;
    name: string;
    type_1: number;
    type_2: number | null;
    total: number;
    hp: number;
    attack: number;
    defense: number;
    sp_atk: number;
    sp_def: number;
    speed: number;
    generation: number;
    legendary: number;
    created_at: string;
    updated_at: string;
}

export interface Links {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
}

export interface Meta {
    per_page: number;
    current_page: number;
    from: number;
    to: number;
    total: number;
    last_page: number;
    path: string;
}

export interface PokemonResponse {
    data: Pokemon[];
    links: Links;
    meta: Meta;
    status: number;
    success: boolean;
}

const attributes = [
    'number',
    'name',
    'type_1',
    'type_2',
    'total',
    'hp',
    'attack',
    'defense',
    'sp_atk',
    'sp_def',
    'speed',
    'generation',
    'legendary',
    'created_at',
    'updated_at'
] as const;

type Attribute = typeof attributes[number];

export type SortParam = `${Attribute}` | `-${Attribute}`;

export type FilterGenerationParam = 1 | 2 | 3 | 4 | 5 | 6;
export type FilterLegendaryParam = 0 | 1;

export interface PokemonQueryParams {
    pageNumber?: number;
    pageSize?: number;
    sort?: SortParam;
    filterName?: string;
    filterGeneration?: FilterGenerationParam;
    filterLegendary?: FilterLegendaryParam;
    filterType?: number;
    filterMinTotal?: number;
    filterMaxTotal?: number;
    filterMinSpeed?: number;
    filterMaxSpeed?: number;
    filterMinSpDef?: number;
    filterMaxSpDef?: number;
    filterMinSpAtk?: number;
    filterMaxSpAtk?: number;
    filterMinHp?: number;
    filterMaxHp?: number;
    filterMinDefense?: number;
    filterMaxDefense?: number;
    filterMinAttack?: number;
    filterMaxAttack?: number;
}

export interface Type {
    id: number;
    name: string;
}

// Define the main response interface
export interface PokemonTypesResponse {
    status: number;
    success: boolean;
    data: Type[];
}

export interface PokemonApiResponse {
    data: Pokemon;
    status: number;
    success: boolean;
}
