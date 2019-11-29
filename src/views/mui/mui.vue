<style scoped lang='scss'>
.mui {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(238, 206, 177);
  overflow: scroll;
  touch-action: none;
  .mui-tu {
    width: 355px;
    height: 100px;
    background-color: red;
    margin: 0px auto 10px;
  }
  .mui-text {
    width: 355px;
    height: 50px;
    background-color: rgb(116, 149, 192);
    margin: 0px auto 10px;
  }
  .mui-nav {
    width: 355px;
    height: 50px;
    background-color: rgb(116, 149, 192);
    margin: 0px auto 10px;
    display: flex;
    justify-content: space-around;
    line-height: 50px;
    color: #fff;
    .mui-nav-text {
      &:last-child {
        color: red;
      }
    }
  }
  .box {
    height: 700px;
    background-color: #f7f7f7;
    font-size: 20px;
    text-align: center;
    overflow: hidden;
  }
}
</style>
<template>
  <div class="mui" ref="mui">
    <div class="mui-tu">132</div>
    <div class="mui-text">132</div>
    <div class="mui-nav" ref="nav">
      <div class="mui-nav-text" v-for="(item,index) in list" :key="index">{{item}}</div>
    </div>
    <div class="box">
      <div class="box-text" v-for="(item,key) in 60" :key="key">哇哈哈</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: ['早', '中', '晚']
    }
  },
  mounted () {
    this.$refs.mui.addEventListener('touchmove', (e) => {
      if (this.$refs.nav.offsetTop >= this.$refs.mui.scrollTop) {
        e.returnValue = true
        // console.log(e)
      } else {
        e.preventDefault()
      }
    }, true)
  },
  methods: {
    // handler (e) {
    //   if (this.$refs.nav.offsetTop - this.$refs.mui.scrollTop > 0) {
    //     e.returnValue = true
    //   } else {
    //     e.preventDefault()
    //   }
    // }
  }
}
</script>
