<script setup lang="ts">
// @ts-ignore
import {} from "../src"
import { store, send } from '@koishijs/client'
import { ref, Ref, watch } from "vue";
import Account from './Account.vue'
import { any } from "schemastery";

var accounts: Ref<any> = ref({})

var cantUse = ref(0)

var online = ref(0)

const getData = () => {
    send("gocq-session-uploader-getAccountsList").then((e: any)=>{
        accounts.value = e
        cantUse.value = 0;
        online.value = 0;
        // console.log(e);
        
        for (const o in e) {
            console.log(o,e[o]);
            
            if((!e[o].device && !e[o].token) || !e[o].token) {
                if(e[o].status == "online") online.value ++;
                cantUse.value ++
            };
        }
    })
}
getData()
setInterval(getData,3000)
watch(accounts,(newV,oldV) => { 
    console.log(newV,oldV);
})
</script>
<template>
    <k-layout>
        <div class="lay-container">
            <div style="margin: 20px 20px 20px 20px;">仅支持检测本地的登录信息文件 ( 已检测到 {{ Object.keys(accounts).length }} 个账号, 其中 {{ cantUse }} 个账号登陆信息异常, {{ online }} 个账号已上线但登录信息异常 )</div>
            <div class="info-container">
                <div v-for="(account,index) in accounts" :key="index">
                    <!-- @ts-ingnore -->
                    <Account :id="index" :device="account.device" :token="account.token" :status="account.status"/>
                </div>
            </div>
        </div>
    </k-layout>
</template>
<style scoped>
.lay-container {
    margin: 44px;
}
.info-container {
    display: flex;
}
.info-container div{
    height: 88px;
    width: 280px;
    margin-left: 10px;
    margin-right: 10px;
}
</style>