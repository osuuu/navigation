<template>
  <div class="footer" >
      <span v-html="copyright"></span>
      <span v-html="beian"></span>
  </div>
</template>

<script>

  export default {
    data() {
      return {
       copyright:window.config.copyright,
       beian:window.config.beian
      }
    },

  }
</script>

<style lang="less" scoped>
  .footer {
      text-align: center;
      font-size: 14px;
      span{
          margin: 0 10px;
          margin-top: 10px;
      }
  }
</style>