<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto my-20 sm:px-4 md:px-4">
    <div v-for="member in teamMembers" :key="member.id"
      class="bg-gray-900 rounded-lg shadow-lg overflow-hidden text-gray-100">
      <img :src="member.imageSrc" :alt="member.name" class="w-full h-48 object-cover">
      <div class="p-4">
        <h3 class="text-xl font-semibold mb-2">{{ member.name }}</h3>
        <p class="text-gray-400 text-sm mb-4">{{ member.bio }}</p>
        <a :href="member.website" target="_blank" class="text-blue-400 text-sm hover:underline">{{ member.website }}</a>
      </div>
    </div>
  </div>
</template>
<script setup>
const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    imageSrc: 'https://via.placeholder.com/500x300',
    website: 'https://johndoe.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae gravida justo. Duis varius purus vel diam pellentesque, at consectetur nisi tincidunt.'
  },
  {
    id: 2,
    name: 'Jane Smith',
    imageSrc: 'https://via.placeholder.com/500x300',
    website: 'https://janesmith.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae gravida justo. Duis varius purus vel diam pellentesque, at consectetur nisi tincidunt.'
  },
  {
    id: 3,
    name: 'Bob Johnson',
    imageSrc: 'https://via.placeholder.com/500x300',
    website: 'https://bobjohnson.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae gravida justo. Duis varius purus vel diam pellentesque, at consectetur nisi tincidunt.'
  },
];
</script>
<style>
@media screen and (max-width: 640px) {
  .grid {
    margin-left: -2rem;
    margin-right: -2rem;
  }
}
</style>