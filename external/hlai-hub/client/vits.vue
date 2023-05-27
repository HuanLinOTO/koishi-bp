<script lang="ts" setup>
import { ref, Ref } from "vue";
import 'element-plus/theme-chalk/display.css'
import exampleRecord from "./assets/000001.wav"
import sentence from "./assets/text.ts"
import b2b from "./blob2b64.ts"
// @ts-ignore
import { } from "../src/index"
import { send } from "@koishijs/client";
console.log(sentence);
var showChoose: Ref<boolean> = ref(true);
var lastestAudio = ref("0");
(async () => {
    lastestAudio.value = await send("get-last-audio");
})()

var recorder: MediaRecorder;
var audio: HTMLAudioElement = new Audio();
var isRecording: Ref<boolean> = ref(false)
var chunks: Array<Blob> = [];

navigator.mediaDevices.getUserMedia({ audio: true })
    .then(function (stream) {
        recorder = new MediaRecorder(stream);
        recorder.ondataavailable = (e) => {
            chunks.push(e.data);
        };

        recorder.onstop = async (e) => {
            // var blob = new Blob(chunks, {type: 'audio/webm'});
            isRecording.value = false;
            var blob = new Blob(chunks, { type: 'audio/webm' });
            function stringSize(str) {
            let size = 0;
            for (let i = 0; i < str.length; i++) {
            let code = str.charCodeAt(i);
            if (code <= 0xFFFF) {
                size += 2;
            } else {
                size += 4;
            }
            }
            return size;
            }
            console.log(stringSize(await b2b(blob)));
            
        };

        recorder.onstart = () => {
            isRecording.value = true
            chunks = [];
        }
    })
const startRecord = () => {
    recorder.start();
}
const stopRecord = () => {
    recorder.stop();
}
const playRecord = () => {
    var blob = new Blob(chunks, { type: 'audio/webm' });
    var url = URL.createObjectURL(blob);
    audio.pause();
    
    audio.src = url;
    audio.play();
}

const playExampleRecord = () => {
    audio.pause();
    audio.src = exampleRecord;
    audio.play();
}
</script>
<template>
    <div class="main3">
        <el-row :gutter="10" class="card" v-show="showChoose">
            <el-col :xs="4" :xl="6" :lg="6"></el-col>
            <el-col :xs="16" :xl="4" :lg="4">
                <k-card class="card" @click="showChoose = false">
                    <div class="flex-center">
                        <div class="title">简单录制</div>
                        <div>速度快,效果不好</div>
                        <div>录制量: 600 句</div>
                        <div>字数: 约 9600 字</div>

                    </div>
                </k-card>
            </el-col>
            <el-col :xs="4" :xl="6" :lg="6" class="hidden-sm-and-up"></el-col>
            <el-col :xs="4" :xl="6" :lg="6" class="hidden-sm-and-up"></el-col>

            <el-col :xs="16" :xl="4" :lg="4">
                <k-card class="card">
                    <div class="flex-center">
                        <div class="title">多亿点（不开放）</div>
                        <div>应该还可以了</div>
                        <div>录制量: 1500 句</div>
                        <div>字数: 约 24000 字</div>
                    </div>
                </k-card>
            </el-col>
            <el-col :xs="4" :xl="6" :lg="6" class="hidden-sm-and-up"></el-col>

            <el-col :xs="4" :xl="6" :lg="6" class="hidden-sm-and-up"></el-col>

            <el-col :xs="16" :xl="4" :lg="4">
                <k-card class="card">
                    <div class="flex-center">
                        <div class="title">我疯了（不开放）</div>
                        <div>效果不行你来打我</div>
                        <div>录制量: 5000 句</div>
                        <div>字数: 约 80000 字</div>

                    </div>
                </k-card>
            </el-col>
            <el-col :xs="4" :xl="6" :lg="6"></el-col>

        </el-row>
        <div v-show="!showChoose" class="flex-center">
            <div class="title">当前录制 ID: {{ lastestAudio }}</div>
            <div class="text"> 请您朗读: {{  sentence[lastestAudio] }}</div>
            <div>录制状态: {{ isRecording ? "正在录制" : "录制已结束/未开始" }}</div>
            <div class="btns">
                <el-button @click="startRecord" :disabled="isRecording">开始</el-button>
                <el-button @click="stopRecord" :disabled="!isRecording">停止</el-button>
                <el-button @click="playRecord">试听</el-button>
                <el-button @click="playExampleRecord">语速参考</el-button>
                <el-button @click="playRecord">下一个!</el-button>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.main3 {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .card {
        margin: 2px;
        width: 100%;

        .btns {
            margin: 5px;
        }
    }
}

.title {
    font-size: 18px;
    font-weight: bold;
}

.text {
    font-size: 32px;
    margin: 10px;
}
</style>