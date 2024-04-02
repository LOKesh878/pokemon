import { transformPokemonDetails } from './transformers.jsx';

export async function fetchPokemons(offset, limit) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    );
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (err) {
    console.log(err);
  }
}

export async function fetchPokemonDetails(url) {
  try {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    return transformPokemonDetails(jsonResponse);
  } catch (err) {
    console.log(err);
  }
}
