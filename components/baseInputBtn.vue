<template>
  <div class="flex space-x-2">
    <baseInput
      :label="label"
      :placeholder="placeholder"
    />
    <div class="flex self-end">
      <BaseBtn color="primary">
        <slot>Enter</slot>
      </BaseBtn>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: 'Input Label',
  },
  placeholder: {
    type: String,
    default: 'enter email',
  },
});
</script>
