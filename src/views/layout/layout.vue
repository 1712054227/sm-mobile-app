<style scoped lang='scss'>
.layout {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  .layout-top {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: scroll;
  }
  .layout-bottom {
    width: 375px;
    height: 40px;
    padding-top: 7px;
    padding-bottom: 2px;
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    .layout-bottom-box {
      width: 50px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: center;
      color: rgba(153, 153, 153, 1);
      font-size: 14px;
      .layout-bottom-box-img {
        height: 23.1px;
      }
      .active {
        color: rgba(247, 96, 72, 1);
      }
      .home {
        img {
          width: 22.74px;
          height: 23.1px;
        }
      }
      .finca {
        img {
          width: 19px;
          height: 19px;
        }
      }
      .car {
        img {
          width: 22.87px;
          height: 21px;
        }
      }
      .mine {
        img {
          width: 21px;
          height: 21px;
        }
      }
    }
  }
}
</style>
<template>
  <div class="layout">
    <div class="layout-top">
      <!-- <home v-if="navList[0].active" />
      <mine v-if="navList[3].active" />
      <car v-if="navList[2].active" />
      <bazaar v-if="navList[1].active" />-->
    </div>
    <div class="layout-bottom" ref="bottom">
      <div
        class="layout-bottom-box"
        v-for="(item,index) in navList"
        :key="index"
        @click="cutDate(index)"
      >
        <div
          class="layout-bottom-box-img"
          :class="{'home':item.class==='home','finca':item.class==='finca','car':item.class==='car','mine':item.class==='mine'}"
        >
          <img :src="item.active?item.urlactive:item.img" alt />
        </div>
        <div class="layout-bottom-box-text" :class="{'active':item.active}">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>
<script>
// import Home from '../home/home'
// import car from '../car/car'
// import mine from '../mine/mine'
// import bazaar from '../bazaar/bazaar'
export default {
  data () {
    return {
      navList: [
        {
          name: '首页',
          active: true,
          class: 'home',
          img: require('./images/home.png'),
          urlactive: require('./images/home_active.png'),
          url: '/index.html#/home',
          sub: null
        },
        {
          name: '庄园',
          active: false,
          class: 'finca',
          img: require('./images/finca.png'),
          urlactive: require('./images/finca_active.png'),
          url: '/index.html#/finca',
          sub: null
        },
        {
          name: '购物车',
          active: false,
          class: 'car',
          img: require('./images/car.png'),
          urlactive: require('./images/car_active.png'),
          url: '/index.html#/car',
          sub: null
        },
        {
          name: '我的',
          active: false,
          class: 'mine',
          img: require('./images/mine.png'),
          urlactive: require('./images/mine_active.png'),
          url: '/index.html#/mine',
          sub: null
        }
      ],
      currentWB: {}
    }
  },
  created () {
    if (window.plus) {
      this.plusReady()
    } else {
      document.addEventListener('plusready', this.plusReady, false)
    }
  },
  mounted () { },
  methods: {
    plusReady () {
      this.currentWB = window.plus.webview.currentWebview()
      let bottom = this.$refs.bottom.clientHeight
      let safeBottom = this.currentWB.getSafeAreaInsets().deviceBottom
      // 关闭其余webview
      let all = window.plus.webview.all()
      if (all.length > 1) {
        for (let i = 0; i < all.length; i++) {
          if (all[i] !== this.currentWB) {
            all[i].close('none')
          }
        }
      }
      // 创建home页面webview
      this.navList[0].sub = window.plus.webview.create(this.navList[0].url, this.navList[0].class, {
        top: '0px',
        bottom: `${bottom + safeBottom}px`
      })
      this.currentWB.append(this.navList[0].sub)
    },

    cutDate (index) {
      let bottom = this.$refs.bottom.clientHeight
      let safeBottom = this.currentWB.getSafeAreaInsets().deviceBottom
      // 当前webview切换到当前webview不进行逻辑变更
      if (this.navList[index].sub === this.activeMenu[0].sub) {
        return
      }
      // 检测webview是否已创建，动态按需创建webview
      if (this.navList[index].sub) {
        window.plus.webview.hide(this.activeMenu[0].sub)
        window.plus.webview.show(this.navList[index].sub)
      } else {
        window.plus.webview.hide(this.activeMenu[0].sub)
        this.navList[index].sub = window.plus.webview.create(this.navList[index].url, this.navList[index].class, {
          top: '0px',
          bottom: `${bottom + safeBottom}px`
        })
        this.currentWB.append(this.navList[index].sub)
      }

      this.navList = this.navList.map(item => {
        item.active = false
        return item
      })
      this.navList[index].active = true
    }
  },
  computed: {
    activeMenu () {
      return this.navList.filter((item) => {
        return item.active
      })
    }
  }
}
</script>
