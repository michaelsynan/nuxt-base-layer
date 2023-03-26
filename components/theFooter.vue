<template>
  <footer :class="`w-full text-secondary py-4 px-4 md:px-20 mt-auto ${bgColor}`">
    <div class="container mx-auto flex flex-wrap justify-between items-center">
      <div class="w-full md:w-auto text-center md:text-left mb-4 md:mb-0 text-sm">FOOTER BRANDING</div>
      <div class="w-full md:w-auto text-center md:text-left mb-4 md:mb-0"><nuxt-link to="#">About</nuxt-link></div>
      <div class="w-full md:w-auto text-center md:text-left mb-4 md:mb-0"><nuxt-link to="#">Privacy</nuxt-link></div>
      <div class="w-full md:w-auto text-center md:text-left">
        <i-material-symbols-keyboard-double-arrow-right-rounded style="color: white" class="text-xl md:text-2xl inline" />
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    bgColor: {
      type: String,
      default: 'bg-green',
    },
  },
};
</script>

<style scoped></style>
