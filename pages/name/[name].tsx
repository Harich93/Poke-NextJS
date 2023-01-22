import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { Pokemon, PokemonResponse } from "../../interfaces";
import { getPokemonInfo } from "../../utils";
import { pokeApi } from '../../api';
import { PokemonCardDetails } from '../../components/pokemon';

interface Props {
  pokemon: Pokemon
}

const PokemonByName: NextPage<Props> = ({ pokemon }) => {
  return (
    <PokemonCardDetails pokemon={ pokemon } />
  )
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const { name } = params as { name: string }
  
  return {
    props: {
      pokemon: await getPokemonInfo(name)
    }
  }
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const { data } = await pokeApi.get<PokemonResponse>(`/pokemon?limit=151`);
    console.log(data);
    const pokemonsName: string[] = data.results.map( pok => pok.name );

    return {
        paths: pokemonsName.map( name => ({ params: { name } })),
        fallback: false
    }
}



export default PokemonByName;
