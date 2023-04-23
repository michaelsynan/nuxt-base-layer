<!-- components/ExportPaletteButton.vue -->
<template>
  <div>
    <button @click="exportPalette" class="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg">Export Palette</button>
    <div v-if="exported" class="text-sm text-blue-500 mt-2">Palette exported to clipboard!</div>
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
      exported: false,
    };
  },
  methods: {
    formatPalette(palette) {
      const formattedPalette = {};

      for (const key in palette) {
        const [group, shade] = key.split('-');

        if (!formattedPalette[group]) {
          formattedPalette[group] = {};
        }

        formattedPalette[group][shade] = palette[key];
      }

      return formattedPalette;
    },
    exportPalette() {
      const formattedPalette = this.formatPalette(this.palette);
      const jsonText = JSON.stringify(formattedPalette, null, 2);
      navigator.clipboard.writeText(jsonText).then(() => {
        this.exported = true;
        setTimeout(() => {
          this.exported = false;
        }, 3000);
      });
    },
  },
};
</script>
