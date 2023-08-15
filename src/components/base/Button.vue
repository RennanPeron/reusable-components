<template>
    <button type="button" class="rounded-md" :class="[buttonClass]">
        {{ buttonText ? buttonText : 'Default' }}
    </button>
</template>

<script>
import { ref } from 'vue'

export default {
    props: {
        variant: {
            required: false,
            type: String
        },
        buttonText: {
            required: false,
            type: String
        },
        hover: {
            required: false,
            type: Boolean
        }
    },
    setup(props) {
        let size = ref('px-4 py-2')

        let color = ref('bg-zinc-200 hover:bg-zinc-400 shadow-md shadow-zinc-300')

        let hover = ref('bg-zinc-400 shadow-md shadow-zinc-300')

        if (props.variant) {
            if (props.variant == 'outline') {
                color = ref('bg-white hover:bg-blue-100 text-blue-500 border-2 border-blue-500')
                hover = ref('bg-blue-100 text-blue-500 border-2 border-blue-500')
            }
            else if (props.variant == 'text') {
                color = ref('bg-white hover:bg-blue-100 text-blue-500')
                hover = ref('bg-blue-100 text-blue-500')
            }
        }

        const buttonClass = [size.value, props.hover ? hover.value : color.value,]

        return {
            buttonClass
        }
    }
}

</script>