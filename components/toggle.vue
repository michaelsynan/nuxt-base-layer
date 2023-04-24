<script lang="ts" setup></script>

<template>
    <div class="relative inline-block w-10 align-middle select-none transition duration-200 ease-in mb-4">
  <label for="toggle" class="block mb-2 text-sm text-stone-400">Toggle Shades:</label>
  <input
    type="checkbox"
    @change="toggleShades"
    name="toggle"
    id="toggle"
    class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer transition-transform duration-200 ease-in-out"
  />
  <label
    for="toggle"
    class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer transition-colors duration-200 ease-in-out"
  ></label>
</div>

</template>

<style scoped>
.toggle-checkbox:checked {
  @apply transform translate-x-full border-green-500;
}
.toggle-checkbox:checked + .toggle-label {
  @apply bg-green-500;
}

</style>
