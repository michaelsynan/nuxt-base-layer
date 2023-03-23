<template>
  <section class="relative w-full h-[500px] md:h-[700px] bg-cover bg-center bg-no-repeat" :style="`background-image: url(${imageUrl})`">
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    <div class="relative container mx-auto px-4 md:px-20 flex flex-col md:flex-row justify-center items-center h-full text-white max-w-4xl">
      <div class="md:w-1/2">
        <h1 class="text-3xl md:text-5xl font-semibold">Your Hero Title</h1>
        <p class="text-xl md:text-2xl mt-4">Your hero description goes here.</p>
      </div>
      <div class="mt-6 md:mt-0 md:w-1/2 flex flex-col space-y-4 md:space-y-0 md:items-end">
        <button class="bg-white text-black font-semibold py-2 px-6 rounded-md hover:bg-gray-200">Regular Button</button>
        <button class="border-2 border-white text-white font-semibold py-2 px-6 rounded-md hover:bg-white hover:text-black">Ghost Button</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: '',
    }
  },
  mounted() {
    this.fetchImage();
  },
  methods: {
    fetchImage() {
      const width = window.innerWidth >= 768 ? 1200 : 600;
      const height = window.innerWidth >= 768 ? 700 : 500;
      this.imageUrl = `https://loremflickr.com/${width}/${height}/nature`;
    },
  },
}
</script>
