<script setup lang="ts">
import { BookListElement } from '@book-library/shared';
import ActionButton from '../interfaces/ActionButton.vue';
defineProps<{ book: BookListElement }>();
defineEmits(['delete']);
</script>
<template>
  <section
    class="relative flex flex-col rounded-md bg-lime-100 shadow-lg shadow-stone-500 dark:bg-stone-800 dark:shadow-lime-500"
  >
    <div class="h-3/4 2xl:h-5/6">
      <img
        :src="`/books/cover/${book.isbn}.${book.coverExtension}`"
        alt="book cover image 😢"
        class="flex size-full items-center justify-center rounded-t-md"
      />
    </div>
    <div class="flex flex-grow flex-col justify-between p-4">
      <h2 class="text-center text-xl font-bold">
        {{ book.title }}
      </h2>
      <div>
        <p>Authors: {{ book.authors.join(', ') }}</p>
        <p>Edition: {{ book.edition }}</p>
      </div>
    </div>
    <ActionButton
      class="pi-trash absolute bottom-2 right-2"
      @click.stop="$emit('delete')"
    />
  </section>
</template>
