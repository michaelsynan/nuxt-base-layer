<template>
  <div class="w-full bg-black">
    <h2 class="text-white p-4 bg-slate-900">Pick Colors</h2>
    <div class="flex flex-wrap gap-x-2 bg-stone-800 p-2 items-end">
  <div>
    <button class="btn" @click="generateColors">Generate Colors</button>
  </div>
  <div class="min-w-max">
    <themeScheme />
  </div>
  <div>
    <baseDropdown :dropdownItems="numBaseColor" @dropdown-item-selected="updateNumBaseColor">Number of Base Colors</baseDropdown>
  </div>
  <div>
    <baseDropdown :dropdownItems="numShades" @dropdown-item-selected="updateNumShades">Number of Shades</baseDropdown>
  </div>
  <div class="flex flex-col">
    <label class="text-white" for="saturation-input">Saturation</label>
    <input type="number" :value="saturationValue" id="saturation-input" class="w-16 px-1 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-400 focus:border-blue-400 text-center" />
  </div>
  <div class="flex items-end ml-auto">
    <button class="btn-add-to-theme" @click="addToTheme">Add to Theme</button>
  </div>
</div>


<div class="color-palette px-10 py-4">
    <div
      v-for="(color, index) in selectedColors"
      :key="index"
      class="color-swatch flex"
      :style="{ backgroundColor: color.hex }"
    >
      <div class="color-label">
        <p class="color-name" :style="{ color: textColor(color.hex) }">{{ color.name }}</p>
        <p class="color-hex" :style="{ color: textColor(color.hex) }">{{ color.hex }}</p>
      </div>
      <div class="absolute z-50">
        <i-mdi-lock-open v-if="!color.locked" @click="toggleColorLockStatus(color)" :key="'open'" :style="{ color: textColor(color.hex) }" />
        <i-mdi-lock v-else @click="toggleColorLockStatus(color)" :key="'locked'" :style="{ color: textColor(color.hex) }" />
      </div>
    </div>
  </div>
  </div>
</template>

<script lang="ts" setup>

import { computed, ref } from 'vue';
import chroma from 'chroma-js';
import { randomHexColor, generateShades } from '~/utils/colorUtils';

const colors = ref([]);
const lockStatus = ref(true);
const numBaseColor = ref(['3', '4', '5', '6', '7']);
const numShades = ref(['3', '4', '5', '6', '7']);
const saturationValue = ref(0.5);

const selectedNumBaseColor = ref(numBaseColor.value[0]);
const selectedNumShades = ref(numShades.value[0]);

const updateNumBaseColor = (newNumBaseColor) => {
  selectedNumBaseColor.value = newNumBaseColor;
  generateColors();
};

const updateNumShades = (newNumShades) => {
  selectedNumShades.value = newNumShades;
  generateColors();
};

const toggleColorLockStatus = (color) => {
  console.log("Color locked:", color.locked);
};

function generateColors() {

  // ... (previous generateColors code)

  // Update the colors array
  colors.value = Object.values(palette).map(color => ({ ...color, locked: false }));
}

const selectedColors = computed(() => {
  const allColors = colors.value;
  const endIndex = parseInt(selectedNumBaseColor.value) * (parseInt(selectedNumShades.value) + 1);
  const selectedColorsWithShades = allColors.slice(0, endIndex);
  return selectedColorsWithShades;
});

generateColors();

function addToTheme(color) {
  // Add logic to add the color to the theme
}

function textColor(hexColor) {
  return chroma(hexColor).luminance() > 0.5 ? '#000000' : '#ffffff';
}
</script>

<!-- The style section remains the same -->



































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
