<style scoped lang='scss'>
.bazaar {
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  .bazaar-title {
    position: relative;
    width: 375px;
    .divslide {
      animation: slide 0.5s forwards;
    }

    @keyframes slide {
      0% {
        height: 0px;
      }
      100% {
        height: 124px;
      }
    }
    .bazaar-navbox {
      position: fixed;
      left: 10px;
      width: 355px;
      height: 0px;
      background: rgba(255, 255, 255, 1);
      border-radius: 10px;
      overflow: hidden;

      .bazaar-navbox-top {
        display: flex;
        justify-content: space-around;
        margin: 18px 0px 25px;
        .bazaar-navbox-top-box {
          height: 51px;
        }
        .bazaar-navbox-top-yuan {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          text-align: center;
          line-height: 40px;
          font-size: 16px;
          color: #ffffff;

          &.min {
            background-color: rgba(106, 154, 195, 1);
          }
          &.cha {
            background-color: rgba(166, 188, 123, 1);
          }
          &.jiu {
            background-color: rgba(168, 72, 72, 1);
          }
          &.yu {
            background-color: rgba(195, 173, 173, 1);
          }
          &.non {
            background-color: rgba(114, 183, 153, 1);
          }
        }
        .bazaar-navbox-top-bg {
          width: 12.75px;
          height: 5.5px;
          background: url("./images/bazaar_active.png") no-repeat;
          background-size: 12.75px 5.5px;
          margin: 5px auto 0px;
        }
      }
      .bazaar-navbox-botton {
        display: flex;
        justify-content: space-around;
        color: rgba(119, 119, 119, 1);
        font-size: 12px;
        .bazaar-navbox-botton-text {
          height: 20px;
        }
        .activelist {
          color: rgba(227, 94, 51, 1);
        }
      }
    }
    .bazaar-title-text {
      background-color: rgba(231, 95, 52, 1);
      text-align: center;
      line-height: 41px;
      color: #ffffff;
      font-size: 18px;
    }
  }
  .bazaar-wai {
    overflow: auto;
    .bazaar-box {
      width: 375px;

      .bazaar-top {
        width: 375px;
        height: 188px;
        background: url("./images/bazaar-bg.png") no-repeat;
        background-size: 375px 188px;
      }
      .bazaar-navbox {
        width: 355px;
        height: 124px;
        margin: 0px auto;
        background: rgba(255, 255, 255, 1);
        border-radius: 10px;
        overflow: hidden;

        .bazaar-navbox-top {
          display: flex;
          justify-content: space-around;
          margin: 18px 0px 25px;
          .bazaar-navbox-top-box {
            height: 51px;
          }
          .bazaar-navbox-top-yuan {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            text-align: center;
            line-height: 40px;
            font-size: 16px;
            color: #ffffff;

            &.min {
              background-color: rgba(106, 154, 195, 1);
            }
            &.cha {
              background-color: rgba(166, 188, 123, 1);
            }
            &.jiu {
              background-color: rgba(168, 72, 72, 1);
            }
            &.yu {
              background-color: rgba(195, 173, 173, 1);
            }
            &.non {
              background-color: rgba(114, 183, 153, 1);
            }
          }
          .bazaar-navbox-top-bg {
            width: 12.75px;
            height: 5.5px;
            background: url("./images/bazaar_active.png") no-repeat;
            background-size: 12.75px 5.5px;
            margin: 5px auto 0px;
          }
        }
        .bazaar-navbox-botton {
          display: flex;
          justify-content: space-around;
          color: rgba(119, 119, 119, 1);
          font-size: 12px;
          .bazaar-navbox-botton-text {
            height: 20px;
          }
          .activelist {
            color: rgba(227, 94, 51, 1);
          }
        }
      }
    }
    .bazaar-content {
      background-color: #f7f7f7f7;
      margin-top: 10px;
      &.over {
        overflow: auto;
      }
      .bazzar-content-box {
        width: 355px;
        height: 139px;
        margin: 0px auto 10px;
        background: rgba(255, 255, 255, 1);
        border-radius: 10px;
        display: flex;
        overflow: hidden;
        .bazzar-content-box-left {
          width: 120px;
          height: 120px;
          margin: 10px 20px 0px 9px;
          img {
            width: 120px;
            height: 120px;
          }
        }
        .bazzar-content-box-right {
          .bazzar-content-box-right-name {
            width: 195px;
            height: 35px;
            margin-top: 12px;
            font-size: 16px;
            color: #333333;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
          }
          .bazzar-content-box-right-price {
            width: 195px;
            height: 28px;
            margin: 20px 0px 5px;
            display: flex;
            justify-content: space-between;
            .bazzar-content-box-right-price-left {
              display: flex;
              font-size: 14px;
              align-items: baseline;
              color: #ffb846;
              .bazzar-content-box-right-price-left-num {
                font-size: 20px;
              }
            }
            .bazzar-content-box-right-price-right {
              width: 79px;
              height: 22px;
              margin-top: 2px;
              // background: url("./images/home_shoppingtrolley.png") no-repeat;
              background-size: 79px 22px;
            }
          }
          .bazzar-content-box-right-sales {
            width: 195px;
            height: 17px;
            display: flex;
            font-size: 12px;
            color: #999;
            justify-content: space-between;
            line-height: 17px;
          }
        }
      }
    }
  }
}
</style>
<template>
  <div class="bazaar">
    <div class="bazaar-title">
      <div class="bazaar-title-text">庄园集市</div>
      <div class="bazaar-navbox" :class="{'divslide':scro}" ref="div">
        <div class="bazaar-navbox-top">
          <div class="bazaar-navbox-top-box" v-for="(item,index) in navList" :key="index">
            <div
              class="bazaar-navbox-top-yuan"
              :class="`${ item.class }`"
              @click="cutState(index)"
            >{{item.name}}</div>
            <div :class="{'bazaar-navbox-top-bg':item.active}"></div>
          </div>
        </div>
        <div class="bazaar-navbox-botton">
          <div
            class="bazaar-navbox-botton-text"
            :class="{'activelist':it.actives}"
            v-for="(it,key) in list"
            :key="key"
            @click="cut(key)"
          >{{it.name}}</div>
        </div>
      </div>
    </div>
    <div
      class="bazaar-wai"
      ref="wai"
      :infinite-scroll-disabled="false"
      infinite-scroll-distance="300"
      infinite-scroll-immediate-check="false"
    >
      <div class="bazaar-box">
        <div class="bazaar-top"></div>
        <div class="bazaar-navbox" ref="div">
          <div class="bazaar-navbox-top">
            <div class="bazaar-navbox-top-box" v-for="(item,index) in navList" :key="index">
              <div
                class="bazaar-navbox-top-yuan"
                :class="`${ item.class }`"
                @click="cutState(index)"
              >{{item.name}}</div>
              <div :class="{'bazaar-navbox-top-bg':item.active}"></div>
            </div>
          </div>
          <div class="bazaar-navbox-botton">
            <div
              class="bazaar-navbox-botton-text"
              :class="{'activelist':it.actives}"
              v-for="(it,key) in list"
              :key="key"
              @click="cut(key)"
            >{{it.name}}</div>
          </div>
        </div>
      </div>
      <div class="bazaar-content">
        <div class="bazzar-content-box" v-for="(item,z) in 8" :key="z">
          <div class="bazzar-content-box-left">
            <img src="./images/icon_ce.png" alt />
          </div>
          <div class="bazzar-content-box-right">
            <div class="bazzar-content-box-right-name">茶叶礼盒装红茶金骏 眉正山 小种罐装茶叶礼盒装红茶金骏 眉正山 小种罐装</div>
            <div class="bazzar-content-box-right-price">
              <div class="bazzar-content-box-right-price-left">
                ￥
                <div class="bazzar-content-box-right-price-left-num">2688</div>
              </div>
              <div class="bazzar-content-box-right-price-right"></div>
            </div>
            <div class="bazzar-content-box-right-sales">
              <div class="bazzar-content-box-right-sales-left">日销10件</div>
              <div class="bazzar-content-box-right-sales-right">增工分1198元</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      scro: false,
      navList: [
        {
          name: '民宿',
          active: true,
          class: 'min'
        }, {
          name: '茶庄',
          active: false,
          class: 'cha'
        }, {
          name: '酒庄',
          active: false,
          class: 'jiu'
        }, {
          name: '渔业',
          active: false,
          class: 'yu'
        }, {
          name: '农业',
          active: false,
          class: 'non'
        }
      ],
      list: [
        {
          name: '最新上架',
          actives: true
        },
        {
          name: '综合',
          actives: false
        },
        {
          name: '销量',
          actives: false
        },
        {
          name: '价格',
          actives: false
        }
      ]
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.wai.addEventListener('scroll', this.scrollListen, false)
    })
  },
  methods: {
    scrollListen () {
      console.log(this.$refs.wai.scrollTop)
      if (this.$refs.wai.scrollTop >= 300) {
        this.scro = true
      } else {
        this.scro = false
      }
    },
    cutState (index) {
      this.navList = this.navList.map(item => {
        item.active = false
        return item
      })
      this.navList[index].active = true
    },
    cut (key) {
      this.list = this.list.map(it => {
        it.actives = false
        return it
      })
      this.list[key].actives = true
    }
  }
}
</script>
