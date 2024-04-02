import React, { useState, useEffect } from 'react';
import { fetchPokemons } from '../../apis';
import { PokemonCard } from './pokemon-card.jsx';
import { PokemonDetailModal } from '../';

export function PokemonCards() {
  const [offset, setOffset] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState();
  const handleKnowMore = (pokemon) => {
    setSelectedPokemon(pokemon);
  };
  useEffect(() => {
    fetchPokemons(offset, 20).then((data) => {
      setPokemons((prevPokemons) => {
        return prevPokemons.concat(data.results);
      });
    });
  }, [offset]);
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 15,
          justifyContent: 'center',
          marginTop: 180
        }}
      >
        {pokemons.map((pokemon, index) => {
          return (
            <PokemonCard
              key={pokemon.name + index}
              pokemonUrl={pokemon.url}
              handleKnowMore={handleKnowMore}
            />
          );
        })}
        {selectedPokemon && (
          <PokemonDetailModal
            pokemon={selectedPokemon}
            handleKnowMore={handleKnowMore}
          />
        )}
      </div>
      <button
        onClick={() => {
          setOffset((prev) => prev + 20);
        }}
      >
        Show More
      </button>
    </div>
  );
}
