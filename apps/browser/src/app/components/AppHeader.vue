<script setup lang="ts">
defineProps<{ theme: 'light' | 'dark' }>();
defineEmits(['changeTheme']);
</script>
<template>
  <header
    class="mb-12 mt-4 flex w-full items-center justify-center text-lime-500"
  >
    <h1
      class="ml-auto flex items-center justify-center text-3xl md:text-4xl lg:text-6xl"
    >
      <i class="pi pi-book mr-2" />
      <p>Book library</p>
    </h1>
    <button
      id="theme-button"
      :class="theme == 'light' ? 'pi-moon' : 'pi-sun'"
      class="pi ml-auto rounded-md p-2 outline-1 outline-lime-500 hover:outline md:text-lg lg:text-xl"
      @click="$emit('changeTheme')"
    />
  </header>
</template>
