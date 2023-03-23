<template>
  <section class="relative w-full h-[500px] md:h-[700px] bg-cover bg-center bg-no-repeat" :style="`background-image: url(${imageUrl})`">
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    <div class="relative container mx-auto px-4 md:px-20 flex flex-col justify-center items-center h-full text-white">
      <div class="relative flex flex-col items-center text-center z-10">
        <h1 class="text-3xl md:text-5xl font-semibold">Your Hero Title</h1>
        <p class="text-xl md:text-2xl mt-4">Your hero description goes here.</p>
      </div>
      <div class="absolute top-0 left-0 w-full h-full z-0">
        <div class="bg-gradient-to-r animate-x-gradient h-full w-full"></div>
      </div>
      <div class="mt-6 flex flex-col space-y-4 z-10">
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

<style scoped>
@keyframes x-gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-x-gradient {
  background: linear-gradient(270deg, #3f87a6, #ebf8e1, #f69d3c);
  background-size: 200% 200%;
  animation: x-gradient 6s ease infinite;
}
</style>
