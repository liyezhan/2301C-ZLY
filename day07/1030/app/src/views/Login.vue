<template>
    <div class="login">
        <h2 class="htwo">账号密码登录</h2>
        <p class="pone">为了您的账号安全， 请使用手机号登录</p>
        <div class="input">
            <van-cell-group inset>
                <van-field v-model="value1" placeholder="请输入用户名" />
            </van-cell-group>
            <van-cell-group inset>
                <van-field v-model="password" placeholder="请输入用户名" type="password" />
            </van-cell-group>
        </div>
        <div class="button" ><button>登录</button></div>
        <div class="ul">
            <p class="pleft"><span>验证码登录</span></p>
            <p class="pright"><span>忘记密码</span> | <span @click="goSignin()">免费注册</span></p>
        </div>
    </div>
</template>
<script setup lang='ts'>
import { ref, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter()
const value1 = ref('');
const password = ref('');

const goSignin = () =>{
    router.push('/Signin')
}
</script>
<style lang='scss' scoped>
.htwo {
    padding-left: 29px;
}

.pone {
    font-size: 16px;
    color: #ccc;
    padding-top: 15px;
    padding-left: 29px;
}

.pleft {
    font-size: 12px;
    color: #6fa0e8;
    padding-left: 20px;
}

.pright {
    padding-right: 20px;
    font-size: 12px;
    color: #6fa0e8;
}

.ul {
    display: flex;
    justify-content: space-between;
}

.button {
    width: 350px;
    height: 59px;
    margin: 15px auto;

    button {
        width: 100%;
        background-color: #84c8c1;
        color: #fff;
        text-align: center;
        font-size: 20px;
        line-height: 59px;
        border: 0;
    }
}

.login {
    padding-top: 25px;
}</style>