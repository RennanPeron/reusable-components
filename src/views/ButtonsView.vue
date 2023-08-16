<template>
  <main>
    <h1 class="text-gray-2 text-2xl font-medium mb-6">Buttons</h1>
    <!-- Default Buttons -->
    <section :class="examples">
      <!-- Button Default -->
      <div>
        <span class="block text-gray-1 mb-3">
          &lt;BaseButton /&gt;
        </span>
        <base-button />
      </div>
    </section>
    <!-- Variant Outline -->
    <section :class="examples">
      <!-- Button Default -->
      <div>
        <span class="block text-gray-1 mb-3"> &lt;BaseButton :variant="'outline'" /&gt; </span>
        <base-button :variant="'outline'" />
      </div>
    </section>
    <!-- Variant Text -->
    <section :class="examples">
      <!-- Button Default -->
      <div>
        <span class="block text-gray-1 mb-3">&lt;BaseButton :variant="'text'" /&gt;</span>
        <base-button :variant="'text'" />
      </div>
    </section>
    <!-- Disable Shadow -->
    <section :class="examples">
      <div>
        <span class="block text-gray-1 mb-3">&lt;BaseButton :disableShadow="true" /&gt;</span>
        <base-button :disableShadow="true" />
      </div>
    </section>
    <!-- Disabled -->
    <section :class="examples">
      <!-- First example -->
      <div>
        <span class="block text-gray-1 mb-3">&lt;BaseButton :disabled="true" /&gt;</span>
        <base-button :disabled="true" />
      </div>
      <!-- Second Example -->
      <div>
        <span class="block text-gray-1 mb-3">&lt;BaseButton :variant="'outline'" :disabled="true" /&gt;</span>
        <base-button :variant="'outline'" :disabled="true" />
      </div>
      <!-- Third Example -->
      <div>
        <span class="block text-gray-1 mb-3">&lt;BaseButton :variant="'text'" :disabled="true" /&gt;</span>
        <base-button :variant="'text'" :disabled="true" />
      </div>
    </section>
    <!-- Sizes -->
    <section :class="examples">
      <!-- Size Small -->
      <div>
        <span class="block text-gray-1 mb-3">&lt;BaseButton :size="'sm'" /&gt;</span>
        <base-button :size="'sm'" />
      </div>
      <!-- Size Medium -->
      <div>
        <span class="block text-gray-1 mb-3">&lt;BaseButton :size="'md'" /&gt;</span>
        <base-button />
      </div>
      <!-- Size Large -->
      <div>
        <span class="block text-gray-1 mb-3">&lt;BaseButton :size="'lg'" /&gt;</span>
        <base-button :size="'lg'" />
      </div>
    </section>
  </main>
</template>

<script setup>

const examples = 'flex gap-32 w-fit mb-8'
</script>