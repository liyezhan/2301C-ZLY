<template>
    <div class="my">
        <div class="zly-top">
       <div class="img">
        <img src="../../assets/logo.png" alt="">
       </div>
       <p class="login"><span @click="goLogin()">登录</span>/注册</p>

       <div class="zly-divone">
            <div class="zly-divone-one">
                <p class="p1">--</p>
                <p>积分</p>
            </div>
            <div class="zly-divone-two">
                <p class="p1">--</p>
                <p>优惠卷</p>
            </div>
            <div class="zly-divone-three">
                <p class="p1">--</p>
                <p>余额</p>
            </div>
       </div>

       <div class="zly-divtwo">
            <div class="zly-divtwo-top">
                <p class="zly-divtwo-top-pone">我的订单</p>
                <p class="zly-divtwo-top-ptwo"><span>查看全部订单></span></p>
            </div>

            <div class="zly-divtwo-bottom">
                <ul>
                    <li>
                        <van-icon name="pending-payment" size="25"/>
                        <p>待付款</p>
                    </li>
                    <li>
                        <van-icon name="tosend" size="25"/>
                        <p>待发货</p>
                    </li>
                    <li>
                        <van-icon name="logistics" size="25"/>
                        <p>待收货</p>
                    </li>
                    <li>
                        <van-icon name="comment-o" size="25"/>
                        <p>评价</p>
                    </li>
                    <li>
                        <van-icon name="cash-back-record-o" size="25"/>
                        <p>退款/售后</p>
                    </li>
                </ul>
            </div>
       </div>


       <div class="zly-three">
            <div class="zly-divtwo-top">
                <p class="zly-divtwo-top-pone">常用功能</p>
            </div>

            <div class="zly-divtwo-bottom">
                <ul class="ultwo">
                    <li class="litwo">
                        <van-icon name="cash-back-record-o" />
                        <p>我的钱包</p>
                    </li>
                    <li class="litwo">
                        <van-icon name="point-gift-o" />
                        <p>积分兑换</p>
                    </li>
                    <li class="litwo">
                        <van-icon name="coupon-o" />
                        <p>优惠卷</p>
                    </li>
                    <li class="litwo">
                        <van-icon name="location-o" />
                        <p>收货地址</p>
                    </li>
                    <li class="litwo">
                        <van-icon name="setting-o" />
                        <p>设置</p>
                    </li>
                    <li class="litwo">
                        <van-icon name="comment-o" size="25"/>
                        <p>主题</p>
                    </li>
                    <li class="litwo">
                        <van-icon name="comment-o" size="25"/>
                        <p>我的设备</p>
                    </li>
                    <li></li>
                </ul>
            </div>
       </div>
    </div>
    </div>
</template>
<script setup lang='ts'>
import { ref,reactive } from "vue";
import { useRouter,useRoute } from "vue-router";
import { Icon } from 'vant';
const router = useRouter()

const goLogin = () =>{
    router.push('/login') 
}
</script>
<style lang='scss' scoped>
.zly-top{
    background-color: #109785;
    width: 100%;
    height: 147px;
    position: relative;
}
.img{
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-radius: 50%;
    text-align: center;
    line-height: 50px;
    align-items: center;
    position: absolute;
    top: 40px;
    left: 25px;
    img{
        width: 80%;
    }
}
.login{
    font-size: 20px;
    color: #fff;
    padding-left: 95px;
    padding-top: 50px;
    
}
.zly-divone{
    width: 90%;
    height: 65px;
    border-radius: 10px;
    background-color: #fff;
    margin: 0 auto;
    margin-top: 90px;
    display: flex;
    justify-content: space-around;
    text-align: center;
    line-height: 30px;
    p{
        font-size: 14px;
    }
    .p1{
        font-weight: 700;
        font-size: 16px;
    }
    
}
.my{
    width: 100%;
    height: 100vh;
    background-color: #f8f8f8;
}
.zly-divtwo{
    width: 90%;
    height: 120px;
    border-radius: 10px;
    background-color: #fff;
    margin: 0 auto;
    margin-top: 15px;
    .zly-divtwo-top{
        display: flex;
        justify-content: space-between;
        padding-bottom: 15px;
        border-bottom: 1px solid #ccc;
        
        .zly-divtwo-top-ptwo{
            font-size: 13px;
            color: #ccc;
           padding-top: 10px;
           padding-right: 10px;
        }
        .zly-divtwo-top-pone{
            font-size: 16px;
            font-weight: 700;
            padding-top: 10px;
            padding-left: 10px;
        }
    }
    .zly-divtwo-bottom{
        ul{
        display: flex;
        justify-content: space-between;
        text-align: center;
        li{
            width: 19%;
            padding-top: 10px;
            p{
                padding-top: 5px;
                font-size: 12px;
            }
        }
        }

        .ultwo{
            display: flex;
        justify-content: space-between;
        text-align: center;
        width: 100%;
        flex-wrap: wrap;
        .litwo{
            width: 25%;

        }
        }
    }
}
.zly-three{
    width: 90%;
    height: 180px;
    border-radius: 10px;
    background-color: #fff;
    margin: 0 auto;
    margin-top: 15px;
    .zly-divtwo-top{
        display: flex;
        justify-content: space-between;
        padding-bottom: 15px;
        border-bottom: 1px solid #ccc;
        
        .zly-divtwo-top-ptwo{
            font-size: 13px;
            color: #ccc;
           padding-top: 10px;
           padding-right: 10px;
        }
        .zly-divtwo-top-pone{
            font-size: 16px;
            font-weight: 700;
            padding-top: 10px;
            padding-left: 10px;
        }
    }
    .zly-divtwo-bottom{
        ul{
        display: flex;
        justify-content: space-between;
        text-align: center;
        li{
            width: 19%;
            padding-top: 10px;
            p{
                padding-top: 5px;
                font-size: 12px;
            }
        }
        }

        .ultwo{
            display: flex;
        justify-content: space-between;
        text-align: center;
        width: 100%;
        flex-wrap: wrap;
        .litwo{
            width: 25%;
            text-align: center;
        }
        }
    }
}
</style>