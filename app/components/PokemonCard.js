export default function PokemonCard({ pokemon }) {
  return (
    <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow">
      
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="w-full h-48 object-contain"
      />

      <h2 className="text-xl font-bold capitalize mt-2">
        {pokemon.name}
      </h2>

      <p className="text-gray-600">
        #{pokemon.id}
      </p>

      <div className="mt-2">
        {pokemon.types.map((t) => (
          <span
            key={t.type.name}
            className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm mr-2 capitalize"
          >
            {t.type.name}
          </span>
        ))}
      </div>

    </div>
  );
}
