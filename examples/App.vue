<template>
  <div id="app">
    <Hmbutton plain icon="el-icon-delete" circle type="danger"></Hmbutton>
    <Hmbutton type="primary">按钮</Hmbutton>
          <radio-group v-model="gender">
              <radio label="1">男</radio>
              <radio label="0">女</radio>
          </radio-group>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      gender: '1'
    }
  }
}
</script>

<style lang="scss">
</style>
