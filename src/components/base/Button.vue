<template>
    <button type="button" class="rounded-md" :class="[buttonClass]" :disabled="disabled">
        {{ buttonText ? buttonText : 'Default' }}
    </button>
</template>

<script>
import { ref } from 'vue'

export default {
    props: {
        variant: {
            required: false,
            type: String,
            validator: function (value) {
                return [
                    'outline',
                    'text',
                ].indexOf(value) !== -1
            }
        },
        buttonText: {
            required: false,
            type: String
        },
        // hover: {
        //     required: false,
        //     type: Boolean
        // },
        disableShadow: {
            required: false,
            type: Boolean
        },
        disabled: {
            required: false,
            type: Boolean
        },
    },
    setup(props) {
        let size = ref('px-4 py-2')

        let color = ref('bg-zinc-200')

        let hover = ref('bg-zinc-400')

        let shadow = ref('shadow-md shadow-zinc-300')

        if (props.variant) {
            if (props.variant == 'outline') {
                color = ref('bg-white text-blue-500 border-2 border-blue-500')
                hover = ref('bg-blue-100 text-blue-500 border-2 border-blue-500')
            }
            else if (props.variant == 'text') {
                color = ref('bg-white text-blue-500')
                hover = ref('bg-blue-100 text-blue-500')
                shadow = ref('')
            }
        }

        if (props.disableShadow)
            shadow = ref('')

        if (props.disabled) {
            color = ref(`${color.value} grayscale text-neutral-400`)
            hover = ref('')
        }

        const buttonClass = [size.value, `${color.value} hover:${hover.value}`, shadow.value]

        return {
            buttonClass
        }
    }
}

</script>