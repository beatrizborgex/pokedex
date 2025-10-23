export async function getPokemons(limit = 50) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
  const data = await res.json()

  const pokemons = await Promise.all(
    data.results.map(async (p) => {
      const details = await fetch(p.url).then((res) => res.json())

      const image =
        details.sprites?.other?.['official-artwork']?.front_default ||
        details.sprites?.front_default

      return {
        name: details.name,
        image
      }
    })
  )

  return pokemons
}
