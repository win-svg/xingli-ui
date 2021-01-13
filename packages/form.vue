<template>
    <div class="hm-form">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "form",
        props: {
            model: {
                type: Object,
                required: true
            },
            labelWidth: {
                labelWidth: String,
                default: '80px'
            }
        },
        provide () {
            return {
                Form: this
            }
        }
    }
</script>

<style scoped>

</style>