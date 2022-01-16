<template>
  <div :class="['pages',bgStatus]">
    <MenuLayout></MenuLayout>
    <div class="showMenu" @click="$store.state.isMenuLayout = !$store.state.isMenuLayout"
      :style="`left:${$store.state.isMenuLayout ? '240' :'20'}px`">
      <span :class="['osuu', $store.state.isMenuLayout ? 'geek-shouqi1' :'geek-zhankai1']"></span>
    </div>
    <div class="github">
      <a href="https://github.com/osuuu/navigation" target="_blank">GitHub </a>
    </div>

    <div class="pages-search">
      <div class="pages-search-bg"></div>
      <div class="pages-search-logo">
        <img src="../assets/images/logo.png" alt="h234.cn">
      </div>
      <div class="pages-search-input">
        <Input prefix="ios-contact" v-model="searchValue" search enter-button="搜索" size="large"
          @on-search="searchClick" />
        <Select v-model="searchItem" style="width:auto" @on-change="selectChange">
          <Option v-for="item in searchList" :key="item.url" :value="item.url">{{item.name}}</Option>
        </Select>
      </div>
      <div class="pages-search-weather">
        <iframe width="300" scrolling="no" height="100" frameborder="0" allowtransparency="true"
          src="https://i.tianqi.com?c=code&id=35&color=%23FFFFFF&icon=1&site=34"></iframe> </div>
    </div>

    <div class="pages-body" v-for="(row,i) in menuList" :key="row.name" :id="row.name">
      <div class="pages-body-title" v-show="i > 0">
        <span :class="['osuu', row.icon]"></span>
        {{row.name}}
      </div>
      <Row :gutter="20">
        <Col :xl="6" :lg="6" :md="8" :sm="24" :xs="24" v-for="(item,index) in row.list" :key="index">
        <Card>
          <div @click="toUrl(item.url)">
            <div class="logo">
              <img :src="item.icon" alt="h234.cn">
            </div>
            <div class="cont">
              <p class="name"> {{item.name}} </p>
              <p class="desc"> {{item.desc}} </p>
            </div>
            <div style="clear:both"></div>
          </div>
        </Card>
        </Col>

      </Row>

    </div>

    <Footer></Footer>
  </div>
</template>

<script>
  import {
    mapMutations
  } from "vuex";
  import MenuLayout from "../components/Menu.vue"
  import Footer from "../components/Footer.vue"
  export default {
    data() {
      return {
        bgStatus: "day",
        searchList: [{
            url: 'https://www.baidu.com/s?wd=',
            name: '百度'
          },
          {
            url: 'https://www.sogou.com/tx?query=',
            name: '搜狗'
          },
          {
            url: 'https://cn.bing.com/search?q=',
            name: '必应'
          },
          {
            url: 'https://www.google.com.hk/search?q=',
            name: '谷歌'
          }
        ],
        searchItem: 'https://www.baidu.com/s?wd=',
        searchValue: "",
        menuList: window.config.menuList
      };
    },
    components: {
      MenuLayout,
      Footer
    },
    created() {
      this.searchItem = localStorage.getItem('searchItem') ? localStorage.getItem('searchItem') :
        'https://www.baidu.com/s?wd='
      let now = new Date(),
        hour = now.getHours()
      if (hour < 9 || hour > 20) {
        this.bgStatus = "night"
      } else {
        this.bgStatus = "day"
      }
    },
    methods: {
      ...mapMutations(["goUrl"]),
      searchClick() {
        this.goUrl(this.searchItem + this.searchValue)
      },
      toUrl(e) {
        this.goUrl(e)
      },
      selectChange(e) {
        localStorage.setItem('searchItem', e)
      }
    },
  };
</script>

<style scoped lang="less">
  .pages {
    min-height: 100vh;
    position: relative;
    padding-top: 50px;
    padding-bottom: 20px;

    .showMenu {
      background: #fff;
      opacity: 0.2;
      position: fixed;
      top: 20px;
      width: 50px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      border-radius: 5px;
      transition: all .3s;
      cursor: pointer;
      z-index: 4000;
      box-shadow: 1px 1px 5px #888888;

      span {
        font-size: 30px;
        color: #272525;
      }
    }

    .github {
      position: absolute;
      right: 20px;
      top: 10px;
      font-size: 18px;

      a {
        color: #ffffff;
      }
      a:hover{
        color: #9ce0fe;
      }
    }

    .pages-search {
      margin: 10px auto;
      padding: 20px;
      max-width: 1152px;
      border-radius: 5px;
      position: relative;
      display: flex;
      justify-content: space-between;

      .pages-search-logo {
        width: 200px;
        position: relative;

        img {
          width: 200px;
          position: absolute;
          transform: translateY(-50%);
          top: 50%;
        }
      }

      .pages-search-input {
        position: relative;
        width: 500px;

        .ivu-input-group {
          position: absolute;
          transform: translateY(-50%);
          top: 50%;
        }

        .ivu-select {
          position: absolute;
          transform: translateY(-50%);
          top: 50%;
          right: 80px;
          z-index: 4000;

          /deep/.ivu-select-selection {
            border: 0;
          }

          /deep/.ivu-select-selected-value {
            font-size: 12px;
          }
        }

      }

      .pages-search-bg {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        border-radius: 5px;
        background: #fff;
        opacity: 0.2;
      }
    }

    .pages-body {
      margin: 10px auto;
      padding: 10px 20px;
      max-width: 1152px;
      border-radius: 5px;
      background: #ffffff;

      .pages-body-title {
        font-size: 16px;
        font-weight: 600;
      }

      .ivu-card {
        cursor: pointer;
        position: relative;
        margin: 10px 0;

        .logo {
          float: left;
          padding: 7px 0;

          img {
            width: 40px;
            height: 40px;
          }
        }

        .cont {
          transform: translateY(-50%);
          position: absolute;
          margin-left: 50px;
          top: 50%;

          .name {
            font-size: 14px;
            font-weight: 700;
            color: #3273dc;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .desc {
            color: gray;
            font-size: 12px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
        }
      }
    }
  }

  .day {
    background: url("../assets/images/day_cloud.png"), linear-gradient(180deg, #0260ac, #3992e0 36%, #9ce0fe 77%, #eff9fd);
  }

  .night {
    background-image: url('../assets/images/night_star.png'), linear-gradient(180deg, #1c1e25, #1d516d 40%, #f0f4f5 80%);
  }

  @media (max-width: 1200px) {

    .pages-body,
    .pages-search {
      width: 95% !important;
    }
  }

  @media (max-width: 992px) {
    .pages {
      padding-top: 10px;

      .github {
        display: none;
      }
    }

    .pages-body {
      width: 95% !important;
    }

    .pages-search {
      display: block !important;
      height: 190px;
      margin: 0 10px !important;
    }

    .pages-search-logo {
      width: 100% !important;
      text-align: center;
      height: 100px;

      img {
        position: inherit !important;
      }
    }

    .pages-search-input {
      width: auto !important;
    }

    .pages-search-weather {
      display: none;
    }
  }
</style>