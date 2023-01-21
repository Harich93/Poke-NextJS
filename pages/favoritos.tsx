import { useEffect, useState } from "react";
import { MainLayout } from "../layouts"
import { getFavorites } from "../utils/localFavorites";
import { Grid } from '@nextui-org/react';
import { PokemonCardFavorites } from '../components/pokemon/index';

const favoritos = () => {

  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    setFavorites(getFavorites)
  }, [])


  return (
    <MainLayout title="Pokemons - Favoritos">
      {
        favorites.length === 0
          ? 'No tienes favoritos'
          : (
            <Grid.Container gap={2} direction='row' justify="flex-start">
              {
                favorites.map( id => (
                    <PokemonCardFavorites pokeId={id}/>
                ))
              }
            </Grid.Container>
          )
      }
    </MainLayout>
  )
}

export default favoritos;
