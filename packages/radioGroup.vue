<template>
    <div class="hm-radio-group">
     <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "radio-group",
        provide () {
            return {
                'RadioGroup': this
            }
        },
        props: {
            value: null
        }
    }
</script>

<style scoped>

</style>