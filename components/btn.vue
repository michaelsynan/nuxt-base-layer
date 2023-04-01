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
  }
});

const buttonClass = `rounded-lg px-4 py-2 transition-all duration-200 ease-in-out ${getButtonStyle(props.type)}`;

function getButtonStyle(type) {
  switch (type) {
    case 'flat':
      return 'bg-primary text-gray-700 hover:bg-primary-faded';
    case 'raised':
      return 'bg-secondary text-white shadow-md hover:bg-sesecondary-faded';
    case 'ghost':
      return 'bg-transparent text-gray-700 border-gray-700 border-2 hover-ghost';
    case 'hard-shadow':
      return 'bg-purple-500 text-white hard-shadow hover-hard-shadow';
  }
}
</script>


