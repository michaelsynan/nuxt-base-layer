<!-- components/TagGroup.vue -->
<template>
  <div class="tag-group">
    <baseTag
      v-for="(tag, index) in tagList"
      :key="index"
      :bg-color="tag.bgColor"
      :text-color="tag.textColor"
    >
      {{ tag.text }}
    </baseTag>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  tags: {
    type: Array,
    default: () => [],
  },
});

const defaultTags = [
  { text: 'Vue.js', bgColor: 'bg-green-500', textColor: 'text-white' },
  { text: 'Nuxt.js', bgColor: 'bg-blue-500', textColor: 'text-white' },
  { text: 'JavaScript', bgColor: 'bg-yellow-500', textColor: 'text-black' },
  { text: 'CSS', bgColor: 'bg-purple-500', textColor: 'text-white' },
  { text: 'HTML', bgColor: 'bg-red-500', textColor: 'text-white' },
];

const tagList = computed(() => (props.tags.length > 0 ? props.tags : defaultTags));

</script>

<style scoped>
.tag-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
</style>
