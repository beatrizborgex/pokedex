<template>
  <input
    class="search-input"
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

<style>
.search-input {
  padding: 0.6rem 1rem;
  border-radius: 6px;
  border: 1px solid #000000;
  width: 250px;
  font-size: 1rem;
  margin-bottom: 1.5rem;
}
.search-input:focus{
  outline-color: #CC0000;
}
</style>
