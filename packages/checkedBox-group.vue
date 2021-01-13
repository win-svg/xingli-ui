<template>
    <div class="checkedBox-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "checkedBox-group",
        props: {
          value: {
              type: Array,
          }
        },
        provide () {
           return {
               checkedBoxGroup: this
           }
        }
    }
</script>

<style scoped>

</style>