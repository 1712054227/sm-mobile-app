<style scoped lang='scss'>
.home {
  .home-title {
    width: 375px;
    height: 92px;
    overflow: hidden;
    background: linear-gradient(
      136deg,
      rgba(231, 95, 52, 1) 0%,
      rgba(252, 117, 74, 1) 29%,
      rgba(239, 107, 66, 1) 55%,
      rgba(253, 93, 42, 1) 80%,
      rgba(252, 103, 56, 1) 93%,
      rgba(244, 137, 103, 1) 100%
    );
    .home-title-box {
      width: 355px;
      margin: 0px auto;
      display: flex;
      justify-content: space-between;
      .home-title-box-left {
        width: 23.46px;
        height: 22.72px;
        margin-top: 8px;
        background: url("./images/sweep.png") no-repeat;
        background-size: 23.46px 22.72px;
      }
      .home-title-box-right {
        width: 25.17px;
        height: 21.76px;
        margin-top: 11px;
        background: url("../../assets/info.png") no-repeat;
        background-size: 25.17px 21.76px;
      }
      .home-title-box-centre {
        width: 265px;
        height: 30px;
        border-radius: 15px;
        background: url("./images/icon_search.png") left no-repeat;
        background-size: 18.83px 19.41px;
        background-position-x: 10px;
        background-color: #fff;
        font-size: 14px;
        color: rgba(204, 204, 204, 1);
        line-height: 30px;
        text-indent: 35px;
        margin-top: 6px;
      }
    }
  }
  .home-conter {
    flex: 1;
    background-color: #f7f7f7;
    border-radius: 25px 25px 0 0;
    margin-top: -40px;
    padding-bottom: 3px;
    overflow: scroll;

    .home-conter-swper {
      width: 355px;
      height: 150px;
      margin: 0px auto 0px;
      border-radius: 10px;
      overflow: hidden;
      img {
        width: 355px;
        height: 150px;
        border-radius: 10px;
      }
    }
    .home-conter-navbox {
      width: 355px;
      height: 190px;
      background: rgba(255, 255, 255, 1);
      border-radius: 10px;
      margin: 10px auto 0px;
      text-align: center;
      .home-conter-navbox-top {
        display: flex;
        justify-content: space-around;
        .home-conter-navbox-box {
          width: 42px;
          margin: 16px 0px 26px;
          .home-conter-navbox-box-name {
            color: rgba(119, 119, 119, 1);
            font-size: 16px;
          }
          .home-conter-navbox-box-img {
            width: 42px;
            height: 42px;
          }
          .market {
            background: url("./images/home_market.png") no-repeat;
            background-size: 41px;
          }
          .money {
            background: url("./images/home_money.png") no-repeat;
            background-size: 42px 41px;
          }
          .suzerain {
            background: url("./images/home_suzerain.png") no-repeat;
            background-size: 38px;
          }
          .liquor {
            background: url("./images/home_liquor.png") no-repeat;
            background-size: 39px;
          }
        }
      }
      .home-conter-navbox-bottom {
        display: flex;
        justify-content: space-around;
        .home-conter-navbox-box1 {
          width: 42px;
          .home-conter-navbox-box-name {
            color: rgba(119, 119, 119, 1);
            font-size: 16px;
          }
          .home-conter-navbox-box-img {
            width: 42px;
            height: 42px;
          }
          .tea {
            background: url("./images/home_tea.png") no-repeat;
            background-size: 37px;
          }
          .fish {
            background: url("./images/home_fish.png") no-repeat;
            background-size: 37px;
          }
          .town {
            background: url("./images/home_town.png") no-repeat;
            background-size: 41px;
          }
          .desk {
            background: url("./images/home_desk.png") no-repeat;
            background-size: 42px;
          }
        }
      }
    }
    .home-conter-advertising {
      width: 355px;
      height: 64px;
      background: rgba(255, 255, 255, 1);
      border-radius: 10px;
      margin: 10px auto 18px;
      overflow: hidden;
      display: flex;
      .home-conter-advertising-left {
        margin-top: 11px;
        margin-left: 10px;
        display: flex;
        .home-conter-advertising-left-xian {
          width: 0px;
          height: 20px;
          border: 1px solid rgba(194, 82, 80, 1);
          background-color: rgba(194, 82, 80, 1);
          margin: 10px 9px 0px;
        }
        .home-conter-advertising-left-img {
          width: 36px;
          height: 42px;
          background: url("./images/home_manor.png") no-repeat;
          background-size: 36px 42px;
        }
      }
      .home-conter-advertising-right {
        font-size: 14px;
        line-height: 20px;
        color: rgba(153, 153, 153, 1);
        .home-conter-advertising-right-top {
          width: 280px;
          height: 20px;
          margin-top: 11px;
          margin-bottom: 3px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          overflow: hidden;
        }
        .home-conter-advertising-right-bottom {
          width: 280px;
          height: 20px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          overflow: hidden;
        }
      }
    }
    .home-conter-boutique {
      width: 355px;
      height: 220px;
      margin: 0px auto;
      background: url("./images/home_bg.png") no-repeat;
      background-size: 375px 240px;
      .home-conter-boutique-title {
        width: 206px;
        height: 29px;
        margin: 18px auto 16px;
        background: url("./images/home_boutique.png") no-repeat;
        background-size: 206px 29px;
      }
      .home-conter-boutique-frame {
        display: flex;
        .home-conter-boutique-box {
          width: 113px;
          height: 150px;
          margin-right: 8px;
          background: rgba(255, 255, 255, 1);
          border-radius: 4px;
          .home-conter-boutique-box-img {
            width: 113px;
            height: 113px;
            img {
              width: 113px;
              height: 113px;
            }
          }
          .home-conter-boutique-box-name {
            width: 105px;
            height: 17px;
            margin: 2px auto 0px;
            line-height: 17px;
            color: rgba(0, 0, 0, 1);
            font-weight: bold;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
          }
          .home-conter-boutique-box-degree {
            color: rgba(153, 153, 153, 1);
            font-size: 14px;
            margin-left: 6px;
          }
        }
      }
    }
    .home-conter-vertical {
      width: 355px;
      height: 139px;
      margin: 0px auto 10px;
      background: rgba(255, 255, 255, 1);
      border-radius: 10px;
      display: flex;
      overflow: hidden;
      .home-conter-vertical-left {
        width: 120px;
        height: 120px;
        margin: 10px 20px 0px 9px;
        img {
          width: 120px;
          height: 120px;
        }
      }
      .home-conter-vertical-right {
        .home-conter-vertical-right-name {
          width: 195px;
          height: 38px;
          margin-top: 12px;
          font-size: 16px;
          color: #333333;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        .home-conter-vertical-right-price {
          width: 195px;
          height: 28px;
          margin: 20px 0px 5px;
          display: flex;
          justify-content: space-between;
          .home-conter-vertical-right-price-left {
            display: flex;
            font-size: 14px;
            align-items: baseline;
            color: #ffb846;
            .home-conter-vertical-right-price-left-num {
              font-size: 20px;
            }
          }
          .home-conter-vertical-right-price-right {
            width: 79px;
            height: 22px;
            margin-top: 2px;
            background: url("./images/home_shoppingtrolley.png") no-repeat;
            background-size: 79px 22px;
          }
        }
        .home-conter-vertical-right-sales {
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
  .swiper-slide {
    width: auto;
  }
}
</style>
<template>
  <div class="home">
    <div class="home-title">
      <div class="home-title-box">
        <div class="home-title-box-left"></div>
        <div class="home-title-box-centre">请输入关键词</div>
        <div class="home-title-box-right"></div>
      </div>
    </div>
    <div class="home-conter">
      <div class="home-conter-swper">
        <swiper :options="swiperOption1">
          <swiper-slide v-for="(item,index) in 6" :key="index">
            <img src="./images/swper.png" alt />
          </swiper-slide>
        </swiper>
      </div>
      <div class="home-conter-navbox">
        <div class="home-conter-navbox-top">
          <div class="home-conter-navbox-box" v-for="(item,index) in list" :key="index">
            <div
              class="home-conter-navbox-box-img"
              :class="{
            'market':item==='集市',
            'money':item==='钱袋',
            'suzerain':item==='庄主',
            'liquor':item==='酒庄',
            }"
            ></div>
            <div class="home-conter-navbox-box-name">{{item}}</div>
          </div>
        </div>
        <div class="home-conter-navbox-bottom">
          <div class="home-conter-navbox-box1" v-for="(item,index) in list1" :key="index">
            <div
              class="home-conter-navbox-box-img"
              :class="{
            'tea':item==='茶庄',
            'town':item==='农庄',
            'fish':item==='鱼庄',
            'desk':item==='民宿'
            }"
            ></div>
            <div class="home-conter-navbox-box-name">{{item}}</div>
          </div>
        </div>
      </div>
      <div class="home-conter-advertising">
        <div class="home-conter-advertising-left">
          <div class="home-conter-advertising-left-img"></div>
          <div class="home-conter-advertising-left-xian"></div>
        </div>
        <div class="home-conter-advertising-right">
          <div class="home-conter-advertising-right-top">都有哪些心仪的产品想收？自己的仪的产品想收？自己的钱包君是</div>
          <div class="home-conter-advertising-right-bottom">都有哪些心仪的产品想收？自己仪的产品想收？自己的的钱包君是</div>
        </div>
      </div>
      <div class="home-conter-boutique">
        <div class="home-conter-boutique-title"></div>

        <div class="home-conter-boutique-frame">
          <swiper :options="swiperOption">
            <swiper-slide v-for="(item,index) in 6" :key="index">
              <div class="home-conter-boutique-box">
                <div class="home-conter-boutique-box-img">
                  <img src="../search/images/icon_ce.png" alt />
                </div>
                <div class="home-conter-boutique-box-name">1989封坛原浆</div>
                <div class="home-conter-boutique-box-degree">60%vol</div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="home-conter-vertical" v-for="(item,index) in 3" :key="index">
        <div class="home-conter-vertical-left">
          <img src="../search/images/icon_ce.png" alt />
        </div>
        <div class="home-conter-vertical-right">
          <div class="home-conter-vertical-right-name">茶叶礼盒装红茶金骏 眉正山 小种罐装茶叶礼盒装红茶金骏 眉正山 小种罐装</div>
          <div class="home-conter-vertical-right-price">
            <div class="home-conter-vertical-right-price-left">
              ￥
              <div class="home-conter-vertical-right-price-left-num">2688</div>
            </div>
            <div class="home-conter-vertical-right-price-right"></div>
          </div>
          <div class="home-conter-vertical-right-sales">
            <div class="home-conter-vertical-right-sales-left">日销10件</div>
            <div class="home-conter-vertical-right-sales-right">增工分1198元</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data () {
    return {
      list: ['集市', '钱袋', '庄主', '酒庄'],
      list1: ['茶庄', '农庄', '鱼庄', '民宿'],
      swiperOption: {
        slidesPerView: 'auto',
        freeMode: true,
        freeModeMinimumVelocity: 1
      },
      swiperOption1: {
        slidesPerView: 1,
        loop: true,
        autoplay: true
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>
