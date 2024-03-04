<template>
  <v-app>
<!--    <mobile-navigation />-->
    <v-main>
      <slot />
    </v-main>
  </v-app>

  <v-snackbar v-model="snackbar.show" :timeout="5000">
    {{ snackbar.message }}

    <template v-slot:actions>
      <v-btn
          color="primary"
          variant="text"
          @click="snackbar.show = false"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script setup lang="ts">
import {useSnackbar} from "~/store/snackbar";

const snackbar = useSnackbar();

</script>

<style scoped>
</style>