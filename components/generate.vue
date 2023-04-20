<template>
  <div class="w-full bg-black">
    <h2 class="text-white p-4 bg-slate-900">Pick Colors</h2>
    <div class="flex flex-wrap gap-x-2 bg-stone-800 p-2 items-end">
  <div>
    <button class="btn" @click="generateColors">Generate Colors</button>
  </div>
  <div>
    <themeScheme /> test test
  </div>
  <div>
    <baseDropdown :dropdownItems="items">Number of Base Colors</baseDropdown>
  </div>
  <div>
    <baseDropdown :dropdownItems="items">Number of Shades</baseDropdown>
  </div>
  <div class="flex flex-col">
    <label class="text-white" for="saturation-input">Saturation</label>
    <input type="number" value="50" id="saturation-input" class="w-16 px-1 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-400 focus:border-blue-400 text-center" />
  </div>
  <div class="flex items-end ml-auto">
    <button class="btn-add-to-theme" @click="addToTheme">Add to Theme</button>
  </div>
</div>


    

    <div class="color-palette px-10 py-4">
      <div
        v-for="(color, index) in colors"
        :key="index"
        class="color-swatch flex"
        :style="{ backgroundColor: color.hex }"
      >
        <div class="color-label">
          <p class="color-name" :style="{ color: textColor(color.hex) }">{{ color.name }}</p>
          <p class="color-hex" :style="{ color: textColor(color.hex) }">{{ color.hex }}</p>
        </div>
        <i-mdi-lock-open :class="isOpen ? 'rotate-180' : 'rotate-0'" class="fas fa-chevron-down" />

      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import chroma from 'chroma-js';
import { randomHexColor, generateShades } from '~/utils/colorUtils';

const colors = ref([]);

const items = ref(['squiggle', 'pickle', 'rick'])

function generateColors() {
  // Generate a random base color
  const baseColor = randomHexColor();

  // Generate color palette using the base color
  const palette = {
    primary: { name: 'primary', hex: baseColor },
    secondary: { name: 'secondary', hex: chroma(baseColor).set('hsl.h', '+120').hex() },
    tertiary: { name: 'tertiary', hex: chroma(baseColor).set('hsl.h', '-120').hex() },
  };

  palette.primary_light = { name: 'primary_light', hex: generateShades(palette.primary.hex).light };
  palette.primary_dark = { name: 'primary_dark', hex: generateShades(palette.primary.hex).dark };
  palette.secondary_light = { name: 'secondary_light', hex: generateShades(palette.secondary.hex).light };
  palette.secondary_dark = { name: 'secondary_dark', hex: generateShades(palette.secondary.hex).dark };
  palette.tertiary_light = { name: 'tertiary_light', hex: generateShades(palette.tertiary.hex).light };
  palette.tertiary_dark = { name: 'tertiary_dark', hex: generateShades(palette.tertiary.hex).dark };

  
  // Add baseText_light and baseText_dark colors
  palette.baseText_light = { name: 'baseText_light', hex: chroma.mix(palette.primary.hex, '#ffffff', 0.95).hex() };
  palette.baseText_dark = { name: 'baseText_dark', hex: chroma.mix(palette.primary.hex, '#000000', 0.98).hex() };


  // Update the colors array
  colors.value = Object.values(palette);
}

generateColors();

function addToTheme(color) {
  // Add logic to add the color to the theme
}

function textColor(hexColor) {
  return chroma(hexColor).luminance() > 0.5 ? '#000000' : '#ffffff';
}
</script>

<style scoped>
.color-palette {
  display: flex;
  flex-wrap: wrap;
}

.color-swatch {
  position: relative;
  width: 100px;
  height: 100px;
  margin: 10px;
}

.color-swatch::before {
  content: attr(data-color);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: bold;
}

.color-label {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.color-name {
  font-size: 12px;
  margin-bottom: 5px;
}

.color-hex {
  font-weight: bold;
}

.btn, .btn-add-to-theme {
  display: inline-block;
  background-color: #4a5568;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  margin: 4px;
  text-decoration: none;
}

.btn-add-to-theme {
  display: block;
  margin: 12px auto;
}
</style>
