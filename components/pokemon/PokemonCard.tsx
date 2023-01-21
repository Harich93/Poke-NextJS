import { Card, Grid, Row, Text } from "@nextui-org/react"
import { FC } from "react"
import { SmallPokemon } from '../../interfaces/pokemonResponse';
import { useRouter } from 'next/router';

interface Props {
    pokemon: SmallPokemon
}

export const PokemonCard: FC<Props> = ({pokemon}) => {

    const router = useRouter();

    const onClick = () => {
        router.push(`/pokemon/${ pokemon.id }`)
    } 


    return (
        <Grid key={pokemon.id} xs={6} sm={4} md={3} xl={2}>
            <Card 
                isHoverable 
                isPressable
                onClick={ onClick }
            >
            <Card.Body css={{ p: 1 }}>
                <Card.Image 
                    src={ pokemon.img }
                    alt={ `icono ${pokemon.name}` }
                    width='100%'
                    height={ 140 }
                />
            </Card.Body>
            <Card.Footer>
                <Row justify="space-between">
                <Text transform="capitalize">{ pokemon.name }</Text>
                <Text>#{ pokemon.id }</Text>
                </Row>
            </Card.Footer>
            </Card>
        </Grid>
    )
}
