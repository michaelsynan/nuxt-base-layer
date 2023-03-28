<template>
  <div class="flex flex-col">
    <div id="firstSection" class="h-screen flex items-center justify-center bg-blue-900">
      <div :class="{ fixed: fixedFirst }" class="w-full h-full flex items-center justify-center">
        <div class="text-9xl">TESTING</div>
      </div>
      <div v-if="fixedFirst" :style="{ height: `${initialHeightFirst}px` }"></div>
    </div>
    <div id="secondSection" class="h-screen flex items-center justify-center bg-red-900 z-40">
      <div :class="{ fixed: fixedSecond }" class="w-full h-full flex items-center justify-center">
        <div class="text-9xl">HELLO</div>
      </div>
      <div v-if="fixedSecond" :style="{ height: `${initialHeightSecond}px` }"></div>
    </div>
    <div id="thirdSection" class="h-screen flex items-center justify-center bg-green-900 z-40">
      <div :class="{ fixed: fixedThird }" class="w-full h-full flex items-center justify-center">
        <div class="text-9xl">WORLD</div>
      </div>
      <div v-if="fixedThird" :style="{ height: `${initialHeightThird}px` }"></div>
    </div>
    <div class="h-screen flex items-center justify-center bg-yellow-900 z-40">
      <div class="text-9xl">LAST</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";

const fixedFirst = ref(false);
const initialHeightFirst = ref(0);
const initialTopFirst = ref(0);

const fixedSecond = ref(false);
const initialHeightSecond = ref(0);
const initialTopSecond = ref(0);

const fixedThird = ref(false);
const initialHeightThird = ref(0);
const initialTopThird = ref(0);

onMounted(async () => {
  await nextTick();
  const firstSection = document.getElementById("firstSection");
  const secondSection = document.getElementById("secondSection");
  const thirdSection = document.getElementById("thirdSection");
  if (firstSection) {
    initialHeightFirst.value = firstSection.offsetHeight;
    initialTopFirst.value = firstSection.getBoundingClientRect().top + window.scrollY;
  }
  if (secondSection) {
    initialHeightSecond.value = secondSection.offsetHeight;
    initialTopSecond.value = secondSection.getBoundingClientRect().top + window.scrollY;
  }
  if (thirdSection) {
    initialHeightThird.value = thirdSection.offsetHeight;
    initialTopThird.value = thirdSection.getBoundingClientRect().top + window.scrollY;
  }
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

function handleScroll() {
  fixedFirst.value = window.scrollY >= initialTopFirst.value;
  fixedSecond.value = window.scrollY >= initialTopSecond.value;
  fixedThird.value = window.scrollY >= initialTopThird.value;
}
</script>

<style scoped>
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
</style>
