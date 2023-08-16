<template>
  <main>
    <h1 class="text-gray-2 text-2xl font-medium mb-6">Buttons</h1>
    <!-- Default Buttons -->
    <section :class="examples">
      <!-- Button Default -->
      <div>
        <span class="block text-gray-1">
          &lt;Button /&gt;
        </span>
        <base-button />
      </div>
    </section>
    <!-- Variant Outline -->
    <section :class="examples">
      <!-- Button Default -->
      <div>
        <span class="block text-gray-1"> &lt;Button :variant="'outline'" /&gt; </span>
        <base-button :variant="'outline'" />
      </div>
    </section>
    <!-- Variant Text -->
    <section :class="examples">
      <!-- Button Default -->
      <div>
        <span class="block text-gray-1">&lt;Button :variant="'text'" /&gt;</span>
        <base-button :variant="'text'" />
      </div>
    </section>
    <!-- Disable Shadow -->
    <section :class="examples">
      <div>
        <span class="block text-gray-1">&lt;Button :disableShadow="true" /&gt;</span>
        <base-button :disableShadow="true" />
      </div>
    </section>
    <!-- Disabled -->
    <section :class="examples">
      <!-- First example -->
      <div>
        <span class="block text-gray-1">&lt;Button :disabled="true" /&gt;</span>
        <base-button :disabled="true" />
      </div>
      <!-- Second Example -->
      <div>
        <span class="block text-gray-1">&lt;Button :variant="'outline'" :disabled="true" /&gt;</span>
        <base-button :variant="'outline'" :disabled="true" />
      </div>
      <!-- Third Example -->
      <div>
        <span class="block text-gray-1">&lt;Button :variant="'text'" :disabled="true" /&gt;</span>
        <base-button :variant="'text'" :disabled="true" />
      </div>
    </section>
  </main>
</template>

<script setup>

const examples = 'flex gap-32 w-fit mb-8'
</script>