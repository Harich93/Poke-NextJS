import { NextPage, GetStaticProps } from "next"
import { Button, Card, Grid, Row, Text } from '@nextui-org/react'
import { MainLayout } from "../layouts"
import { pokeApi } from "../api";
import { PokemonResponse, SmallPokemon  } from "../interfaces";
import Image from "next/image";
import { PokemonCard } from "../components/pokemon/PokemonCard";

interface Props {
  pokemons: SmallPokemon[]
}

const Home: NextPage<Props> = ({ pokemons }) => {

  return (
    <MainLayout title="Nuevo titulo">
      <Grid.Container gap={2} justify='flex-start'>
        {
          pokemons.map( p=> 
            <PokemonCard pokemon={ p }></PokemonCard>
          )
        }
      </Grid.Container>
    </MainLayout>
  )
}




export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonResponse>('/pokemon?limit=151');

  let pokemons: SmallPokemon[] = data.results.map( (pok, idx) => ({
    ...pok,
    id : idx + 1,
    img : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${idx + 1}.svg`
  }));

  return {
    props: {
      pokemons
    }
  }
}

export default Home
