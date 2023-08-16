<template>
  <main>
    <h1 class="text-gray-2 text-2xl font-medium mb-6">Buttons</h1>
    <!-- Default Buttons -->
    <div :class="examples">
      <!-- Button Default -->
      <div>
        <span class="block text-gray-1">
          &lt;Button /&gt;
        </span>
        <base-button />
      </div>
      <!-- Button Hover Active -->
      <div>
        <span class="block text-gray-3">
          &:hover, &:focus
        </span>
        <base-button :hover="true" />
      </div>
    </div>
    <!-- Variant Outline -->
    <div :class="examples">
      <!-- Button Default -->
      <div>
        <span class="block text-gray-1"> &lt;Button :variant="'outline'" /&gt; </span>
        <base-button :variant="'outline'" />
      </div>
      <!-- Button Hover Active -->
      <div>
        <span class="block text-gray-3">
          &:hover, &:focus
        </span>
        <base-button :variant="'outline'" :hover="true" />
      </div>
    </div>
    <!-- Variant Text -->
    <div :class="examples">
      <!-- Button Default -->
      <div>
        <span class="block text-gray-1">&lt;Button :variant="'text'" /&gt;</span>
        <base-button :variant="'text'" />
      </div>
      <!-- Button Hover Active -->
      <div>
        <span class="block text-gray-3">&:hover, &:focus</span>
        <base-button :variant="'text'" :hover="true" />
      </div>
    </div>
    <!-- Disable Shadow -->
    <div :class="examples">
      <div>
        <span class="block text-gray-1">&lt;Button :disableShadow="true" /&gt;</span>
        <base-button :disableShadow="true" />
      </div>
    </div>
    <!-- Disabled -->
    <div :class="examples">
      <!-- First example -->
      <div>
        <span class="block text-gray-1">&lt;Button :disabled="true" /&gt;</span>
        <base-button :disabled="true" />
      </div>
      <!-- Second Example -->
      <div>
        <span class="block text-gray-1">&lt;Button :variant="'text'" :disabled="true" /&gt;</span>
        <base-button :variant="'text'" :disabled="true" />
      </div>
    </div>
  </main>
</template>

<script setup>

const examples = 'flex gap-40 w-fit mb-8'
</script>