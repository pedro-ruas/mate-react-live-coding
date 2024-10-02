import { useEffect, useState } from "react";
import "./App.css";
import { PokeView } from "./components/poke-view.component";

interface Pokemons {
  name: string;
  url: string;
}

function App() {
  const [pokemon, setPokemon] = useState(undefined);
  const [pokemons, setPokemons] = useState<Pokemons[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  const handlePokemon = (data: string) => {
    setIsLoading(true)
    fetch(data)
      .then((r) => r.json())
      .then((data) => setPokemon(data))
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false)
        }, 1000)
      })
  };

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then((r) => r.json())
      .then((data) => {
        setPokemons(data.results);
        handlePokemon(data.results[0].url);
      })
  }, []);

  const handleIndex = (next: boolean = true) => {
    setIndex((i) =>
      next ? Math.min(pokemons.length, i + 1) : Math.max(0, i - 1)
    );

    handlePokemon(pokemons[index + 1].url);
  };

  if (!pokemon || !pokemons.length) {
    return <span>Loading ...</span>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        width: "300px",
      }}
    >
      {isLoading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img width={300} height={300} src="https://i.gifer.com/origin/28/2860d2d8c3a1e402e0fc8913cd92cd7a_w200.gif" />
        </div>
      ) : (
        <PokeView pokemon={pokemon} index={index} />
      )}
      <div style={{ display: "flex", gap: 16, alignItems: "center", justifyContent: "space-between" }}>
        <button onClick={() => handleIndex(false)}> {"<"} </button>
        <span>{pokemons[index].name}</span>
        <button onClick={() => handleIndex()}> {">"} </button>
      </div>
    </div>
  );
}

export default App;
