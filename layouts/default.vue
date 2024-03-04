<template>
  <v-app>
    <v-main>
      <slot />
    </v-main>

    <NavFooter/>
  </v-app>
</template>

<script setup lang="ts">

import Header from '~/components/Header.vue';

definePageMeta({
  middleware: 'auth'
})
</script>