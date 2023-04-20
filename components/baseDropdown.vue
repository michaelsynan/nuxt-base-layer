<template>
  <div class="relative inline-block w-full">
    <label class="text-white block mb-1">
      <slot>1</slot>
    </label>
    <div class="flex items-center">
      <button @click="toggleDropdown" class="bg-primary text-white flex items-center px-4 py-2 w-full">
        <span class="ml-auto">
          <i-mdi-chevron-down :class="isOpen ? 'rotate-180' : 'rotate-0'" class="fas fa-chevron-down" />
        </span>
      </button>
    </div>
    <div
      v-show="isOpen"
      class="absolute left-0 mt-2 bg-white border border-gray-300 shadow-lg w-full z-10"
      @click.away="closeDropdown"
    >
      <ul class="py-2">
        <li v-for="(item, index) in dropdownItems" :key="index" class="cursor-pointer">
          <a
            @click="selectItems(item)"
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
import { defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
    dropdownItems: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  setup(props, { slots }) {
    const isOpen = ref(false);

    function toggleDropdown() {
      isOpen.value = !isOpen.value;
    }

    function closeDropdown() {
      isOpen.value = false;
    }

    function selectItem(item) {
      isOpen.value = false;
      console.log('Selected item:', item);
      // Do something with the selected item
    }

    return {
      isOpen,
      dropdownItems: props.dropdownItems,
      toggleDropdown,
      closeDropdown,
      selectItem,
      buttonSlot: slots.default,
    };
  },
});
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