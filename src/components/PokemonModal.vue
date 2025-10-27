<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div class="bg-white rounded-xl p-6 w-96 shadow-lg relative">
      <button
        @click="$emit('close')"
        class="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-2xl"
      >
        ×
      </button>

      <div v-if="pokemon" class="text-center">
        <img
          :src="pokemon.image || fallbackImage"
          :alt="pokemon.name"
          class="w-32 h-32 mx-auto mb-3 object-contain"
          @error="handleImageError"
        />

        <h2 class="text-2xl font-bold capitalize mb-2">{{ pokemon.name }}</h2>

        <div class="mt-3">
          <p><span class="font-semibold">Altura:</span> {{ pokemon.height / 10 }} m</p>
          <p><span class="font-semibold">Peso:</span> {{ pokemon.weight / 10 }} kg</p>
          <p><span class="font-semibold">Tipos:</span> {{ pokemon.types.join(', ') }}</p>
          <p><span class="font-semibold">Habilidades:</span> {{ pokemon.abilities.join(', ') }}</p>
        </div>

        <div class="mt-4">
          <h3 class="font-semibold mb-1">Atributos:</h3>
          <ul class="text-sm space-y-1">
            <li v-for="stat in pokemon.stats" :key="stat.name">
              {{ stat.name }}: {{ stat.value }}
            </li>
          </ul>
        </div>
      </div>

      <div v-else class="text-center text-gray-500">Carregando...</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getPokemonDetails } from '../services/pokeapi.js'

const props = defineProps(['pokemonName'])
const pokemon = ref(null)
const fallbackImage = '/fallback.png' 

function handleImageError(event) {
  event.target.src = fallbackImage
}

onMounted(async () => {
  pokemon.value = await getPokemonDetails(props.pokemonName)
})
</script>
