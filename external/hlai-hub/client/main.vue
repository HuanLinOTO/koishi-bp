<script setup lang="ts">
import 'element-plus/theme-chalk/display.css'
const emit = defineEmits(['vits'])
</script>
<template>
    <k-layout>
        <div class="main2">
            <el-row :gutter="10" class="row-1">
                <!-- xs 是手机屏幕 xl 是电脑屏幕 -->
                <el-col :xs="24" :xl="6" :lg="6">
                    <k-card class="ko">
                        <div class="hello">
                            你好! 用户 Koishi
                        </div>
                        <br>
                        HUB 版本: Test Channel
                        <br>
                        主权限组: Builder
                        <br>
                        认证状态: 完成对接 
                    </k-card>
                    <el-row :gutter="10" class="row-2">
                        <el-col :span="12">
                            <k-card class="data">
                                <div class="text">API 总调用次数( Mock )</div>
                                <div class="num">114, 514</div>
                            </k-card>
                        </el-col>
                        <el-col :span="12">
                            <k-card class="data">
                                <div class="text">当前套餐</div>
                                <div class="num">Test Free</div>
                            </k-card>
                        </el-col>
                    </el-row>

                </el-col>
                <el-col :xs="24" :xl="18" :lg="18">
                    <k-card class="graph hidden-xs-only">当前 HLAI HUB 版本暂不支持图表展示</k-card>
                </el-col>
            </el-row>
            <div class="func">
                <br>
                <br>
                <div class="title">&nbsp; 已上线功能</div>
                <el-divider />
                <el-row :gutter="10" class="">
                    <el-col :xs="24" :xl="6" :lg="6">
                        <k-card @click="emit('vits')">
                            <div class="flex-center">
                                <div class="title2">VITS 数据集录制</div>
                                <div>通过简单的几万句的语音录制</div>
                                <div>训练属于您自己的 TTS</div>
                            </div>  
                        </k-card>
                    </el-col>

                </el-row>

            </div>
        </div>
        <div class="disp"></div>
    </k-layout>
</template>
<style lang="less" scoped>
// [CQ:audio,url=file:///]
.main2 {
    // display: flex;
    width: 100%;
    padding-left: 6px;
    padding-right: 6px;

    // margin-right: 20px;
    .row-1 {
        width: 100%;

        .ko {
            // width: 100%;
            height: 200px;
            flex-direction: column;

            .hello {
                font-size: 20px;
                font-weight: bold;
            }
        }

        .data {
            height: 200px;
            display: flex;
            align-items: center;
            justify-content: center;

            .text {
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 14px;
                color: rgb(103, 103, 103);
            }

            .num {
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 26px;
                justify-self: center;
                font-weight: bolder;
            }
        }

        .row-2 {
            margin-top: 10px;
        }

        .graph {
            height: 100% - 1px + 1px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: large;
            font-weight: bold;
        }
    }

    .func {
        margin-top: 20px;
        cursor: pointer;
        .title {
            font-size: 24px;
            font-weight: bold;
        }
        .title2 {
            font-size: 18px;
            font-weight: bold;
        }
    }
}
</style>
<style>
.flex-center > div {
    display: flex;
    align-items: center;
    justify-content: center;
}
.flex-self {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>