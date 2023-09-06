<template>
    <label class="flex flex-col text-gray-900" :class="{
        'focus-within:text-blue-400': !error,
        'focus-within:text-red-600 text-red-400': error,
        'w-fit': size != 'fullWidth'
    }">
        <span class="block mb-1 noto-sans text-xs">
            Label
        </span>
        <!-- Textarea Option -->
        <input v-if="!multiline" type="text" placeholder="Placeholder" class="rounded-lg border-2 hover:border-gray-900"
            :class="[classList], {
                'focus:border-blue-400 border-gray-400 text-gray-3': !error,
                'focus:border-red-600 border-red-400 text-gray-3': error,
                'bg-gray-200': disabled
            }" :disabled="disabled">

        <textarea v-else placeholder="Placeholder" class="rounded-lg border-2 overflow-hidden hover:border-gray-900" :class="[classList], {
            'focus:border-blue-400 border-gray-400 text-gray-3': !error,
            'focus:border-red-600 border-red-400 text-gray-3': error,
            'bg-gray-200': disabled
        }
            " :disabled="disabled" @input="resize($event)"></textarea>
    </label>
    <p class="mt-1 noto-sans text-[0.652rem]" :class="{ 'text-gray-3': !error, 'text-red-400': error }">{{ helperText }}
    </p>
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
            default: 'md',
            type: String,
            validator: function (value) {
                return [
                    'sm',
                    'md',
                    'fullWidth',
                ].indexOf(value) !== -1
            }
        },
        disabled: {
            required: false,
            type: Boolean
        },
        error: {
            required: false,
            type: Boolean
        },
        helperText: {
            type: String,
            default: ''
        },
        multiline: {
            type: Boolean,
            default: false
        }
    },
    setup(props) {
        const classList = ref([
            props.size == 'sm' ? 'px-3 py-2.5 w-48' : props.size == 'fullWidth' ? 'px-3 py-4 w-full' : 'px-3 py-4 w-48',
        ])

        function resize(e) {
            e.target.style.height = 'auto'
            e.target.style.height = `${e.target.scrollHeight}px`
        }

        return {
            classList,
            resize
        }
    }
}

</script>