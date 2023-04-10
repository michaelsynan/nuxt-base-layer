<template>
  <section class="relative w-full h-[500px] md:h-[700px] bg-cover bg-center bg-no-repeat" :style="`background-image: url(${imageUrl})`">
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    <div class="absolute top-0 left-0 w-full h-full z-0"></div>
    <div class="relative container mx-auto px-4 md:px-20 flex flex-col justify-center h-full text-white">
      <h1 class="text-3xl md:text-5xl font-semibold text-left">Your Hero Title</h1>
      <p class="text-xl md:text-2xl mt-4 text-left">Your hero description goes here. Make it count.</p>
      <div class="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <button class="bg-white text-black font-semibold py-2 px-6 rounded-md hover:bg-gray-200">Regular Button</button>
        <button class="border-2 border-white text-white font-semibold py-2 px-6 rounded-md hover:bg-white hover:text-black">Ghost Button</button>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted } from 'vue';

export default {
  setup() {
    const imageUrl = ref('');

    onMounted(() => {
      fetchImage();
    });

    function fetchImage() {
      const width = window.innerWidth >= 768 ? 1200 : 600;
      const height = window.innerWidth >= 768 ? 700 : 500;
      imageUrl.value = `https://loremflickr.com/${width}/${height}/nature`;
    }

    return {
      imageUrl,
      fetchImage,
    }
  },
}
</script>

<style scoped>

</style>
