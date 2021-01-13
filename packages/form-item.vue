<template>
    <div class="hm-form-item">
        <label class="hm-form-item_label" :style="{width: this.Form.labelWidth}">{{label}}</label>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "form-item",
        inject: ['Form'],
        props: {
            label: {
                type: String,
                default: ''
            },
        }
    }
</script>

<style scoped lang="scss">
.hm-form-item_label{
    display: inline-block;
}
</style>