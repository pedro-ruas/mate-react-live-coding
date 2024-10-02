interface Pokemon {
  pokemon: {
    sprites: {
      front_default: string
    },
    types: string[]
  }
  index: number;
}

export function PokeView({ pokemon, index }: Pokemon) {
  const pok = pokemon.types.map((item: any) => item.type.name);
  let color = "";
  let type = "";

  switch (pok[0]) {
    case "grass":
      color = "green";
      type = "Grama";
      break;
    case "fire":
      color = "orange";
      type = "Fogo";
      break;
    case "water":
      color = "blue";
      type = "Água";
      break;
    case "bug":
      color = "brown";
      type = "Bug";
      break;
    case "normal":
      color = "yellow";
      type = "Normal";
      break;
    case "poison":
      color = "red";
      type = "Tóxico";
      break;
    case "electric":
      color = "gray";
      type = "Elétrico";
      break;
    case "ground":
      color = "purple";
      type = "Chão";
      break;
    case "fairy":
      color = "pink";
      type = "Fada";
      break;
    case "fighting":
      color = "#cd7562";
      type = "Combate";
      break;
    case "psychic":
      color = "#74c444";
      type = "Psíquico";
      break;
    case "ghost":
      color = "#44c4ba";
      type = "Fantasma";
      break;
    case "rock":
      color = "#c7f2ef";
      type = "Pedra";
      break;
  }

  return (
    <div
      style={{
        backgroundColor: color,
        borderRadius: 10,
      }}
    >
      <div
        style={{
          backgroundImage: `url(${pokemon.sprites.front_default})`,
          height: 300,
          width: 300,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginInline: "10px",
          }}
        >
          <p>#{index}</p>

          <p>{type}</p>
        </div>
      </div>
    </div>
  );
}
