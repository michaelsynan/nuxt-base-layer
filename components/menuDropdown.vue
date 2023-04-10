<template>
  <div class="relative block">
    <button @click="toggleDropdown" class="text-black flex items-center">
      Link
      <span class="ml-1">
        <i-mdi-chevron-down :class="isOpen ? 'rotate-180' : 'rotate-0'" class="fas fa-chevron-down" />
      </span>
    </button>
    <div
      v-show="isOpen"
      class="absolute left-0 mt-2 border-none shadow-none z-10"
      @click.away="closeDropdown"
    >
      <ul class="py-0">
        <li v-for="(item, index) in items" :key="index" class="cursor-pointer bg-white">
          <a
            @click="selectItem(item)"
            class="block px-4 py-2 hover:bg-gray-200"
            href="#"
          >
            {{ item }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      items: ['Item 1', 'Item 2', 'Item 3'],
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    closeDropdown() {
      this.isOpen = false;
    },
    selectItem(item) {
      this.isOpen = false;
      console.log('Selected item:', item);
      // Do something with the selected item
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}

li {
  padding-left: 0;
  margin-left: 0;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: transform 0.3s ease-in-out;
}
.rotate-0 {
  transform: rotate(0deg);
  transition: transform 0.3s ease-in-out;
}
</style>
