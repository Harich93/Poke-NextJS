import { Grid, Card } from '@nextui-org/react';
import { FC } from 'react';
import { useRouter } from 'next/router';

interface Props {
    pokeId: number
}

export const PokemonCardFavorites: FC<Props> = ({ pokeId }) => {

    const router = useRouter();

    return (
        <Grid xs={6} sm={3} md={2} xl={1} key={pokeId}>
            <Card isHoverable isPressable 
            onClick={ () => router.push(`/pokemon/${ pokeId }`) } 
            css={{ padding: 10 }}
            >
            <Card.Image 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeId}.svg`} 
                width={'100%'}
                height={140}
            />
            </Card>

        </Grid>
    )
}
