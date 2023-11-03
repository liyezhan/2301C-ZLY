<template>
  <div :style="{background:backg}">
    <button @click="colorblue()">1284486</button>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in banner" :key="item.id">
        <img :src="item.picUrl" alt="" />
      </van-swipe-item>
    </van-swipe>
    <div class="divone" >
      <ul>
        <li v-for="item in shop" :key="item.id">
          <img :src="item.pic" alt="" />
          <p>{{ item.name }}</p>
          <div class="price">
            <div>
              <span style="color: #32ad8b">￥{{ item.minPrice }}</span>
              <span style="color: #999"><s>￥{{ item.originalPrice }}</s></span>
            </div>
            <span><van-button size="small" plain type="success" @click="goDetail()">购买</van-button></span>
          </div>
          <div class="recommend" v-if="item.recommendStatusStr == '推荐'">
            {{ item.recommendStatusStr }}
          </div>
        </li>
      </ul>
     
    </div>
    <div class="null" style="color: #ccc;">暂无数据</div>

    <van-back-top right="5vw" bottom="10vh" />
  </div>
</template>
<script setup lang='ts'>
import { getBannerApi, getShopApi } from "../../api/api";
import { ref, reactive,onMounted} from "vue";
import { useRouter, useRoute } from "vue-router";
const banner = ref<any>([]);
const router = useRouter()
const shop = ref<any>([]);
const backg = ref<any>('black')
const getBannerList = () => {
  getBannerApi().then((res: any) => {
    console.log(res);
    banner.value = res.data;
  });
};
const colorblue = () =>{
  backg.value = backg.value==='black'?'white':'black'
}

getBannerList();
const getShopList = () => {
  getShopApi({
    page: 1,
    pageSize: 10,
  }).then((res: any) => {
    console.log(res);
    shop.value = res.data.result;
  });
};
getShopList();

const goDetail = () =>{
  router.push('/Detail')
}
</script>
<style lang='scss' scoped>
.index{
  background-color: #000;

}
.van-swipe {
  width: 100%;
  height: 240px;

  img {
    width: 100%;
    height: 100%;
  }
}
.divone {
  width: 100vw;
  padding: 5px;

  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      width: 47%;
      margin: 5px;
      border-radius: 10px;
      overflow: hidden;
      margin-top: 10px;
      background-color: #fff;
      position: relative;

      img {
        width: 100%;
        height: 68%;
      }

      p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin: 5px 10px;
      }

      .price {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        margin-top: 10px;
      }

      .recommend {
        position: absolute;
        top: 5%;
        left: 0;
        background-color: red;
        color: #fff;
        width: 35px;
        height: 20px;
        font-size: 13px;
        text-align: center;
        line-height: 20px;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
      }
    }
  }
}

.null {
  width: 100%;
  height: 100px;
  text-align: center;
  line-height: 100px;
}</style>