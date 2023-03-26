<template>
  <div class="bg-stone-900 p-8 rounded-lg max-w-2xl mx-auto">
    <h2 class="text-stone-100 text-2xl font-bold mb-6">Contact Us</h2>
    <form @submit.prevent="submitForm">
      <div class="mb-4">
        <label for="name" class="text-stone-100 mb-2">Name</label>
        <input type="text" id="name" v-model="formData.name"
          class="w-full p-2 bg-stone-700 text-stone-100 border border-stone-600 rounded" />
      </div>
      <div class="mb-4">
        <label for="email" class="text-stone-100 mb-2">Email</label>
        <input type="email" id="email" v-model="formData.email"
          class="w-full p-2 bg-stone-700 text-stone-100 border border-stone-600 rounded" />
      </div>
      <div class="mb-4">
        <label for="message" class="text-stone-100 mb-2">Message</label>
        <textarea id="message" v-model="formData.message" rows="4"
          class="w-full p-2 bg-stone-700 text-stone-100 border border-stone-600 rounded"></textarea>
      </div>
      <button type="submit" class="px-4 py-2 text-stone-100 bg-stone-600 hover:bg-stone-500 rounded">
        Send
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    submitForm() {
      console.log('Form data:', this.formData);
      // Process and send the form data
    },
  },
};
</script>
