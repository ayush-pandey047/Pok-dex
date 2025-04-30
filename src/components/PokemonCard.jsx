import React from "react";

const PokemonCard = ({ pokemon }) => {
    return (
        <div className="card">
            <img 
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="pokemon-img"
            />
            <h2  className="pokemon-name">{pokemon.name}</h2>
            <p className="pokemon-id">#{pokemon.id}</p>
            <div className="types">
                {pokemon.types.map((typeInfo) => (
                    <span key={typeInfo.type.name} className={`type ${typeInfo.type.name}`}>
                        {typeInfo.type.name}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default PokemonCard;