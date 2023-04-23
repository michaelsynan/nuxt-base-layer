<!-- components/CopyPaletteButton.vue -->
<template>
  <div>
    <button @click="copyPalette" class="py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg">Copy Palette</button>
    <div v-if="copied" class="text-sm text-green-500 mt-2">Copied to clipboard!</div>
  </div>
</template>

<script>
export default {
  props: {
    palette: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      copied: false,
    };
  },
  methods: {
    copyPalette() {
      const jsonText = JSON.stringify(this.palette, null, 2);
      navigator.clipboard.writeText(jsonText).then(() => {
        this.copied = true;
        setTimeout(() => {
          this.copied = false;
        }, 3000);
      });
    },
  },
};
</script>
