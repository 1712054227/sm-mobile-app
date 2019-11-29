<style scoped lang='scss'>
.mine {
  background-color: #f7f7f7;
  .mine-box {
    width: 375px;
    height: 157px;
    background: url("./images/mine-bg.png") no-repeat;
    background-size: 375px 157px;
  }
  .mine-title {
    width: 355px;
    height: 30px;
    margin: 10px auto 5px;
    display: flex;
    justify-content: space-between;
    .mine-title-left {
      width: 30px;
      height: 30px;
      background: url("../../assets/icon_set.png") no-repeat;
      background-size: 30px;
    }
    .mine-title-right {
      width: 30px;
      height: 30px;
      background: url("../../assets/info.png") no-repeat;
      background-size: 25.17px 21.76px;
      margin-top: 3px;
    }
  }
  .mine-myinfo {
    width: 355px;
    height: 60px;
    margin: 0px auto 14px;
    display: flex;
    .mine-myinfo-left {
      width: 60px;
      height: 60px;
      margin-right: 11px;
      img {
        width: 60px;
        height: 60px;
      }
    }
    .mine-myinfo-right {
      .mine-myinfo-right-site {
        font-size: 16px;
        color: #ffffff;
        margin-top: 7px;
      }
      .mine-myinfo-right-name {
        width: 280px;
        font-size: 12px;
        color: rgba(252, 239, 197, 1);
        display: flex;
        justify-content: space-between;
        .mine-myinfo-right-name-info {
          line-height: 22px;
          span {
            margin-left: 10px;
          }
        }
      }
      .mine-myinfo-right-name-attestation {
        width: 77px;
        height: 22px;
        line-height: 22px;
        text-align: center;
        font-size: 12px;
        background-color: #ffffff;
        color: rgba(119, 119, 119, 1);
        border-radius: 13px;
      }
    }
  }
  .mine-content {
    flex: 1;
    background-color: #f7f7f7;
    .mine-content-box {
      width: 355px;
      height: 197px;
      border-radius: 10px;
      margin: 0px auto;
      background: url("./images/min-box.png") no-repeat center;
      background-size: 340.05px 186.51px;
      background-color: rgba(255, 255, 255, 1);
      overflow: hidden;
      .mine-content-box-top {
        display: flex;
        justify-content: space-around;
        margin-top: 40px;

        .mine-content-box-top-gaine {
          .mine-content-box-top-gaine-miney {
            font-size: 14px;
            color: rgba(51, 51, 51, 1);
            margin-bottom: 10px;
          }
          .mine-content-box-top-gaine-name {
            font-size: 12px;
            color: rgba(119, 119, 119, 1);
          }
          .mine-content-box-top-gaine-icon {
            width: 24px;
            height: 22.53px;
            background: url("./images/mine_wallet.png") no-repeat top;
            background-size: 24px 22.53px;
            margin: 0px auto 5px;
          }
          .mine-content-box-top-gaine-icon1 {
            width: 26px;
            height: 26px;
            background: url("./images/mine_centimetre.png") no-repeat top;
            background-size: 26px;
            margin: 0px auto;
          }
          .mine-content-box-top-gaine-my {
            font-size: 12px;
            color: rgba(51, 51, 51, 1);
          }
        }
      }
    }
    .mine-indent {
      width: 355px;
      height: 90px;
      background: rgba(255, 255, 255, 1);
      border-radius: 10px;
      margin: 10px auto;
      display: flex;
      justify-content: space-around;
      .mine-indent-box {
        .delivery {
          background: url("./images/mine_deliver.png") no-repeat center;
          background-size: 24px;
        }
        .payment {
          background: url("./images/mine_payment.png") no-repeat center;
          background-size: 26px;
        }
        .deliver {
          background: url("./images/mine_deliver.png") no-repeat center;
          background-size: 25px;
        }
        .evaluate {
          background: url("./images/mine_evaluate.png") no-repeat center;
          background-size: 25.31px 24.85px;
        }
        .order {
          background: url("./images/mine_orderactive.png") no-repeat center;
          background-size: 23px 25px;
        }
        .manor {
          background: url("./images/mine_manor.png") no-repeat center;
          background-size: 41px 30px;
        }
        .circle {
          background: url("./images/mine_circle.png") no-repeat center;
          background-size: 43px 30px;
        }
        .value {
          background: url("./images/mine_value.png") no-repeat center;
          background-size: 33.2px;
        }
        .collect {
          background: url("./images/mine_collect.png") no-repeat center;
          background-size: 53px 31px;
        }
        .mine-indent-box-img {
          width: 53px;
          height: 33.2px;
          margin: 21px auto 7px;
        }
        .mine-indent-box-name {
          color: rgba(51, 51, 51, 1);
          font-size: 12px;
          text-align: center;
        }
        .mine-indent-box-names {
          color: rgba(119, 119, 119, 1);
          font-size: 12px;
          text-align: center;
        }
      }
    }
    .mine-content-list {
      width: 355px;
      height: 313px;
      background: rgba(255, 255, 255, 1);
      border-radius: 10px;
      margin: 0px auto;
      .mine-content-list-box {
        height: 44px;
        width: 300px;
        border-bottom: 1px solid rgba(245, 245, 245, 1);
        margin-left: 40px;
        display: flex;
        justify-content: space-between;
        line-height: 44px;
        color: rgba(119, 119, 119, 1);
        font-size: 14px;
        .mine-content-list-box-icon {
          width: 14px;
          height: 15px;
          margin-top: 15px;
          background: url("../../assets/arrows_right.png") no-repeat;
          background-size: 7.63px 13.39px;
        }
        .cooperation {
          background: url("./images/mine_cooperation.png") left no-repeat;
          background-size: 17.5px 15.14px;
          text-indent: 25px;
        }
        .service {
          background: url("./images/mine_service.png") left no-repeat;
          background-size: 15.4px 16.94px;
          text-indent: 25px;
        }
        .state {
          background: url("./images/mine_state.png") left no-repeat;
          background-size: 17px 14px;
          text-indent: 25px;
        }
        .site {
          background: url("./images/mine_site.png") left no-repeat;
          background-size: 14px 19.08px;
          text-indent: 25px;
        }
        .card {
          background: url("./images/mine_card.png") left no-repeat;
          background-size: 18px 14px;
          text-indent: 25px;
        }
        .guide {
          background: url("./images/mine_guide.png") left no-repeat;
          background-size: 19px;
          text-indent: 25px;
        }
        .we {
          background: url("./images/mine_we.png") left no-repeat;
          background-size: 19px;
          text-indent: 25px;
        }
        .mine-content-list-box-text{
          margin-left: -20px;
        }
      }
    }
  }
}
</style>
<template>
  <div class="mine">
    <div class="mine-box">
      <div class="mine-title">
        <div class="mine-title-left"></div>
        <div class="mine-title-right"></div>
      </div>
      <div class="mine-myinfo">
        <div class="mine-myinfo-left">
          <img src="../../assets/icon_ce.png" alt />
        </div>
        <div class="mine-myinfo-right">
          <div class="mine-myinfo-right-site">茶庄庄主</div>
          <div class="mine-myinfo-right-name">
            <div class="mine-myinfo-right-name-info">
              昵称
              <span>123452226</span>
            </div>
            <div class="mine-myinfo-right-name-attestation">已实名认证</div>
          </div>
        </div>
      </div>
    </div>
    <div class="mine-content">
      <div class="mine-content-box">
        <div class="mine-content-box-top">
          <div
            class="mine-content-box-top-gaine"
            v-for="(item,index) in moneyList.slice(0,3)"
            :key="`A${index}`"
          >
            <div class="mine-content-box-top-gaine-miney">{{item.money}}</div>
            <div class="mine-content-box-top-gaine-name">{{item.name}}</div>
          </div>
          <div class="mine-content-box-top-gaine">
            <div class="mine-content-box-top-gaine-icon"></div>
            <div class="mine-content-box-top-gaine-my">我的钱袋</div>
          </div>
        </div>
        <div class="mine-content-box-top">
          <div
            class="mine-content-box-top-gaine"
            v-for="(item,index) in moneyList.slice(3)"
            :key="`B${index}`"
          >
            <div class="mine-content-box-top-gaine-miney">{{item.money}}</div>
            <div class="mine-content-box-top-gaine-name">{{item.name}}</div>
          </div>
          <div class="mine-content-box-top-gaine">
            <div class="mine-content-box-top-gaine-icon1"></div>
            <div class="mine-content-box-top-gaine-my">我的公分</div>
          </div>
        </div>
      </div>
      <div class="mine-indent">
        <div class="mine-indent-box" v-for="(item,index) in indentList" :key="`C${index}`">
          <div
            class="mine-indent-box-img"
            :class="{'delivery':index===0,'payment':index===1,'deliver':index===2,'evaluate':index===3,'order':index===4}"
          ></div>
          <div class="mine-indent-box-name">{{item.name}}</div>
        </div>
      </div>
      <div class="mine-indent">
        <div class="mine-indent-box" v-for="(item,index) in navList" :key="`D${index}`">
          <div
            class="mine-indent-box-img"
            :class="{'manor':index===0,'circle':index===1,'value':index===2,'collect':index===3}"
          ></div>
          <div class="mine-indent-box-names">{{item.name}}</div>
        </div>
      </div>
      <div class="mine-content-list">
        <div class="mine-content-list-box" v-for="(item,index) in list" :key="`E${index}`">
          <div
            class="mine-content-list-box-text"
            :class="{
            'site':item==='收货地址',
           'card':item==='银行卡',
           'service':item==='反馈与售后',
           'guide':item==='使用指南',
           'cooperation':item==='合作联系',
           'state':item==='声明',
           'we':item==='关于我们'
           }"
          >{{item}}</div>
          <div class="mine-content-list-box-icon"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      moneyList: [
        {
          money: '1000.00',
          name: '账户余额'
        }, {
          money: '999.99',
          name: '代金币'
        }, {
          money: '999.99',
          name: '提货券'
        }, {
          money: '999.99',
          name: '分红公分'
        }, {
          money: '999.99',
          name: '待释放公分'
        }, {
          money: '999.99',
          name: '股权公分'
        }
      ],
      indentList: [
        {
          url: 'delivery',
          activeUrl: 'deliveryUrl',
          name: '待收货',
          active: false
        }, {
          url: 'payment',
          activeUrl: 'paymentUrl',
          name: '待付款',
          active: false
        }, {
          url: 'deliver',
          activeUrl: 'delivereUrl',
          name: '待发货',
          active: false
        }, {
          url: 'evaluate',
          activeUrl: 'evaluateUrl',
          name: '待评价',
          active: false
        }, {
          url: 'order',
          activeUrl: 'orderUrl',
          name: '我的订单',
          active: false
        }
      ],
      navList: [
        {
          url: 'manor',
          name: '我的庄园'
        }, {
          url: 'circle',
          name: '商脉圈'
        }, {
          url: 'value',
          name: '贡献值'
        }, {
          url: 'collect',
          name: '收藏'
        }
      ],
      list: ['收货地址', '银行卡', '反馈与售后', '使用指南', '合作联系', '声明', '关于我们']
    }
  }
}
</script>
