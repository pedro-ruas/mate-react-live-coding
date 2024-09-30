import { useEffect, useState } from "react";
import "./App.css";
import { PokeView } from "./components/poke-view.component";

function App() {
  const [pokemon, setPokemon] = useState(undefined);
  const [pokemons, setPokemons] = useState([]);
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((r) => r.json())
      .then((data) => setPokemon(data));

    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then((r) => r.json())
      .then((data) => setPokemons(data.results));
  }, []);

  const handleIndex = (next: boolean = true) => {
    setIndex((i) =>
      next ? Math.min(pokemons.length, i + 1) : Math.max(0, i - 1)
    );
  };

  if (!pokemon || !pokemons.length) {
    return <span>Loading ...</span>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <PokeView pokemon={pokemon} />
      <div style={{ display: "flex", gap: 16 }}>
        <button onClick={() => handleIndex(false)}> {"<"} </button>
        <span>{pokemons[index].name}</span>
        <button onClick={() => handleIndex()}> {">"} </button>
      </div>
    </div>
  );
}

export default App;
