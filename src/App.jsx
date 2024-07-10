import React from "react";
import useFetchData from "./hooks/useFecthCharacters";
import PokemonCharacter from "./components/PokemonCharacter";
import RickCharacter from "./components/RickCharacter";

const urlPokemon = "https://pokeapi.co/api/v2/pokemon/34";
const urlRick = "https://rickandmortyapi.com/api/character/1";

const App = () => {
  const {
    data: pokemonData,
    loading: pokemonLoading,
    error: pokemonError,
  } = useFetchData(urlPokemon);
  const {
    data: rickData,
    loading: rickLoading,
    error: rickError,
  } = useFetchData(urlRick);

  if (pokemonLoading || rickLoading) return <div>Loading...</div>;
  if (pokemonError)
    return <div>Error fetching Pokemon data: {pokemonError.message}</div>;
  if (rickError)
    return <div>Error fetching Rick and Morty data: {rickError.message}</div>;

  return (
    <div>
      <PokemonCharacter
        name={pokemonData.name}
        image={pokemonData.sprites.front_default}
      />
      <RickCharacter name={rickData.name} image={rickData.image} />
    </div>
  );
};

export default App;
