<template>
    <label :for="id" class="flex flex-col text-gray-900 focus-within:text-blue-400">
        <span class="block mb-1 noto-sans text-xs">
            Label
        </span>
        <input :id="id" type="text" placeholder="Placeholder" class="rounded-lg border-2" :class="{
            'px-3 py-4': !size || size == 'md',
            'border-gray-400 text-gray-3 hover:border-gray-900 focus:border-blue-400': true,
            'bg-gray-200': disabled
        }" :disabled="disabled">
    </label>
</template>

<script>
export default {
    props: {
        id: {
            required: true,
            type: String
        },
        size: {
            required: false,
            type: String
        },
        disabled: {
            required: false,
            type: Boolean
        }
    }
}

</script>