<template>
  <div class="menus" :style="`width:${$store.state.isMenuLayout ? '220' :'0'}px`">
    <div class="navbar-brand-box">
      <img src="../assets/images/logo-dark.png" />
    </div>
    <Menu v-show="$store.state.isMenuLayout" :active-name="activeName" width="auto">
      <a v-for="item in menuList" :href="'#'+item.name" :key="item.name">
        <MenuItem :name="item.name">
        <span :class="['osuu', item.icon]"></span>
        {{ item.name }}
        </MenuItem>
      </a>
    </Menu>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        menuList: window.config.menuList
      }
    },
 

  }
</script>

<style lang="less" scoped>
  .menus {
    position: fixed;
    left: 0;
    top: 0;
    background: #515a6e;
    overflow: hidden;
    // opacity: 0.6;
    height: 100vh;
    z-index: 5000;
    transition: all .3s;
    box-shadow: 1px 1px 5px #888888;

    .navbar-brand-box {
      width: 220px;
      height: 120px;
      text-align: left;

      img {
        margin: 0 auto;
        width: 140px;
        height: 140px;
      }
    }

    .osuu {
      margin-right: 5px;
    }

    .ivu-menu-light {
      background: transparent;

      .ivu-menu-item {
        overflow: hidden;
        color: #ffffff;
      }

      .ivu-menu-item-active {
        background: transparent;
        color: #2d8cf0;
      }

      .ivu-menu-item-active:not(.ivu-menu-submenu):after {
        width: 0;
      }

      .ivu-menu-item-active:not(.ivu-menu-submenu) {
        background: transparent;
      }


    }

    .ivu-menu-light:after {
      width: 0;
    }
  }
</style>