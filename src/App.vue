<template>
  <aside class="col-auto bg-[#FAFBFD] pl-3 lg:pl-10 xl:pl-12 pt-12">
    <header class="fixed">
      <h1 class="mb-28"><span class="text-[#F7542E]">Dev</span>challengs.io</h1>

      <nav>
        <ul class="list-none grid gap-8">
          <li>Colors</li>
          <li>Typography</li>
          <li>Spaces</li>
          <li>Buttons</li>
          <li>Inputs</li>
          <li>Grid</li>
        </ul>
      </nav>
    </header>
  </aside>

  <RouterView class="col-span-4 px-20 py-14" />
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>