<template>
  <nav id="navbar" :class="['w-full', 'text-white', 'py-4', 'px-4', 'md:px-20', bgColorClass]">
    <div class="container mx-auto flex flex-wrap justify-between items-center">
      <div class="w-1/2 md:w-auto text-left mb-4 md:mb-0 text-sm">LOGO</div>
      <div class="hidden md:flex text-center md:text-left mb-4 md:mb-0 space-x-4">
        <nuxt-link to="#" class="hover:bg-gray-800 p-2">Home</nuxt-link>
        <nuxt-link to="#" class="hover:bg-gray-800 p-2">Services</nuxt-link>
        <nuxt-link to="#" class="hover:bg-gray-800 p-2">Pricing</nuxt-link>
        <nuxt-link to="#" class="hover:bg-gray-800 p-2">Contact</nuxt-link>
      </div>
      <div class="w-1/2 md:w-auto text-right md:text-left">
        <button class="md:hidden text-white text-2xl focus:outline-none" @click="toggleMenu()">
          <i-mdi-github style="color: white"
          class="text-xl md:text-2xl  inline">
            
            
            
            {{ isMenuOpen ? 'close' : 'menu' }}</i-mdi-github>
      
        </button>
      </div>
    </div>
    <div class="md:hidden" :class="{ 'hidden': !isMenuOpen, 'block': isMenuOpen }">
      <div class="flex flex-col text-center divide-y divide-gray-800">
        <nuxt-link to="#" class="py-2">Home</nuxt-link>
        <nuxt-link to="#" class="py-2">Services</nuxt-link>
        <nuxt-link to="#" class="py-2">Pricing</nuxt-link>
        <nuxt-link to="#" class="py-2">Contact</nuxt-link>
      </div>
    </div>
  </nav>
</template>


<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  props: {
    bgColor: {
      type: String,
      default: 'bg-black bg-opacity-30',
    },
  },
  computed: {
    bgColorClass() {
      return this.bgColor;
    },
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>