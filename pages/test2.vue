<template>
  <div class="bg-stone-900 absolute w-full min-h-screen">
    <RandomButton />
  </div>
</template>

<script>
import RandomButton from '@/components/randomBtn.vue';

export default {
  components: {
    RandomButton,
  },
};
</script>
