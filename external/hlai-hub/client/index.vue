<script lang="ts" setup>
import { ref, Ref } from "vue";
import Main from "./main.vue"
import Vits from "./vits.vue"
var showMain:Ref<boolean> = ref(true)
var showVits:Ref<boolean> = ref(true)
const activeVits = () => {
    showMain.value = false
    showVits.value = true
}
</script>
<template>
    <k-layout>
        <div class="main">

            <Main @vits="activeVits" v-show="showMain"></Main>
            <Vits>
            </Vits>
        </div>
    </k-layout>

</template>
<style lang="less" scoped>
// [CQ:audio,url=file:///]
.main {
    // display: flex;
    width: 100%;
    height: 100%;
    // margin: 10px 20px 10px 20px !important;
    padding-left: 6px;
    padding-right: 6px;
}
</style>