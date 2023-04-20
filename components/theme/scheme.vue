<!-- components/ColorSchemeDropdown.vue -->
<template>
  <select class="color-scheme-dropdown p-2 bg-black rounded m-2 fixed" @change="onChange($event)">
    <option
      v-for="(scheme, index) in colorSchemes"
      :key="index"
      :value="scheme"
      :selected="scheme === selectedScheme"
    >
      {{ scheme }}
    </option>
  </select>
</template>



<script>
export default {
  props: {
    colorSchemes: {
      type: Array,
      default: () => ['triadic', 'monochromatic', 'analogous', 'complementary'],
    },
    selectedScheme: {
      type: String,
      default: 'triadic',
    },
  },
  methods: {
    onChange(event) {
   /*   this.$emit('update-color-scheme', event.target.value); */
   console.log("onChange");
    },
  },
};
</script>

<style scoped>
.color-scheme-dropdown {
  /* Add any desired styling for the dropdown */
}
</style>
