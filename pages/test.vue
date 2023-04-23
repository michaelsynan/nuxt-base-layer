<!-- parent component -->
<template>
  <div>
    <copy-palette-button :palette="colorSchemeJson" />
    <export-palette-button :palette="colorSchemeJson" />


    <ColorSquares :colors="colorSchemeJson" />
    <generateColorsButton @color-scheme-generated="updateColorSchemeJson" />
  </div>
</template>

<script>
import ColorSquares from '@/components/ColorSquares.vue';
import GenerateColorsButton from '@/components/generateColorsButton.vue';
import { ref } from 'vue';

export default {
  components: {
    ColorSquares,
    GenerateColorsButton,
  },
  setup() {
    const colorSchemeJson = ref({});

    const updateColorSchemeJson = (newColorSchemeJson) => {
      colorSchemeJson.value = newColorSchemeJson;
    };

    return {
      colorSchemeJson,
      updateColorSchemeJson,
    };
  },
};
</script>
