<template>
    <k-layout>
        <k-card style="margin: 20px;">
            <h3 style="font-weight: bolder;">发布你的 Blockly 插件</h3>
            
            <h4>{{ tmp_token }}</h4>
            ↑   这是您的临时密钥，您需要在 论坛-幻灵的测试频道 发送以下内容来验证您的身份: 「 .bmlogin {{ tmp_token }} 」 注意前面的点
            <br>
            <br>
            <br>
            <br>    
            <el-input
                v-model="code"
                :autosize="{ minRows: 2 }"
                type="textarea"
                placeholder="在这儿复制你的 blocky 代码"
            />
        </k-card>
    </k-layout>
</template>
<script setup lang="ts">
import { ref } from "vue"
var code = ref(""); 
var tmp_token = "11131414"
</script>