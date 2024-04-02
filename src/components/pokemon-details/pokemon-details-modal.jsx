import React from 'react';

export function PokemonDetailModal({ pokemon, handleKnowMore }) {
  const { name, imageUrl, weight, height, stats, type } = pokemon;
  console.log(pokemon);
  if (!pokemon) {
    return null;
  }
  return (
    <div
      className={`${type}-background`}
      style={{
        position: 'fixed',
        padding: 40,
        backgroundColor: 'white',
        display: 'flex',
        borderRadius: 20,
        gap: 40,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <img className="pokemon-image" src={imageUrl} alt={name} />
        <h3 className="pokemon-name">{name.toUpperCase()}</h3>
      </div>
      <div
        style={{
          display: 'flex',
          gap: 40,
        }}
      >
        <div>
          <h4>Height: {height}</h4>
          <h4>Weight: {weight}</h4>
        </div>
        <div>
          {stats.map((stat, index) => {
            return (
              <h4 key={'stat' + index}>
                Stat{index + 1}: {stat.name}
              </h4>
            );
          })}
        </div>
        <div>
          {stats.map((stat, index) => {
            return (
              <h4 key={'bs' + index}>
                Bs{index + 1}: {stat.bs}
              </h4>
            );
          })}
        </div>
      </div>
      <div
        className={`${type}-background`}
        style={{
          width: 20,
          height: 20,
          borderRadius: '50%',
          top: 20,
          right: 20,
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          cursor: 'pointer',
        }}
        onClick={() => handleKnowMore()}
      >
        x
      </div>
    </div>
  );
}
