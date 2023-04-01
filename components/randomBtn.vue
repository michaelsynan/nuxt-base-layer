<template>
  <div>
    <button class="bg-green-500 text-white px-4 py-2 rounded" @click="generateButton">
      Generate Button
    </button>
    <div v-if="randomButtonVisible" class="mt-4">
      <button :class="buttonClasses">
        Random Button
      </button>
      <div v-if="classListVisible" class="mt-4">
        <pre class="bg-gray-200 p-4 rounded text-sm inline-block">{{ buttonClasses }}</pre>
        <button class="bg-blue-500 text-white px-4 py-2 rounded mt-2" @click="copyClasses">
          Copy
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonClasses: 'bg-blue-500',
      randomButtonVisible: false,
      classListVisible: false,
    };
  },
  methods: {
    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    getRandomButton() {
      const padding = ['py-2', 'py-3', 'py-4'];
      const xpadding = ['px-2', 'px-3', 'px-4'];
      const fontSize = ['text-xs', 'text-sm', 'text-base', 'text-lg'];
      const capitalization = ['uppercase', 'lowercase', 'capitalize'];
      const radius = [
        'rounded-none',
        'rounded-sm',
        'rounded',
        'rounded-md',
        'rounded-lg',
        'rounded-full',
      ];
      const border = ['border-0', 'border', 'border-2', 'border-4'];
      const shadowColor = [
        'shadow',
        'shadow-md',
        'shadow-lg',
        'shadow-xl',
        'shadow-2xl',
      ];
      const shadowBlur = ['shadow-inner', 'shadow-none'];
      const fontWeight = ['font-bold', 'font-normal'];

      const classes = [
        padding[this.getRandomInt(0, padding.length - 1)],
        xpadding[this.getRandomInt(0, padding.length - 1)],
        fontSize[this.getRandomInt(0, fontSize.length - 1)],
        capitalization[this.getRandomInt(0, capitalization.length - 1)],
        radius[this.getRandomInt(0, radius.length - 1)],
        border[this.getRandomInt(0, border.length - 1)],
        shadowColor[this.getRandomInt(0, shadowColor.length - 1)],
        shadowBlur[this.getRandomInt(0, shadowBlur.length - 1)],
        'bg-blue-500',
        fontWeight[this.getRandomInt(0, fontWeight.length - 1)],
      ];

      this.buttonClasses = classes.join(' ');
      this.classListVisible = true;
    },
    generateButton() {
      this.randomButtonVisible = true;
      this.getRandomButton();
    },
    copyClasses() {
      navigator.clipboard.writeText(this.buttonClasses).then(
        () => {
          alert('Classes copied to clipboard');
        },
        (err) => {
          alert('Error copying classes to clipboard');
        }
      );
    },
  },
};
</script>
