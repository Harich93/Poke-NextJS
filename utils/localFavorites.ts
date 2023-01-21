
const toggleFavorites = ( id: number ) => {
    
    let favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]' );

    favorites.includes( id )
        ? favorites = favorites.filter( pokeId => pokeId !== id)
        : favorites.push( id )

    localStorage.setItem( 'favorites', JSON.stringify(favorites) );
}


const existInfavorites = ( id: number ): boolean => {
    if( typeof window === 'undefined' ) return false;
    const favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]' );
    return favorites.includes( id );
}

const getFavorites = () => JSON.parse(localStorage.getItem('favorites') || '[]');


export {
    toggleFavorites,
    existInfavorites,
    getFavorites
}