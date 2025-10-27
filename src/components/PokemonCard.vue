<template>
  <div
    @click="$emit('select', pokemon.name)"
    class="cursor-pointer bg-white border border-gray-200 rounded-xl shadow-md p-4 w-36 text-center
           transform transition hover:scale-110 hover:bg-red-700 hover:text-white"
  >
    <img
      :src="pokemon.image || fallbackImage"
      :alt="pokemon.name"
      class="w-20 h-20 mx-auto rounded-md object-contain"
      @error="handleImageError"
    />
    <h3 class="mt-2 text-sm font-semibold capitalize">
      {{ pokemon.name }}
    </h3>
    <p class="text-gray-500 text-xs">#{{ pokemon.id }}</p>
  </div>
</template>

<script setup>
const { pokemon } = defineProps(['pokemon'])
defineEmits(['select'])

const fallbackImage = '/fallback.png'
function handleImageError(e) {
  e.target.src = fallbackImage
}
</script>
