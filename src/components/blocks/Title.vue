<template>
    <h1 class="title" v-html="value" />
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            required: true
        }
    }
}
</script>