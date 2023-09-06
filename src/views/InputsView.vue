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
        <!-- Helper Text -->
        <h2 class="text-gray-2 text-2xl font-medium mb-6 first:mt-0 mt-10">Helper Text</h2>
        <section class="examples flex flex-wrap flex=row w-fit mb-8 gap-x-16 gap-y-8 lg:gap-x-32">
            <div>
                <span class="block text-gray-1 mb-3">
                    &lt;BaseInput helperText="'Some interesting text'" /&gt;
                </span>
                <base-input helperText="Some interesting text" />
            </div>
            <div>
                <span class="block text-gray-1 mb-3">
                    &lt;BaseInput helperText="Some interesting text" :error="true" /&gt;
                </span>
                <base-input helperText="Some interesting text" :error="true" />
            </div>
        </section>
        <!-- Icons -->
        <h2 class="text-gray-2 text-2xl font-medium mb-6 first:mt-0 mt-10">Icons</h2>
        <section class="examples flex flex-wrap flex=row w-fit mb-8 gap-x-16 gap-y-8 lg:gap-x-32">
            <div>
                <span class="block text-gray-1 mb-3">
                    &lt;BaseInput v-input-icon="'call'" /&gt;
                </span>
                <base-input v-input-icon="'call'" />
            </div>
            <div>
                <span class="block text-gray-1 mb-3">
                    &lt;BaseInput v-input-icon="'person'" /&gt;
                </span>
                <base-input v-input-icon="'person'" />
            </div>
            <div>
                <span class="block text-gray-1 mb-3">
                    &lt;BaseInput v-input-icon="'lock'" /&gt;
                </span>
                <base-input v-input-icon="'lock'" />
            </div>
            <div>
                <span class="block text-gray-1 mb-3">
                    &lt;BaseInput v-input-icon:end="'search'" /&gt;
                </span>
                <base-input v-input-icon:end="'search'" />
            </div>
            <div>
                <span class="block text-gray-1 mb-3">
                    &lt;BaseInput v-input-icon:end="'keyboard_voice'" /&gt;
                </span>
                <base-input v-input-icon:end="'keyboard_voice'" />
            </div>
        </section>
        <!-- Sizes -->
        <h2 class="text-gray-2 text-2xl font-medium mb-6 first:mt-0 mt-10">Sizes</h2>
        <section class="examples flex flex-wrap flex=row w-fit mb-8 gap-x-16 gap-y-8 lg:gap-x-32">
            <div>
                <span class="block text-gray-1 mb-3">
                    &lt;BaseInput size="sm" /&gt;
                </span>
                <base-input size="sm" />
            </div>
            <div>
                <span class="block text-gray-1 mb-3">
                    &lt;BaseInput size="md" /&gt;
                </span>
                <base-input size="md" />
            </div>
        </section>
        <div>
            <span class="block text-gray-1 mb-3">
                &lt;BaseInput size="fullWidth" /&gt;
            </span>
            <base-input size="fullWidth" />
        </div>
        <!-- Multiline -->
        <h2 class="text-gray-2 text-2xl font-medium mb-6 first:mt-0 mt-10">Multiline input</h2>
        <section class="examples w-1/4 mb-8 w-full">
            <span class="block text-gray-1 mb-3">
                &lt;BaseInput :multiline="true" size="fullWidth" /&gt;
            </span>
            <base-input :multiline="true" size="fullWidth" helperText="fullWidth size: the width of the parent." />
        </section>
    </main>
</template>

<script setup>
import { ref } from 'vue';

const helperText = ref('Texto ajudante')
</script>