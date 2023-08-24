<template>
  <app-header />

  <RouterView class="col-span-4 px-10 py-20 lg:px-20 lg:py-14 lg:ml-44" />
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import { RouterView } from 'vue-router'
</script>