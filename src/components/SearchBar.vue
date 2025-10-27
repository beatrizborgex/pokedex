<template>
  <input
    class="border border-black rounded-md px-4 py-2 w-64 text-base mb-6 focus:outline-none focus:ring-2 focus:ring-red-700"
    type="text"
    placeholder="Buscar..."
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>
