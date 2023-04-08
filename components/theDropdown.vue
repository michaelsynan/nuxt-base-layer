<template>
  <div class="relative inline-block">
    <button @click="toggleDropdown" class="bg-blue-500 text-white flex items-center px-4 py-2 rounded">
      Dropdown
      <span class="ml-2">
        <i-mdi-arrow-up v-if="!isOpen" class="fas fa-chevron-down" />
        <i-mdi-arrow-down v-else class="fas fa-chevron-up" />
      </span>
    </button>
    <div
      v-show="isOpen"
      class="absolute left-0 mt-2 bg-white border border-gray-300 rounded shadow-lg w-48 z-10"
      @click.away="closeDropdown"
    >
      <ul class="py-2">
        <li v-for="(item, index) in items" :key="index" class="cursor-pointer">
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
</style>
