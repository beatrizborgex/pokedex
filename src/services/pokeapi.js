export async function getPokemons(limit = 30) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
  const data = await res.json()

  return data.results.map((p, index) => ({
    name: p.name,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
  }))
}
