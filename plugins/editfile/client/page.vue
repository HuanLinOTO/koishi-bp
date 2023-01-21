<script setup lang="ts">
import * as monaco from 'monaco-editor';
import { ref, watch, computed } from "vue"
import { ElMessage } from 'element-plus'
// @ts-ignore
import {} from "../src"
import { store, send } from '@koishijs/client'

import 'monaco-editor/esm/vs/basic-languages/css/css.contribution'
import 'monaco-editor/esm/vs/basic-languages/xml/xml.contribution'
import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution'


import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import TsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'
import JsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
import CssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker'
import HtmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.MonacoEnvironment = {
  getWorker (_: string, label: string) {
    if (label === 'typescript' || label === 'javascript') return new TsWorker()
    if (label === 'json') return new JsonWorker()
    if (label === 'css') return new CssWorker()
    if (label === 'html') return new HtmlWorker()
    return new EditorWorker()
  }
}
const editor = ref()

var isInited = false;

var monacoInstance: monaco.editor.IStandaloneCodeEditor = null
var editingPath = ref("开始页");

watch(editor,(newValue,oldValue) => {
    // 只是初始化而已!
    if(!isInited && newValue != undefined) {
        monacoInstance = monaco.editor.create(editor.value, { // 初始化的dom节点
            value: '欢迎使用~', // 初始化值     
            theme: 'vs-light', // 主题 
        }); 

    }
})

const reloadTreeData = async () => {
    const result = await send("editfile-getFileList")
    treeData.value = result;
    ElMessage({
        message: '刷新目录成功',
        type: 'success',
    })
}
reloadTreeData()
const handleNodeClick = async (data) => {
    console.log(data)
    if(data.type == "empty") {
        ElMessage({
            message: '该目录为空',
            type: 'error',
        })
        return;
    }
    if(data.type != "folder") {
        // console.log(data.path);
        editingPath.value = data.path
        var content = await send("editfile-getFile",data.path)
        monacoInstance.setValue(content)
        const modelInList = monaco.editor.getModel(monaco.Uri.file(data.path))
        // 没注册过这个model
        if(modelInList == null) {
            const model = monaco.editor.createModel(
                content,
                undefined,
                monaco.Uri.file(data.path) // uri
            )
            monacoInstance.setModel(model)
        } else {
            monacoInstance.setModel(modelInList)
        }
    }
}

var treeData = ref([]);

const menu = computed(()=>{
    return [{
        icon: "refresh",
        label: "刷新目录",
        disable: false,
        type: false,
        action(){
            reloadTreeData()
        }
    }]
})

const saveFile = async (e) => {
    if (e.keyCode === 83 && e.ctrlKey && (window.location.href.endsWith("editfile") || window.location.href.endsWith("editfile/"))) {
        e.preventDefault()
        const content = monacoInstance.getValue()
        ElMessage({
            message: '保存文件成功',
            type: 'success',
        })
        await send("editfile-saveFile",{
            path: editingPath.value,
            content
        })
    }
}
document.addEventListener("keydown",saveFile)
</script>
<template>
    <div class="topbar layout-header"></div>
    <!-- <div class="body"> -->
    <k-layout :menu="menu">
        <template #header>正在编辑 {{ editingPath.replace("./","") }}</template>
        <div class="editor-container">
            <div class="filetree">
                <el-scrollbar style="height:100%;width:100%;">
                    <el-tree class="tree" :data="treeData" @node-click="handleNodeClick" />
                </el-scrollbar>
            </div>
            <div ref="editor" class="editor"></div>
        </div>
    </k-layout>
    <!-- </div> -->
</template>   
<style scoped>
.body {
    margin-left: 64px;
}
.editor {
    height: 100vh;
    width: calc(85vw - 64px);
}
.topbar {
    width: 100vw;
    height: var(--header-height);
}
.filetree {
    width: 15vw;
}
.tree {
    height: calc(100vh - var(--header-height) - var(--footer-height));
    margin: 15px;
}
</style>
<style>
.el-tree {
    width: 100%;
}

.el-tree > .el-tree-node {
    display: inline-block;
    min-width: 100%;
}
.editor-container {
    display: flex;
}

@font-face {
    font-family: Harmony;
    src: url(./fonts/HarmonyOS_Sans_SC_Regular.ttf);
}
.view-line {
    font-family: Consolas, Harmony, "Courier New", monospace;
}
</style>
