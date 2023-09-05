<template>
    <main>
        <h2 class="text-gray-2 text-2xl font-medium mb-6 first:mt-0 mt-10">Inputs</h2>
        <!-- Default Input -->
        <section class="examples flex flex-wrap flex=row w-fit mb-8 gap-x-16 gap-y-8 lg:gap-x-32">
            <div>
                <span class="block text-gray-1 mb-3">
                    &lt;BaseInput /&gt;
                </span>
                <base-input />
            </div>
            <div>
                <span class="block text-gray-1 mb-3">
                    &lt;BaseInput :error="true" /&gt;
                </span>
                <base-input :error="true" />
            </div>
            <div>
                <span class="block text-gray-1 mb-3">
                    &lt;BaseInput :disabled="true" /&gt;
                </span>
                <base-input :disabled="true" />
            </div>
        </section>
    </main>
</template>

<script setup>
import { ref } from 'vue';
</script>