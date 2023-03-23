<template>
  <section class="relative w-full h-[500px] md:h-[700px] bg-cover bg-center bg-no-repeat" :style="`background-image: url(${imageUrl})`">
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    <div class="relative container mx-auto px-4 md:px-20 flex flex-col justify-center items-center h-full text-white">
      <div class="relative flex flex-col items-center text-center z-10">
        <h1 class="text-3xl md:text-5xl font-semibold">Your Hero Title</h1>
        <p class="text-xl md:text-2xl mt-4">Your hero description goes here.</p>
      </div>
      <div class="absolute top-0 left-0 w-full h-full z-0">
        <div class="bg-gradient-to-br animate-diagonal-gradient h-full w-full"></div>
        <div class="overlay-pattern h-full w-full"></div>
      </div>
      <div class="mt-6 flex flex-col space-y-4 z-10">
        <button class="bg-white text-black font-semibold py-2 px-6 rounded-md hover:bg-gray-200">Regular Button</button>
        <button class="border-2 border-white text-white font-semibold py-2 px-6 rounded-md hover:bg-white hover:text-black">Ghost Button</button>
      </div>
    </div>
  </section>
</template>
<style scoped>
@keyframes diagonal-gradient {
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
}

.animate-diagonal-gradient {
  background: linear-gradient(135deg, #6B5B95 25%, #3f87a6 50%, #f69d3c 75%);
  background-size: 200% 200%;
  animation: diagonal-gradient 8s ease infinite;
}

.overlay-pattern::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.2) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.2) 75%,
    transparent 75%,
    transparent
  );
  background-size: 10px 10px;
}
</style>