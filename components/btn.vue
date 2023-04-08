<template>
  <button :class="buttonClass">
    <slot>
      <p class="whitespace-nowrap">See More</p>
    </slot>
  </button>
</template>

<style>
.hard-shadow {
  box-shadow: 4px 4px 0 #000;
}
.hover-flat:hover {

}
.hover-raised:hover {

}
.hover-ghost:hover {
  background-color: #e2e8f0;
}
.hover-hard-shadow:hover {
  background-color: #9f7aea;
}
</style>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'flat'
  },
  size: {
    type: String,
    default: 'base'
  }
});

const buttonClass = `transition-all duration-200 ease-in-out w-auto h-min ${getButtonStyle(props.type)}  ${getButtonSize(props.size)}`;

function getButtonStyle(type) {

  switch (type) {
    case 'flat':
      return 'bg-primary text-white text-gray-700';
    case 'raised':
      return 'bg-primary text-white shadow-md hover:bg-secondary-faded';
    case 'ghost':
      return 'bg-transparent text-gray-700 border-gray-700 border-2 hover-ghost';
    case 'hard-shadow':
      return 'bg-purple-500 text-white hard-shadow hover-hard-shadow';     
    default:
      break;

  }}

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


