import React, { useState, useEffect } from 'react';
import { fetchPokemonDetails } from '../../apis';
import { Button } from '../';

export function PokemonCard({ pokemonUrl, handleKnowMore }) {
  const [pokemon, setPokemon] = useState();
  useEffect(() => {
    fetchPokemonDetails(pokemonUrl).then((pokemon) => {
      setPokemon(pokemon);
    });
  }, []);
  if (!pokemon) {
    return null;
  }
  const { id, type, imageUrl, name } = pokemon;

  return (
    <div className={`pokemon-card-container ${type}-background`}>
      <div className="pokemon-id-container">
        <small>#{id}</small>
      </div>
      <img className="pokemon-image" src={imageUrl} alt={name} />
      <h3 className="pokemon-name">{name.toUpperCase()}</h3>
      <small>Type: {type}</small>
      {/* <KnowMoreButton /> */}
      <Button
        handleClick={() => handleKnowMore(pokemon)}
        title="Know More"
        styles={{}}
      />
    </div>
  );
}
