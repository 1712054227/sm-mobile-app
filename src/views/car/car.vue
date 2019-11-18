<style scoped lang='scss'>
.car {
  flex: 1;
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  .car-bottom {
    width: 375px;
    height: 49px;
    line-height: 49px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    .car-bottom-left {
      display: flex;
      color: rgba(119, 119, 119, 1);
      font-size: 16px;

      text-indent: 30px;
      margin-left: 20px;
    }
    .car-bottom-right {
      display: flex;
      line-height: 30px;
      text-align: center;
      .car-bottom-right-collect {
        width: 112px;
        height: 30px;
        margin-top: 10px;
        border: 1px solid rgba(255, 184, 70, 1);
        border-radius: 18px;
        font-size: 16px;
        color: rgba(255, 184, 70, 1);
      }
      .car-bottom-right-del {
        width: 61px;
        height: 30px;
        border: 1px solid rgba(231, 95, 52, 1);
        border-radius: 18px;
        margin-top: 10px;
        color: rgba(231, 95, 52, 1);
        margin: 10px 10px 0px;
      }
    }
  }
  .car-top {
    flex: 1;

    .car-top-box {
      width: 355px;
      min-height: 189px;
      background: #ffffff;
      border-radius: 10px;
      margin: 10px auto;
      overflow: hidden;
      .car-top-box-title {
        height: 40px;
        padding-left: 10px;
        margin-top: 11px;
        // background: url("./images/car_yuan.png") left no-repeat;
        // background-size: 21px;
        background-position: 10px 0px;
        text-indent: 30px;
        color: rgba(51, 51, 51, 1);
        font-size: 16px;
        font-weight: bold;
        border-bottom: 1px solid rgba(240, 240, 240, 1);
        margin-bottom: 13px;
      }
      .car-top-box-commodity {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        .car-top-box-commodity-img {
          height: 116px;
          // background: url("./images/car_yuan.png") left no-repeat;
          // background-size: 21px;
          background-position-x: 10px;
          img {
            width: 116px;
            height: 116px;
            margin-left: 40px;
          }
        }
        .car-top-box-commodity-text {
          .car-top-box-commodity-text-name {
            width: 175px;
            height: 30px;
            margin-right: 10px;
            font-size: 14px;
            color: rgba(51, 51, 51, 1);
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
          }
          .car-top-box-commodity-text-add {
            width: 62px;
            height: 17px;
            font-size: 12px;
            line-height: 17px;
            color: rgba(153, 153, 153, 1);
            margin: 5px 0px 32px;
          }
          .car-top-box-commodity-text-quantity {
            height: 20px;
            display: flex;
            justify-content: space-between;
            .car-top-box-commodity-text-quantity-money {
              display: flex;
              align-items: baseline;
              color: rgba(231, 95, 52, 1);
              font-size: 12px;
              .car-top-box-commodity-text-quantity-money-right {
                font-size: 14px;
              }
            }
            .car-top-box-commodity-text-quantity-btn {
              display: flex;
              margin-right: 13px;
              .car-top-box-commodity-text-quantity-btn-add {
                width: 20px;
                height: 18px;
                color: rgba(204, 204, 204, 1);
                line-height: 18px;
                text-align: center;
              }
              .car-top-box-commodity-text-quantity-btn-num {
                width: 7px;
                height: 17px;
                color: rgba(119, 119, 119, 1);
                line-height: 17px;
                margin: 0px 13px;
              }
            }
          }
        }
      }
    }
  }
  .car-title {
    width: 375px;
    height: 48px;
    line-height: 48px;
    display: flex;
    font-size: 16px;
    color: #ffffff;
    background: linear-gradient(
      45deg,
      rgba(231, 95, 52, 1) 0%,
      rgba(252, 125, 73, 1) 38%,
      rgba(252, 99, 31, 1) 70%,
      rgba(252, 129, 90, 1) 100%
    );
    .car-title-car {
      font-size: 18px;
      margin-left: 144px;
      margin-right: 100px;
    }
    .car-title-right {
      margin-right: 10px;
    }
  }
  .ok {
    background: url("./images/car_yuanactive.png") left no-repeat;
    background-size: 21px;
  }
  .not {
    background: url("./images/car_yuan.png") left no-repeat;
    background-size: 21px;
  }
}
</style>
<template>
  <div class="car">
    <div class="car-title">
      <div class="car-title-car">购物车(11)</div>
      <div class="car-title-right">完成</div>
    </div>
    <div class="car-top">
      <div class="car-top-box">
        <div
          class="car-top-box-title"
          :class="`${show?'ok ':''}${single?' ok':''}`"
          @click="singles"
        >泸州老窖官方店</div>
        <div class="car-top-box-commodity" v-for="(item,index) in 2" :key="index">
          <div class="car-top-box-commodity-img" :class="`${show?'not':'ok'}`">
            <img src="./images/icon_ce.png" alt />
          </div>
          <div class="car-top-box-commodity-text">
            <div
              class="car-top-box-commodity-text-name"
            >泸州老窖 泸州贡欢乐共享52 度500ml*2浓香型白酒礼盒泸州老窖 泸州贡欢乐共享52 度500ml*2浓香型白酒礼盒</div>
            <div class="car-top-box-commodity-text-add">赠工分 200</div>
            <div class="car-top-box-commodity-text-quantity">
              <div class="car-top-box-commodity-text-quantity-money">
                ￥
                <div class="car-top-box-commodity-text-quantity-money-right">1650.00</div>
              </div>
              <div class="car-top-box-commodity-text-quantity-btn">
                <div class="car-top-box-commodity-text-quantity-btn-add">-</div>
                <div class="car-top-box-commodity-text-quantity-btn-num">1</div>
                <div class="car-top-box-commodity-text-quantity-btn-add">+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="car-bottom">
      <div class="car-bottom-left" :class="show?'not':'ok'" @click="pitchon">全选</div>
      <div class="car-bottom-right">
        <div class="car-bottom-right-collect">移入收藏夹</div>
        <div class="car-bottom-right-del">删除</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: false,
      single: false
    }
  },
  methods: {
    pitchon () {
      this.show = !this.show
    },
    singles () {
      this.single = !this.single
      if (this.single === true) {
        this.show = false
        console.log(this.show)
      }
    }
  }
}
</script>
