<template>
  <div class="content">
    <div class="view">
      <router-view />
    </div>
      <van-tabbar route active-color="#52aa91" :style="{background:backg}">
        <van-tabbar-item to="/index" icon="home-o" >首页</van-tabbar-item>
        <van-tabbar-item to="/classify" icon="apps-o">分类</van-tabbar-item>
        <van-tabbar-item to="/cart" icon="cart-o">购物车</van-tabbar-item>
        <van-tabbar-item to="/my" icon="contact-o">个人中心</van-tabbar-item>
      </van-tabbar>
  </div>
   
</template>
<script setup lang="ts">
  import { useStore } from "vuex";
  import { ref, reactive} from "vue";
  const store = useStore()
  const color = store.state.color
  console.log(color);
  
  const backg = ref<any>('black')
  const colorblue = () =>{
  backg.value = backg.value==='black'?'white':'black'
}
</script>
<style lang="scss" scoped>
.content{
  width: 100vw;
  height: 100vh;
  background-color: v-bind('color');
}
.view{
  width: 100%;
  height: calc(100vh - 50px);
  overflow-y: scroll;
}
</style>
