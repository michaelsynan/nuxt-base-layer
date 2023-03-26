<template>

  <div class="animate-slide flex flex-col md:flex-row max-w-4xl mx-auto my-20 p-4 rounded-lg bg-gradient-primary relative">
    <div class="md:w-1/2">
      <img class="h-auto object-cover rounded" :src="imageSrc" :alt="imageAlt" />
    </div>
    <div class="md:w-1/2 md:pl-8 pt-8 md:pt-0">
      <h2 class="text-4xl font-semibold mb-4">{{ header }}</h2>
      <p class="text-gray-300 text-2xl font-bold">{{ body }}</p>
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

</style>
