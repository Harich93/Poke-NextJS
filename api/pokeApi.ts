import axios from "axios";

const pokeApi = axios.create({
    headers: { 'accept-encoding': '*' },
    baseURL: 'https://pokeapi.co/api/v2'
});

export default pokeApi