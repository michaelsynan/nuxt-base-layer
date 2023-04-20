<template>
  <button :class="buttonClasses" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'tertiary'].includes(value),
    },
    type: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'ghost'].includes(value),
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(value),
    },
  },
  computed: {
    buttonColor() {
      return this.type === 'ghost' ? 'bg-transparent' : `bg-${this.color}`;
    },
    textColor() {
      return this.type === 'ghost' ? `text-${this.color}` : 'text-white';
    },
    hoverColor() {
      return this.type === 'ghost' ? `hover:bg-${this.color}` : `hover:bg-${this.color}-light`;
    },
    borderColor() {
      return `border border-${this.color}`;
    },
    hoverBorderColor() {
      return this.type === 'ghost' ? `hover:border-${this.color}-light` : '';
    },
    hoverTextColor() {
      return this.type === 'ghost' ? 'hover:text-white' : '';
    },
    buttonPadding() {
      switch (this.size) {
        case 'small':
          return 'px-2 py-1';
        case 'medium':
          return 'px-4 py-2';
        case 'large':
          return 'px-6 py-3';
        default:
          return 'px-4 py-2';
      }
    },
    buttonTextSize() {
      switch (this.size) {
        case 'small':
          return 'text-sm';
        case 'medium':
          return 'text-base';
        case 'large':
          return 'text-lg';
        default:
          return 'text-base';
      }
    },
    buttonClasses() {
      return [
        this.buttonColor,
        this.hoverColor,
        this.textColor,
        this.borderColor,
        this.hoverBorderColor,
        this.hoverTextColor,
        this.buttonPadding,
        this.buttonTextSize,
        'focus:outline-none',
        'transition-colors',
        'duration-200',
        'max-w-min',
        'whitespace-nowrap',
      ];
    },
  },
};
</script>
