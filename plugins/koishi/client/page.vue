<script setup lang="ts">
import { send } from '@koishijs/client'
import { computed } from 'vue'
import { ref } from "vue"
// @ts-ignore
import {} from "../src/"
// setInterval(() => {
//     console.log(store);
// }, 2000);
var url = ref<string>("")
send('koishi-get-port').then(data => {
//   console.log(data);
    url.value = `http://${window.location.hostname}:${data}/`;
})
</script>
<template>
    <k-layout>
        <!-- {{ t_port }} -->
        <iframe class="vie" :src="url" frameborder="0"></iframe>
    </k-layout>
</template>
<style scoped>
.vie {
    height: 100%;
    width: 100%;
}
</style>