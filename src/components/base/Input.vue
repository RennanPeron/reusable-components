<template>
    <label class="flex flex-col text-gray-900 " :class="{
        'focus-within:text-blue-400': !error,
        'focus-within:text-red-600 text-red-400': error
    }">
        <span class="block mb-1 noto-sans text-xs">
            Label
        </span>
        <input type="text" placeholder="Placeholder" class="rounded-lg border-2 hover:border-gray-900" :class="{
            'focus:border-blue-400 border-gray-400 text-gray-3': !error,
            'focus:border-red-600 border-red-400 text-gray-3': error,
            'px-3 py-4': !size || size == 'md',
            'bg-gray-200': disabled
        }" :disabled="disabled">
    </label>
</template>

<script>
import { ref } from 'vue';

export default {
    props: {
        id: {
            required: false,
            type: String
        },
        size: {
            required: false,
            type: String
        },
        disabled: {
            required: false,
            type: Boolean
        },
        error: {
            required: false,
            type: Boolean
        }
    },
    setup() {


        return {

        }
    }
}

</script>