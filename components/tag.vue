<!-- components/Tag.vue -->
<template>
  <div :class="tagClasses" class="inline-block max-w-min">
    <slot>{{ defaultText }}</slot>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  bgColor: {
    type: String,
    default: 'bg-blue-500',
  },
  textColor: {
    type: String,
    default: 'text-white',
  },
  defaultText: {
    type: String,
    default: 'Default Tag',
  },
});

const tagClasses = computed(() => {
  return `tag ${props.bgColor} ${props.textColor} font-semibold text-xs py-1 px-2 rounded-full whitespace-nowrap`;
});
</script>

<style scoped>
.tag {
  display: inline-block;
}
</style>
