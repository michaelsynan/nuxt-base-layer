<template>
  <div class="flex flex-col md:flex-row max-w-4xl mx-auto my-20 bg-stone-800 p-10 rounded-lg">
    <div class="md:w-1/2">
      <img class="w-full h-auto object-cover" :src="imageSrc" :alt="imageAlt" />
    </div>
    <div class="md:w-1/2 md:pl-8 pt-8 md:pt-0">
      <h2 class="text-2xl font-semibold mb-4">{{ header }}</h2>
      <p class="text-gray-700">{{ body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: String,
    imageAlt: String,
    header: String,
    body: String
  }
};
</script>

<style scoped>
/* add any custom styles here */
</style>
