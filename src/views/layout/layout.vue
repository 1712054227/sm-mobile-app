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
      <home v-if="navList[0].active" />
      <mine v-if="navList[3].active" />
      <car v-if="navList[2].active" />
      <bazaar v-if="navList[1].active" />
    </div>
    <div class="layout-bottom">
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
          <img :src="item.active?item.urlactive:item.url" alt />
        </div>
        <div class="layout-bottom-box-text" :class="{'active':item.active}">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import Home from '../home/home'
import car from '../car/car'
import mine from '../mine/mine'
import bazaar from '../bazaar/bazaar'
export default {
  data () {
    return {
      navList: [
        {
          name: '首页',
          active: true,
          class: 'home',
          url: require('./images/home.png'),
          urlactive: require('./images/home_active.png')
        },
        {
          name: '庄园',
          active: false,
          class: 'finca',
          url: require('./images/finca.png'),
          urlactive: require('./images/finca_active.png')
        },
        {
          name: '购物车',
          active: false,
          class: 'car',
          url: require('./images/car.png'),
          urlactive: require('./images/car_active.png')
        },
        {
          name: '我的',
          active: false,
          class: 'mine',
          url: require('./images/mine.png'),
          urlactive: require('./images/mine_active.png')
        }
      ]
    }
  },
  methods: {
    cutDate (index) {
      this.navList = this.navList.map(item => {
        item.active = false
        return item
      })
      this.navList[index].active = true
    }
  },
  components: {
    Home,
    mine,
    car,
    bazaar
  }
}
</script>
