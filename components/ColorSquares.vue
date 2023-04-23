<template>
  <div>
    <div v-for="(group, groupName) in colorGroups" :key="groupName">
      <h3>{{ groupName }}</h3>
      <div
        v-for="(color, key) in group"
        :key="key"
        class="color-square"
        :style="{ backgroundColor: color }"
      >
        {{ key }}
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  props: {
    colors: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const colorGroups = computed(() => {
      const groups = {};
      for (const key in props.colors) {
        const prefix = key.split('-')[0];
        if (!groups[prefix]) {
          groups[prefix] = {};
        }
        groups[prefix][key] = props.colors[key];
      }
      return groups;
    });

    return { colorGroups };
  },
};
</script>

<style scoped>
.color-square {
  display: inline-block;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  margin: 5px;
  border: 1px solid #ccc;
  font-family: sans-serif;
  font-size: 14px;
  color: #000;
}
</style>
