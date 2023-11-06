<template>
    <button class="burger-button" :class="{ 'burger-button_active': active }" @click="toggleActive">
        <span class="burger-button__item" />
        <span class="burger-button__item" />
        <span class="burger-button__item" />
    </button>
</template>
<script>

export default {
    props: {
        active: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        toggleActive() {
            this.$emit('toggleActive')
        }
    }
}
</script>