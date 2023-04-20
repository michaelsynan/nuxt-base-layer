<template>
  <div class="relative inline-block">
    <span>
      <slot></slot>
    </span>
    <div
      v-if="showTooltip"
      :class="{
        'absolute bottom-full left-1/2 transform -translate-x-1/2': location === 'top',
        'absolute top-full left-1/2 transform -translate-x-1/2': location === 'bottom',
        'absolute top-1/2 left-full transform -translate-y-1/2': location === 'right',
        'absolute top-1/2 right-full transform -translate-y-1/2': location === 'left'
      }"
      class="tooltip-container px-2.5 py-2 text-white bg-gray-900 rounded-lg shadow-lg m-4"
    >
      <div class="min-w-max max-w-sm">{{ message }}</div>
      <div
        class="tooltip-triangle"
        :class="{
          'triangle-top': location === 'bottom',
          'triangle-bottom': location === 'top',
          'triangle-right': location === 'right',
          'triangle-left': location === 'left'
        }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    location: {
      type: String,
      default: 'top',
      validator: value => ['top', 'bottom', 'left', 'right'].includes(value)
    },
    message: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      showTooltip: true
    }
  }
}
</script>

<style scoped>
.tooltip-triangle {
  position: absolute;
  width: 0;
  height: 0;
  z-index: 1;
}

.triangle-top {
  top: -10px;
  left: 30%;
  margin-left: -9px;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #333;
}

.triangle-bottom {
  bottom: -9px;
  left: 30%;
  margin-left: -10px;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid #333;
}

.triangle-right {
  left: -9px;
  top: 50%;
  margin-top: -10px;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right: 10px solid #333;
}

.triangle-left {
  right: -9px;
  top: 50%;
  margin-top: -10px;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid #333;
}
</style>
