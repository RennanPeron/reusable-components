<template>
    <label :for="id" class="flex flex-col w-fit text-gray-900 focus-within:text-blue-400">
        <span class="block mb-1 noto-sans text-xs">
            Label
        </span>
        <input :id="id" type="text" placeholder="Placeholder"
            class="rounded-lg px-3 py-4 border-2 border-gray-400 text-gray-400 hover:border-gray-900 focus:border-blue-400">
    </label>
</template>

<script>
export default {
    props: {
        id: {
            required: true,
            type: String
        }
    }
}

</script>