<template>
  <transition name="toast-fade-y">
    <div v-if="visible" :class="[bgClass, textColorClass, 'p-4 shadow-md flex justify-between items-center']">
      <div>{{ message }}</div>
      <button @click="close" class="text-white hover:text-gray-300">
        <i-mdi-close-thick />
      </button>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
      validator: (value) => {
        return ['warn', 'error', 'success'].indexOf(value) !== -1;
      },
    },
    message: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      visible: true,
    };
  },
  computed: {
    bgClass() {
      switch (this.type) {
        case 'warn':
          return 'bg-yellow-400';
        case 'error':
          return 'bg-red-400';
        case 'success':
          return 'bg-green-400';
        default:
          return 'bg-gray-300';
      }
    },
    textColorClass() {
      return 'text-white';
    },
  },
  methods: {
    close() {
      this.visible = false;
    },
  },
};
</script>

<style>
.toast-fade-y-enter-active,
.toast-fade-y-leave-active {
  transition: opacity 300ms ease-out, transform 300ms ease-out;
}

.toast-fade-y-enter,
.toast-fade-y-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
