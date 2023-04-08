<template>
  <div class="bg-stone-900 p-8 max-w-2xl mx-auto">
    <h1 class="text-stone-100 text-2xl font-bold mb-6">Contact Us</h1>
    <form @submit.prevent="submitForm">
      <div class="mb-4 flex items-center">
        <input type="email" id="email" v-model="formData.email" placeholder="Enter your email"
          class="w-full p-2 bg-stone-700 text-stone-100 border border-stone-600 mr-4" />
        <btn>Submit</btn>
      </div>
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
