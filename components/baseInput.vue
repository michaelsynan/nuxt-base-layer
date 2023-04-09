<template>
  <div class="flex flex-col">
    <label v-if="label" :for="inputId" class="mb-2 text-sm font-medium">{{ label }}</label>
    <input
      :id="inputId"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input', $event.target.value)"
      class="border border-gray-300 px-3 py-2 text-base focus:border-blue-500 focus:outline-none"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    inputId: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped></style>
