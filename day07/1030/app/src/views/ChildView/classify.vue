<template>
  <div class="contents">
    <div class="nav">
      <van-sidebar v-model="active">
        <van-sidebar-item v-for="item in categoryList" :key="item.id" :title="item.name" @click="changeNav(item.id)" />
      </van-sidebar>
    </div>
    <div class="navlist" v-if="list.length != 0">
      <ul>
        <li v-for="item in list" :key="item.id">
          <img :src="item.pic" alt="" />
          <p>{{ item.name }}</p>
          <p class="price">￥{{ item.minPrice }}</p>
        </li>
      </ul>
    </div>
    <div v-else class="null">
      <van-empty description="暂无数据" />
    </div>
  </div>
</template>
<script setup lang='ts'>
import { getCategoryApi, getDataApi } from "../../api/api";
import { ref,reactive } from "vue";

const active = ref<any>(0);


const list = ref<any>([]);
const categoryList = ref<any>([]);
const classifyId = ref(388511);

const getCategory = () => {
  getCategoryApi().then((res: any) => {
    console.log(res);
    categoryList.value = res.data;
  });
};
getCategory();


const changeNav = (id: any) => {
  console.log(id);
  classifyId.value = id;
  getData();
};

const getData = () => {
  getDataApi({
    categoryId: 1,
    page: 1,
    pageSize: 10,
  }).then((res: any) => {
    list.value = res.data.result.filter(
      (ele: any) => ele.categoryId == classifyId.value
    );
  });
};
getData();
</script>
<style lang='scss' scoped>
.contents {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  .nav {
    width: 80px;

    .van-sidebar {
      height: 100%;
    }
  }

  .navlist {
    width: 310px;
    background-color: #fff;

    ul {
      display: flex;
      flex-wrap: wrap;

      li {
        width: 50%;
        padding: 5px;

        img {
          width: 100%;
          height: 68%;
        }

        p {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          padding: 5px;
        }

        .price {
          color: #16a27e;
          font-weight: 700;
        }
      }
    }
  }

  .null {
    width: 310px;
    background-color: #fff;
  }
}</style>