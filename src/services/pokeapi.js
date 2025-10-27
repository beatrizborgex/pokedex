export async function getPokemons(limit = 50) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
  const data = await response.json()

  // Mapeia cada Pokémon com imagem
  const pokemons = await Promise.all(
    data.results.map(async (p) => {
      const res = await fetch(p.url)
      const details = await res.json()
      return {
        name: p.name,
        image: details.sprites.other['official-artwork'].front_default
      }
    })
  )

  return pokemons
}

export async function getPokemonDetails(name) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    if (!res.ok) throw new Error('Erro ao buscar detalhes do Pokémon')
    const data = await res.json()

    return {
      id: data.id,
      name: data.name,
      image: data.sprites.other['official-artwork'].front_default,
      height: data.height,
      weight: data.weight,
      types: data.types.map(t => t.type.name),
      abilities: data.abilities.map(a => a.ability.name),
      stats: data.stats.map(s => ({
        name: s.stat.name,
        value: s.base_stat
      }))
    }
  } catch (error) {
    console.error(error)
    return null
  }
}
