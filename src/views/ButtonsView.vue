<template>
  <main>
    <h2 class="text-gray-2 text-2xl font-medium mb-6 first:mt-0 mt-10">Buttons</h2>
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
    <h2 class="text-gray-2 text-2xl font-medium mb-6 mt-10">Icons</h2>
    <!-- Icons -->
    <section :class="examples">
      <!-- First example -->
      <div>
        <span class="block text-gray-1 mb-3">&lt;BaseButton v-button-icon="'shopping_cart'" /&gt;</span>
        <base-button v-button-icon="'shopping_cart'" />
      </div>
      <!-- Second Example -->
      <div>
        <span class="block text-gray-1 mb-3">&lt;BaseButton v-button-icon:end="'payment'"
          :variant="'text'" /&gt;</span>
        <base-button v-button-icon:end="'payment'" :variant="'text'" />
      </div>
      <!-- Third Example -->
      <div>
        <span class="block text-gray-1 mb-3">&lt;BaseButton v-button-icon:end="'analytics'" :buttonText="'Analytics'"
          :color="'primary'" /&gt;</span>
        <base-button v-button-icon:end="'analytics'" :buttonText="'Analytics'" :color="'primary'" />
      </div>
      <!-- Fourth Example -->
      <div>
        <span class="block text-gray-1 mb-3">&lt;BaseButton v-button-icon="'qr_code_scanner'" :buttonText="'QR Code'"
          :color="'secondary'" /&gt;</span>
        <base-button v-button-icon="'qr_code_scanner'" :buttonText="'QR Code'" :color="'secondary'" />
      </div>
      <!-- Fifth Example -->
      <div>
        <span class="block text-gray-1 mb-3">&lt;BaseButton v-button-icon="'wallet'" :buttonText="'Wallet'"
          :variant="'outline'" /&gt;</span>
        <base-button v-button-icon="'wallet'" :buttonText="'Wallet'" :variant="'outline'" />
      </div>
    </section>
    <h2 class="text-gray-2 text-2xl font-medium mb-6 mt-10">Size</h2>
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
    <h2 class="text-gray-2 text-2xl font-medium mb-6 mt-10">Colors</h2>
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

const examples = 'examples flex flex-wrap w-fit mb-8 gap-x-16 gap-y-8 lg:gap-x-32 '
</script>