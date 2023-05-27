<script setup lang="ts">
import { store } from '@koishijs/client'
import { computed } from 'vue'
// setInterval(() => {
//     console.log(store);
// }, 2000);
var status = computed(()=>store["get-koishi-plugin-koishi-status"]);
// setInterval(() => {
//     console.log(status.value);
// ;
// }, 2000);
var c_type = computed(() => {
   if(status.value == 0) return "tip";
   if(status.value == 1) return "success";
   if(status.value == 2) return "error";
})
</script>
<template>
    <k-comment :type="c_type">
        <br>
        <template>
            正在安装依赖, 请稍后
        </template>
        <template>
            已启动成功, 点击下方进入
        </template>
        <br>
        <br>

    </k-comment>
</template>