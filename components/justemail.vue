<template>
  <div class="bg-stone-900 p-8 max-w-2xl mx-auto">
    <h1 class="text-stone-100 text-2xl font-bold mb-6">Contact Us</h1>
    <form @submit.prevent="submitForm">
      <div class="mb-4">
        <label for="email" class="text-stone-100 mb-2">Email</label>
        <input type="email" id="email" v-model="formData.email"
          class="w-full p-2 bg-stone-700 text-stone-100 border border-stone-600" />
      </div>
      <btn>Submit</btn>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        email: '',
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
