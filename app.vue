<template>
  <VitePwaManifest />
  <section v-if="$device.isMobileOrTablet">
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </section>
  <section v-else>
    <h1>This app is intended to run in mobile app</h1>
  </section>
</template>


<script setup lang="ts">

</script>