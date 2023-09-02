<template>
    <main>
        <h2 class="text-gray-2 text-2xl font-medium mb-6 first:mt-0 mt-10">Inputs</h2>
        <!-- Default Input -->
        <section class="examples flex flex-wrap w-fit mb-8 gap-x-16 gap-y-8 lg:gap-x-32">
            <base-input :disabled="isDisabled" :id="'default'" />
        </section>
    </main>
</template>

<script setup>
import { ref } from 'vue'

const isDisabled = ref(true)
</script>