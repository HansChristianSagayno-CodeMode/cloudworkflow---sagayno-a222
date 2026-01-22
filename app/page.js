import PokemonCard from "./components/PokemonCard";

async function fetchPokemon(limit = 20
) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
  );

  const list = await res.json();
git status
  const detailedPokemon = await Promise.all(
    list.results.map(async (p) => {
      const res = await fetch(p.url);
      return res.json();
    })
  );

  return detailedPokemon;
}

export default async function Page() {
  const pokemon = await fetchPokemon();

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-red-400">
        Pokémon API Explored
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {pokemon.map((p) => (
          <PokemonCard key={p.id} pokemon={p} />
        ))}
      </div>
    </main>
  );
}
