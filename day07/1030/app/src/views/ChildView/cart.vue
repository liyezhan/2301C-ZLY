<template>
    <van-empty description="登录后才能看到购物车">
      <van-button round type="success" class="bottom-button" @click="goLogin()">去往登陆页面</van-button>
    </van-empty>
  </template>
  <script setup lang='ts'>
  import { useRouter,useRoute } from "vue-router";
  const router = useRouter()

  const goLogin = () =>{
    router.push('/Login')
  }
  </script>
  <style lang='scss' scoped>
  </style>