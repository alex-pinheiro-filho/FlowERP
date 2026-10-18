<script setup lang="ts">
import WelcomeCard from '@/components/WelcomeCard.vue'
</script>

<template>
  <main class="home-page">
    <WelcomeCard />
  </main>
</template>

<style scoped>
.home-page {
  display: grid;
  min-height: 100vh;
  place-items: center;
  padding: 2rem;
}
</style>
