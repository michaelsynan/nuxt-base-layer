<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, onUnmounted, nextTick } from "vue";

const fixedFirst = ref(false);
const initialHeightFirst = ref(0);
const initialTopFirst = ref(0);

const fixedSecond = ref(false);
const initialHeightSecond = ref(0);
const initialTopSecond = ref(0);

const fixedThird = ref(false);
const initialHeightThird = ref(0);
const initialTopThird = ref(0);

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});


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


onUnmounted(() => {
  fixedFirst.value = false;
  fixedSecond.value = false;
  fixedThird.value = false;
});

function handleScroll() {
  fixedFirst.value = window.scrollY >= initialTopFirst.value;
  fixedSecond.value = window.scrollY >= initialTopSecond.value;
  fixedThird.value = window.scrollY >= initialTopThird.value;
}
</script>
