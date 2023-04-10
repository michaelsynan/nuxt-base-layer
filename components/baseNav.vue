<template>
  <nav id="navbar" :class="['w-full', 'text-white', 'py-2', 'px-4', 'md:px-20', bgColorClass]">
    <div class="container mx-auto flex flex-wrap justify-between items-center">
      <div class="h-full md:w-auto text-left text-sm items-center">
        <img v-if="logoImage" :src="logoImage" :alt="logoText" class="h-8 md:h-12">
        <span v-else>{{ logoText }}</span>
      </div>
      <div class="hidden md:flex text-center md:text-left space-x-4">
        <nuxt-link
          v-for="link in links"
          :key="link.text"
          :to="link.to"
          class="nav-link p-2"
        >
          {{ link.text }}
        </nuxt-link>
      </div>
      <div class="md:w-auto text-right md:text-left flex justify-end items-center">
        <button class="md:hidden text-white text-2xl focus:outline-none h-full" @click="toggleMenu()">
          <div class="flex items-center">
            <span v-if="isMenuOpen">
              <i-mdi-close style="color: white" class="text-xl md:text-2xl inline"></i-mdi-close>
            </span>
            <span v-else>
              <i-mdi-menu style="color: white" class="text-xl md:text-2xl inline"></i-mdi-menu>
            </span>
          </div>
        </button>
      </div>
    </div>
    <div class="md:hidden" :class="{ 'hidden': !isMenuOpen, 'block': isMenuOpen }">
      <div class="flex flex-col text-center">
        <nuxt-link
          v-for="link in links"
          :key="link.text"
          :to="link.to"
          class="nav-link py-2"
        >
          {{ link.text }}
        </nuxt-link>
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
    color: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'tertiary'].includes(value),
    },
    links: {
      type: Array,
      default: () => [
        { text: 'Home', to: '#' },
        { text: 'Services', to: '#' },
        { text: 'Pricing', to: '#' },
        { text: 'Contact', to: '#' },
      ],
    },
    logoText: {
      type: String,
      default: 'LOGO',
    },
    logoImage: {
      type: String,
      default: '',
    },
  },
  computed: {
    bgColorClass() {
      return `bg-${this.color}`;
    },
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>

</style>
