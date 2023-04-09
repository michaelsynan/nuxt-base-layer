<template>
  <button :class="buttonClasses" @click="$emit('click')">
    <slot>
      <p class="whitespace-nowrap">See More</p>
    </slot>
  </button>
</template>

<style>
.hard-shadow {
  box-shadow: 4px 4px 0 #000;
}
</style>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'flat'
  },
  size: {
    type: String,
    default: 'base'
  },
  color: {
    type: String,
    default: 'tertiary',
    validator: (value) => ['primary', 'secondary', 'tertiary'].includes(value),
  },
});

const buttonColor = computed(() => `bg-${props.color}`);
const hoverColor = computed(() => `hover:bg-${props.color}-dark`);
const buttonClasses = computed(() => {
  const baseClass = `transition-colors duration-200 ease-in-out w-auto h-min ${getButtonStyle(props.type)} ${getButtonSize(props.size)} ${buttonColor.value}`;
  const hoverClass = `${hoverColor.value} text-white`;

  return `${baseClass} ${hoverClass}`;
});

function getButtonStyle(type) {
  switch (type) {
    case 'flat':
      return 'text-gray-700';
    case 'raised':
      return 'text-white shadow-md';
    case 'ghost':
      return 'text-gray-700 border-gray-700 border-2 hover-ghost';
    case 'hard-shadow':
      return 'text-white hard-shadow hover-hard-shadow';
    default:
      break;
  }
}

function getButtonSize(size) {
  switch (size) {
    case 'sm':
      return 'px-2 py-1 text-sm';
    case 'base':
      return 'px-4 py-2';
    case 'lg':
      return 'px-8 py-4 text-lg';
    default:
      break;
  }
}
</script>
