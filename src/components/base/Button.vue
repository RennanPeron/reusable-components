<template>
    <button type="button" class="rounded-md flex gap-2" :class="[buttonClass]" :disabled="disabled">
        {{ buttonText ? buttonText : 'Default' }}
    </button>
</template>

<script>
import { ref } from 'vue'

export default {
    props: {
        buttonText: {
            required: false,
            type: String
        },
        icon: {
            required: false,
            type: String
        },
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
        size: {
            required: false,
            type: String,
            validator: function (value) {
                return [
                    'sm',
                    'md',
                    'lg',
                ].indexOf(value) !== -1
            }
        },
        color: {
            required: false,
            type: String,
            validator: function (value) {
                return [
                    'primary',
                    'secondary',
                    'danger',
                ].indexOf(value) !== -1
            }
        },
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
        const size = {
            default: ref('px-4 py-2'),
            sm: ref('px-3 py-1.5'),
            lg: ref('px-5 py-3')
        }

        let color = ref('bg-zinc-200')

        let hover = ref('bg-zinc-400')

        let shadow = ref('shadow-md shadow-zinc-300')

        const disabledColor = ref(props.variant ? props.variant == 'outline' ? 'border-2 border-zinc-400' : '' : 'bg-zinc-200')

        if (props.variant) {
            if (props.variant == 'outline') {
                color = ref('bg-white text-blue-500 border-2 border-blue-500')
                hover = ref('bg-blue-100 text-blue-500 border-2 border-blue-500')
            }
            else if (props.variant == 'text') {
                size.default = ref('inline-flex')
                color = ref('bg-white text-blue-500')
                hover = ref('bg-blue-100 text-blue-500')
                shadow = ref('')
            }
        }

        if (props.color && !props.disabled) {
            if (props.color == 'primary') {
                color = ref('bg-blue-600 text-white')
                hover = ref('bg-blue-800 text-white')
                shadow = ref('shadow-md shadow-blue-200')
            }
            else if (props.color == 'secondary') {
                color = ref('bg-slate-600 text-white')
                hover = ref('bg-slate-800 text-white')
                shadow = ref('shadow-md shadow-slate-200')
            } else if (props.color == 'danger') {
                color = ref('bg-red-600 text-white')
                hover = ref('bg-red-800 text-white')
                shadow = ref('shadow-md shadow-red-200')
            }
        }

        const buttonClass = [
            props.size ? (props.size == "sm" ? size.sm.value : props.size == "lg" ? size.lg.value : size.default.value) : size.default.value,
            props.disableShadow || props.disabled ? '' : shadow.value,
            props.disabled ? `${disabledColor.value} text-neutral-400` : `${color.value} hover:${hover.value}`
        ]

        return {
            buttonClass
        }
    }
}

</script>