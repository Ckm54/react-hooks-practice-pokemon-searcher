import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3001/pokemon`)
    .then((res) => res.json())
    .then((result) => setPokemons(result))
  }, [])

  function searchPokemon(input) {
    const filteredList = pokemons.filter((pokemon) => (pokemon.name).includes(input))
    setPokemons(filteredList)
  }
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search searchPokemon={searchPokemon}/>
      <br />
      <PokemonCollection pokemons={pokemons}/>
    </Container>
  );
}

export default PokemonPage;
