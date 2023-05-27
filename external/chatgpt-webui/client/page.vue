<script setup lang="ts">
// @ts-ignore
import { } from "../src/index.ts";
import { send, useStorage, message } from "@koishijs/client";
import { storage as Storage } from "./storage.type";
const storage = useStorage<Storage>("chatgpt-webui", 1)
function generateUUID(): string {
    let uuid = '';
    const chars = '0123456789abcdef';

    for (let i = 0; i < 13; i++) {
        uuid += chars[Math.floor(Math.random() * 16)];
    }

    return uuid;
}

function createConversation() {
    if (storage.value.conversations.length > 7) {
        message.error("最大可创建 7 个对话")
        return;
    }
    storage.value.conversations.push(
        {
            id: generateUUID(),
            messages: []
        }
    )
}
function clearConversation() {

    storage.value.conversations = []
}
// send("chatgpt-webui-ask","我上一句说了什么","HuanLinTest1119999").then(console.log)
</script>

<template>
    <k-layout class="layout">
        <div class="container">
            <!-- <k-card class="session">这里选择</k-card> -->
            <el-row :gutter="10" class="row-1">
                <!-- xs 是手机屏幕 xl\lg 是电脑屏幕 -->
                <el-col :xs="24" :xl="3" :lg="3">
                    <k-card class="bg inner-flex remove-padding">
                        <k-button @click="createConversation">新建对话</k-button>
                        <k-button @click="clearConversation">清空对话</k-button>
                        <div class="conversation" v-for="conversation in storage.conversations">
                            {{ conversation.id }}
                        </div>
                    </k-card>
                </el-col>
                <el-col :xs="24" :xl="21" :lg="21">
                    <k-card class="bg container_">
                        <!-- <el-scrollbar> -->
                        <div class="dialog">
                            <div class="name">ChatGPT</div>
                            <div class="text">
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                                你好，我是由 OpenAI 研发的语音大模型 ChatGPT。<br>
                            </div>
                        </div>
                        <textarea class="input-box"></textarea>
                        <!-- </div> -->
                        <!-- </div> -->
                    </k-card>
                </el-col>
            </el-row>
        </div>
    </k-layout>
</template>
<style lang="less" scoped>
.layout-main {
    width: 100%;
}

// .k-card-body {
//     box-sizing: border-box;
// }
.container {
    padding-left: 20px;
    padding-right: 20px;
    height: 100%;

    .row-1 {
        padding-top: 5px;
        padding-bottom: 5px;
        height: 100%;
    }

    .bg {
        box-sizing: border-box;
        height: 100%;
    }

    .user {
        white-space: nowrap;
    }

    .dialog-box {
        display: flex;
        position: relative;
    }

    .dialog {
        border-left: 4px orange solid;
        padding-left: 5px;

        .name {
            font-size: 18px;
            font-weight: bold;
        }

        .text {
            font-size: 12px;
        }
    }

    .input-box {
        // position: absolute;
        // bottom: 30px;
        width: 100%;
        margin: -1.25rem;
        padding: 1.25rem;
        border: 0 solid;
        border-top-width: 1px;
        border-right-width: 0px;
        border-bottom-width: 0px;
        border-left-width: 0px;
        border-top-style: solid;
        border-right-style: solid;
        border-bottom-style: solid;
        border-left-style: solid;
        border-top-color: initial;
        border-right-color: initial;
        border-bottom-color: initial;
        border-left-color: initial;
        border-image-source: initial;
        border-image-slice: initial;
        border-image-width: initial;
        border-image-outset: initial;
        border-image-repeat: initial;
        // border-top: 1px solid hsl(0, 0%, 90%);
        background-color: rgba(0, 0, 0, 0);
        resize: none;
    }

    .input-box:focus-visible {
        // border: none;
        outline: 0;
    }
}

.height-100 {
    height: 100%;
}
</style>
<style lang="less">
.bg {
    .k-card-body {
        height: 100%;
    }
}

.container_ {
    display: flex;
    flex-direction: column;
    overflow: scroll;
    &>.k-card-body {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
}

.inner-flex {
    >.k-card-body {
        display: flex;
        flex-direction: column;
    }
}

.remove-padding {
    >.k-card-body {
        padding: 0;
        margin: 0
    }
}

.conversation {
    margin: 0 0.5rem;
    box-sizing: border-box;
    padding-bottom: 1rem;
    cursor: pointer;
    &:first-of-type {
        padding-top: 1rem;
    }
}

.conversation+.conversation {
    padding-top: 1rem;
    border-top: 1px solid hsl(0, 0%, 93%)
}

html.dark .input-box {
    color: white !important
}
</style>