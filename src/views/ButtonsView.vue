<template>
  <main>
    <h2 class="text-gray-2 text-2xl font-medium mb-6">Buttons</h2>
    <!-- Default Buttons -->
    <section :class="examples">
      <!-- Button Default -->
      <div>
        <span class="block text-gray-1 mb-3">
          &lt;BaseButton /&gt;
        </span>
        <base-button />
      </div>
      <!-- Button Default -->
      <div>
        <span class="block text-gray-1 mb-3"> &lt;BaseButton :variant="'outline'" /&gt; </span>
        <base-button :variant="'outline'" />
      </div>
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
    <h2 class="text-gray-2 text-2xl font-medium mb-6">Size</h2>
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
    <h2 class="text-gray-2 text-2xl font-medium mb-6">Colors</h2>
    <!-- Colors -->
    <section :class="examples">
      <!-- Color: Primary -->
      <div>
        <span class="block text-gray-1 mb-3">&lt;BaseButton :color="'primary'" /&gt;</span>
        <base-button :color="'primary'" />
      </div>
      <!-- Color: edium -->
      <div>
        <span class="block text-gray-1 mb-3">&lt;BaseButton :color="'secondary'" /&gt;</span>
        <base-button :color="'secondary'" />
      </div>
      <!-- Color: arge -->
      <div>
        <span class="block text-gray-1 mb-3">&lt;BaseButton :color="'danger'" /&gt;</span>
        <base-button :color="'danger'" />
      </div>
    </section>
  </main>
</template>

<script setup>

const examples = 'flex gap-32 w-fit mb-8'
</script>