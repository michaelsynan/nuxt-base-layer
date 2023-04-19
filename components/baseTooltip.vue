<template>
  <div class="relative inline-block">
    <button @mouseover="showTooltip = true" @mouseout="showTooltip = false">
      Hover me
    </button>
    <div
      v-if="showTooltip"
      :class="{
        'absolute bottom-full left-1/2 transform -translate-x-1/2': location === 'top',
        'absolute top-full left-1/2 transform -translate-x-1/2': location === 'bottom',
        'absolute top-1/2 left-full transform -translate-y-1/2': location === 'right',
        'absolute top-1/2 right-full transform -translate-y-1/2': location === 'left'
      }"
      class="px-2 py-1 text-white bg-gray-900 rounded-lg shadow-lg m-4"
    >
      <div>{{ message }}</div>
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
      showTooltip: false
    }
  }
}
</script>
<style scoped>
button {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  background-color: #4a5568;
  color: #fff;
}

.tooltip-triangle {
  position: absolute;
  width: 0;
  height: 0;
  z-index: 1;
}

.triangle-top {
  top: -10px;
  left: 50%;
  margin-left: -10px;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #333;
}

.triangle-bottom {
  bottom: -10px;
  left: 50%;
  margin-left: -10px;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid #333;
}

.triangle-right {
  left: -10px;
  top: 50%;
  margin-top: -10px;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right: 10px solid #333;
}

.triangle-left {
  right: -10px;
  top: 50%;
  margin-top: -10px;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid #333;
}
</style>
