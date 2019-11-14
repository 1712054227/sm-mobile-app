<style scoped lang='scss'>
.search {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  .search-title {
    width: 375px;
    height: 55px;
    background: rgba(247, 89, 64, 1);
    display: flex;
    justify-content: space-around;
    .search-title-left {
      width: 10px;
      height: 16.5px;
      margin-top: 11px;
      background: url("../../assets/icon_back.png") no-repeat;
      background-size: 9.39px 16.47px;
    }
    .search-title-right {
      width: 56px;
      height: 30px;
      background-color: #fff;
      color: #333333;
      line-height: 30px;
      text-align: center;
      border-radius: 17px;
      margin-top: 4px;
    }
    .search-title-contre {
      width: 255px;
      height: 30px;
      background-color: #fff;
      border-radius: 15px;
      margin-top: 4px;
      display: flex;
      .search-title-contre-del {
        width: 17px;
        margin-top: 6px;
        background: url("../../assets/icon_del.png") no-repeat;
        background-size: 17px;
      }
      .search-title-contre-input {
        input {
          width: 233px;
          height: 30px;
          line-height: 30px;
          border: none;
          outline: none;
          background-color: transparent;
          font-size: 14px;
          border-radius: 15px 0px 0px 15px;
          text-indent: 35px;
          background: url("../../assets/icon_search.png") left no-repeat;
          background-size: 18.83px 19.41px;
          background-position-x: 10px;
        }
      }
    }
  }
  .search-conter {
    flex: 1;
    border-radius: 10px 10px 0px 0px;
    background-color: #ffffff;
    margin-top: -10px;
    overflow: auto;
    .search-conter-lisi {
      .search-conter-record-box {
        width: 360px;
        margin: 27px auto;
        display: flex;
        flex-direction: column;
        .search-conter-record-box-title {
          display: flex;
          justify-content: space-between;
          margin-bottom: 15px;
          .search-conter-record-box-title-left {
            color: #333333;
            font-size: 18px;
            font-weight: bold;
          }
          .search-conter-record-box-title-right {
            width: 21px;
            height: 22px;
            background: url("../../assets/icon_dustbin.png") no-repeat;
            background-size: 21px;
          }
        }
        .search-conter-record-box-conter {
          flex: 1;
          display: flex;
          flex-wrap: wrap;
          .search-conter-record-box-conter-text {
            height: 33px;
            line-height: 33px;
            padding: 0px 27px;
            color: #999999;
            font-size: 16px;
            margin-right: 15px;
            margin-bottom: 15px;
            background: rgba(247, 247, 247, 1);
            border-radius: 17px;
          }
        }
      }
    }
    .search-conter-result {
      width: 360px;
      height: 130px;
      margin: 15px auto;
      display: flex;
      .search-conter-result-left {
        width: 130px;
        height: 130px;
        border-radius: 10px;
        margin-right: 16px;
        overflow: hidden;
        img {
          width: 130px;
          height: 130px;
        }
      }
      .search-conter-result-right {
        flex: 1px;
        .search-conter-result-right-name {
          width: 188px;
          height: 40px;
          line-height: 20px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          color: #333333;
          margin-top: 5px;
        }
        .search-conter-result-right-price {
          width: 188px;
          height: 40px;
          display: flex;
          justify-content: space-between;
          margin: 8px 0px;
          .search-conter-result-right-price-icon {
            width: 40px;
            height: 40px;
            background: url("./images/icon_shopping.png") no-repeat;
            background-size: 40px;
          }
          .search-conter-result-right-price-moey {
            line-height: 40px;
            display: flex;
            color:rgba(247,89,64,1);
            align-items:baseline;
            .search-conter-result-right-price-moey-icon{
              font-size: 14px;
            }
            .search-conter-result-right-price-moey-number{
              font-size: 20px;
            }
          }
        }
        .search-conter-result-right-sales{
          width: 188px;
          height: 17px;
          display: flex;
          justify-content: space-between;
          color: #999999;
          font-size: 12px;
          line-height: 17px;
        }
      }
    }
  }
}
</style>
<template>
  <div class="search">
    <div class="search-title">
      <div class="search-title-left"></div>
      <div class="search-title-contre">
        <div class="search-title-contre-input">
          <input type="text" placeholder="请输入关键词" />
        </div>
        <div class="search-title-contre-del"></div>
      </div>
      <div class="search-title-right">搜索</div>
    </div>
    <div class="search-conter">
      <!-- <div class="search-conter-lisi">
        <div class="search-conter-record-box">
          <div class="search-conter-record-box-title">
            <div class="search-conter-record-box-title-left">历史搜索</div>
            <div class="search-conter-record-box-title-right"></div>
          </div>
          <div class="search-conter-record-box-conter">
            <div
              class="search-conter-record-box-conter-text"
              v-for="(item,index) in 5"
              :key="index"
            >封坛酒</div>
          </div>
        </div>
        <div class="search-conter-record-box">
          <div class="search-conter-record-box-title">
            <div class="search-conter-record-box-title-left">热销榜</div>
          </div>
          <div class="search-conter-record-box-conter">
            <div
              class="search-conter-record-box-conter-text"
              v-for="(item,index) in 5"
              :key="index"
            >封坛酒</div>
          </div>
        </div>
      </div>-->
      <div class="search-conter-result" v-for="(item,index) in 5" :key="index">
        <div class="search-conter-result-left">
          <img src="./images/icon_ce.png" alt />
        </div>
        <div class="search-conter-result-right">
          <div
            class="search-conter-result-right-name"
          >60度泸州老窖 500ml装 度 泸州老窖 珍藏版60度泸州老窖 500ml装 度 泸州老窖 珍藏版</div>
          <div class="search-conter-result-right-price">
            <div class="search-conter-result-right-price-moey">
              <div class="search-conter-result-right-price-moey-icon">￥</div>
              <div class="search-conter-result-right-price-moey-number">2568</div>
            </div>
            <div class="search-conter-result-right-price-icon"></div>
          </div>
          <div class="search-conter-result-right-sales">
            <div class="search-conter-result-right-sale-num">日销10件</div>
            <div class="search-conter-result-right-sale-day">增工分1198元</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
