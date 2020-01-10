<template>
  <div id="app">
    <div>
      <!-- 顶部栏区域 -->
      <mt-header title="首页信息管理">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>

    </div>
    <!-- 路由组件的出口 -->
    <router-view />

    <!-- 顶部栏 -->
    <mt-tabbar v-model="selected">
      <mt-tab-item id="Home">
        <img slot="icon" src="./assets/f1.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="vip">
        <img slot="icon" src="./assets/f2.png">
        会员
      </mt-tab-item>
      <mt-tab-item id="shopcart">
        <img slot="icon" src="./assets/f3.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="search">
        <img slot="icon" src="./assets/f4.png">
        查找
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  name:"App",
  data(){
    return{
      selected:''
    }
  },
  watch:{
    selected:function(newV,oldV){
      console.log(newV,oldV);
      console.log(this.selected);
      this.$router.push({name:this.selected});
    }
  }
}
</script>
<style>
  *{
    padding:0;
    margin:0;
  }
</style>