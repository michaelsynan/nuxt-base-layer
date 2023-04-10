<template>
  <div class="flex flex-col md:flex-row max-w-4xl my-20 bg-tertiary relative">
    <div class="md:w-1/2">
      <img class="h-auto object-cover rounded" :src="imageSrc" :alt="imageAlt" />
    </div>
    <div class="md:w-1/2 md:pl-8 pt-8 md:pt-0 flex flex-col justify-center">
      <h2 class="text-4xl text-white font-semibold pb-2">{{ header }}</h2>
      <p class="text-gray-100 text-2xl font-bold pb-4">{{ body }}</p>
      <baseBtn>Read More</baseBtn>
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
