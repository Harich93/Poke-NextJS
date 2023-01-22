import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { Pokemon } from "../../interfaces";
import { getPokemonInfo} from "../../utils";
import { PokemonCardDetails } from '../../components/pokemon';

interface Props {
  pokemon: Pokemon
}

const PokemonDetail: NextPage<Props> = ({ pokemon }) => {
  return (
    <PokemonCardDetails pokemon={ pokemon } />
  )
}


export const getStaticProps: GetStaticProps = async ({params}) => {
  const { id } = params as { id: string }
  
  return {
    props: {
      pokemon: await getPokemonInfo(id)
    }
  }
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const idsPokemon = [...Array(151)].map( ( val,idx ) => `${ idx + 1 }` ) 

  return {
    paths: idsPokemon.map( id => ({ params: { id } })),
    fallback: false
  }
}

export default PokemonDetail;
