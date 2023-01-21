import { NextPage, GetStaticPaths, GetStaticProps  } from "next"
import { pokeApi } from "../../api"
import { MainLayout } from "../../layouts"
import { Pokemon } from '../../interfaces';
import { Button, Card, Container, Grid, Text } from "@nextui-org/react";
import Image from "next/image";
import { existInfavorites, toggleFavorites } from "../../utils/localFavorites";
import { useState } from "react";
import confetti from 'canvas-confetti';

interface Props {
  pokemon: Pokemon
}

const PokemonDetail: NextPage<Props> = ({ pokemon }) => {

  const [isInFavorites, setIsInFavorites] = useState( existInfavorites(pokemon.id) )

  const onToggleFavorite = () => {
    toggleFavorites( pokemon.id );
    setIsInFavorites(!isInFavorites);

    if( isInFavorites ) return;

    startConfetti();
  }

  const startConfetti = () => {
    var count = 200;
    var defaults = {
      origin: { y: 0.7 }
    };
    
    function fire(particleRatio: any, opts: any) {
      confetti(Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio)
      }));
    }
    
    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }
  


  return (
    <MainLayout title={ pokemon.name }>
      <Grid.Container css={{ marginTop: '5px' }} gap={ 2 }>
        <Grid xs={ 12 } sm={ 4 }>
          <Card isHoverable css={{ padding: '30px' }}>
            <Card.Image 
              src={ pokemon.sprites.other?.dream_world.front_default || '/no-image.png' } 
              alt={ pokemon.name }
              width="100%"
              height={ 200 }
            />
          </Card>
        </Grid>

        <Grid xs={ 12 } sm={ 8 }>
          <Card isHoverable css={{ padding: '30px' }}>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }} >
              <Text transform="capitalize" h1>{ pokemon.name }</Text>
              <Button 
                color='gradient'
                onClick={onToggleFavorite}
              >
                {
                  !isInFavorites ? 'Guardar en favoritos' : 'En favoritos'
                }
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container direction="row" display="flex" justify="space-around">
                <Image 
                  src={ pokemon.sprites.front_default }
                  alt={ pokemon.name }
                  width={ 120 }  
                  height={ 120 }
                />
                <Image 
                  src={ pokemon.sprites.back_default }
                  alt={ pokemon.name }
                  width={ 100 }  
                  height={ 100 }
                />
                <Image 
                  src={ pokemon.sprites.front_shiny }
                  alt={ pokemon.name }
                  width={ 100 }  
                  height={ 100 }
                />
                <Image 
                  src={ pokemon.sprites.back_shiny }
                  alt={ pokemon.name }
                  width={ 100 }  
                  height={ 100 }
                />
              </Container>

            </Card.Body>
          </Card>
        </Grid>

      </Grid.Container>

    </MainLayout>
  )
}


export const getStaticProps: GetStaticProps = async ({params}) => {
  const { id } = params as { id: string }
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${ id }`)
  
  return {
    props: {
      pokemon: data
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
