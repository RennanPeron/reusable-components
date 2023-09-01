<template>
    <div class="w-full px-10 pt-4 absolute text-center inline lg:hidden ">
        <button @click.prevent="modal.toggleModal" class="float-left"><span class="material-symbols-outlined">
                menu
            </span></button>
        <h1>
            <span class="text-[#F7542E]">Dev</span>challengs.io
        </h1>
    </div>

    <header :class="{ 'hidden': !modal.isOpen }" class="lg:block fixed h-screen col-auto bg-[#FAFBFD] px-10 pt-4">
        <h1 class="mb-28 hidden lg:block"><span class="text-[#F7542E]">Dev</span>challengs.io</h1>

        <button @click.prevent="modal.toggleModal"
            class="mb-10 block lg:hidden rounded-full bg-white w-10 h-10 flex justify-center items-center">
            <span class="material-symbols-outlined">
                close
            </span>
        </button>

        <nav>
            <ul class="list-none grid gap-8">
                <li><base-button :text="'Colors'" :disabled="true" :variant="'text'" /></li>
                <li><base-button :text="'Typography'" :disabled="true" :variant="'text'" /></li>
                <li><base-button :text="'Spaces'" :disabled="true" :variant="'text'" /></li>
                <li>
                    <router-link to="buttons">
                        Buttons
                    </router-link>
                </li>
                <li>
                    <router-link to="inputs">
                        Inputs
                    </router-link>
                </li>
                <li><base-button :text="'Grid'" :disabled="true" :variant="'text'" /></li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
import { useModalStore } from "@/stores/modal"

const modal = useModalStore()
</script>