<template>
  <button :class="buttonClass">
    <slot>
      <p>See More</p>
    </slot>
  </button>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: ''
  }
});

const buttonClass = `rounded-lg px-4 py-2 ${getButtonStyle(props.type)}`;

function getButtonStyle(type) {
  switch (type) {
    case 'flat':
      return 'bg-gray-100 text-gray-700';
    case 'raised':
      return 'bg-blue-500 text-white shadow-md';
    case 'ghost':
      return 'bg-transparent text-gray-700';
    case 'hard-shadow':
      return 'bg-purple-500 text-white shadow-xl';
    default:
      return 'bg-gray-200 text-gray-700';
  }
}
</script>
