export interface PokemonResponse {
    count:    number;
    next?:     string;
    previous?: string | null;
    results:  SmallPokemon[];
}

export interface SmallPokemon {
    id: number
    img: string
    name: string;
    url:  string;
}
