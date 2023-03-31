<template>
  <button :class="buttonClass">
    <slot>
      <p>See More</p>
    </slot>
  </button>
</template>

<style>
.hard-shadow {
  box-shadow: 0 4px 0 #000;
}
.hover-flat:hover {
  background-color: #e2e8f0;
}
.hover-raised:hover {
  background-color: #4299e1;
}
.hover-ghost:hover {
  background-color: #e2e8f0;
}
.hover-hard-shadow:hover {
  background-color: #9f7aea;
}
.hover-default:hover {
  background-color: #edf2f7;
}
</style>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: ''
  }
});

const buttonClass = `rounded-lg px-4 py-2 transition-all duration-200 ease-in-out ${getButtonStyle(props.type)}`;

function getButtonStyle(type) {
  switch (type) {
    case 'flat':
      return 'bg-gray-100 text-gray-700 hover-flat';
    case 'raised':
      return 'bg-blue-500 text-white shadow-md hover-raised';
    case 'ghost':
      return 'bg-transparent text-gray-700 border-gray-700 border hover-ghost';
    case 'hard-shadow':
      return 'bg-purple-500 text-white hard-shadow hover-hard-shadow';
    default:
      return 'bg-gray-200 text-gray-700 hover-default';
  }
}
</script>


