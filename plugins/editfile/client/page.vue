<script setup lang="ts">
import * as monaco from 'monaco-editor';
import { ref, watch, computed, reactive } from "vue"
import { ElMessage } from 'element-plus'
// @ts-ignore
import {} from "../src"
import { store, send } from '@koishijs/client'

import * as utils from "./utils"

import 'monaco-editor/esm/vs/basic-languages/css/css.contribution'
import 'monaco-editor/esm/vs/basic-languages/xml/xml.contribution'
import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution'

import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import TsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'
import JsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
import CssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker'
import HtmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'


import addFolder from "./icons/addFolder.vue"

window.MonacoEnvironment = {
    getWorker(_: string, label: string) {
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
var selectedNode = reactive({
    element: null,
    path: null,
})

const isDark = ref(document.getElementsByTagName("html")[0].className.indexOf("dark") != -1)

setInterval(()=>{
    isDark.value = (isDark.value,document.getElementsByTagName("html")[0].className.indexOf("dark") != -1);
},100)

watch(isDark,(newValue,oldValue)=>{
    const oldEditorValue = monacoInstance.getValue();
    const oldPosition = monacoInstance.getPosition();
    monacoInstance.dispose();
    monacoInstance = monaco.editor.create(editor.value, { // 初始化的dom节点
        value: oldEditorValue, // 初始化值     
        theme: newValue? 'vs-dark' : 'vs-light', // 主题 
    });
    monacoInstance.setPosition(oldPosition)
    const modelInList = monaco.editor.getModel(monaco.Uri.file(editingPath.value))
    // 没注册过这个model
    if (modelInList == null) {
        const model = monaco.editor.createModel(
            oldEditorValue,
            undefined,
            monaco.Uri.file(editingPath.value) // uri
        )
        monacoInstance.setModel(model)
    } else {
        monacoInstance.setModel(modelInList)
    }
})

watch(editor, (newValue, oldValue) => {
    // 只是初始化而已!
    if (!isInited && newValue != undefined) {
        monacoInstance = monaco.editor.create(editor.value, { // 初始化的dom节点
            value: '欢迎使用~', // 初始化值     
            theme: isDark.value? 'vs-dark' : 'vs-light', // 主题 
        });
    }
})

var treeData = ref([]);

const reloadTreeData = async () => {
    treeData.value = [];
    const result = await send("editfile-getFileList")
    treeData.value = result;
    ElMessage({
        message: '刷新目录成功',
        type: 'success',
    })
}
reloadTreeData()

const handleNodeClick = async (data,_node,_treeNode,event) => {
    const findFolderContainer = (element) => {
        if(element.className.indexOf("is-focusable") != -1) {
            return element;
        }
        return findFolderContainer(element.parentElement);
    }
    if (data.type == "empty") {
        ElMessage({
            message: '该目录为空',
            type: 'error',
        })
        return;
    } else if (data.type != "folder") {
        // console.log(data.path);
        editingPath.value = data.path
        var content = await send("editfile-getFile", data.path)
        monacoInstance.setValue(content)
        const modelInList = monaco.editor.getModel(monaco.Uri.file(data.path))
        // 没注册过这个model
        if (modelInList == null) {
            const model = monaco.editor.createModel(
                content,
                undefined,
                monaco.Uri.file(data.path) // uri
            )
            monacoInstance.setModel(model)
        } else {
            monacoInstance.setModel(modelInList)
        }
    } else {
        if(selectedNode.element != null) selectedNode.element.style.backgroundColor = ""
        selectedNode.element = findFolderContainer(event.srcElement);
        selectedNode.element.style.backgroundColor = "var(--bg2)"
        selectedNode.path = data.path
    }
}

const menu = computed(() => {
    return [{
        icon: "refresh",
        label: "刷新目录",
        disable: false,
        type: false,
        action() {
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
        await send("editfile-saveFile", {
            path: editingPath.value,
            content
        })
    }
}
document.removeEventListener("keydown",saveFile)
document.addEventListener("keydown", saveFile)

const opemnContextMenu = (event,data) => {
    console.log(data);
    if(data.type == "file") {
        console.log("文件菜单");
    } else {
        console.log("文件夹菜单");
    }
}

var addFolderValueInput = ref('')
const controls = {
    async addFolder() {
        try {
            await send("editfile-addFolder",{
                path: selectedNode.path,
                name: addFolderValueInput.value
            })
            ElMessage({
                message: '创建文件夹成功',
                type: 'success',
            })
            reloadTreeData();
        } catch(e) {
            if(e.indexOf("file already exists") != -1) {
                ElMessage({
                    message: '创建文件夹失败, 文件夹已存在',
                    type: 'error',
                })
                return;
            }
            ElMessage({
                dangerouslyUseHTMLString: true,
                message: '创建文件夹失败<br>'+e,
                type: 'error',
            })
        }
    }
}
</script>
<template>
    <div class="topbar layout-header"></div>
    <!-- <div class="body"> -->
    <k-layout :menu="menu">
        <template #header>正在编辑 {{ editingPath.replace("./", "") }}</template>
        <div class="editor-container">
            <div class="filetree">
                <div class="control">
                    <strong style="font-family: Segoe WPC,Segoe UI,sans-serif;margin-left: 4px">KOISHI</strong>
                    <div class="btn-group">
                        <el-popover placement="bottom" trigger="click" popper-class="addFoloder-popover">
                        <template #reference>
                            <div class="btn" title="新建文件夹">
                                <addFolder />
                            </div>
                        </template>
                        <div v-if="selectedNode.path != null">
                            <div>正在向 {{ selectedNode.path }} 目录下新建文件夹</div>
                            <div style="display: flex">
                                <el-input v-model="addFolderValueInput" placeholder="请输入文件夹名称" style="width: 80%"/>
                                <el-button  style="width: 19%;margin-left: 6px" @click="controls.addFolder">确定</el-button>
                            </div>
                        </div>
                        <div v-else>
                            暂未选择文件夹
                        </div>
                        </el-popover>
                    </div>
                </div>
                <el-skeleton animated :loading="treeData.length == 0">
                    <template #template>
                        <!-- margin: 5px; -->
                        <div style="margin: 5px;">
                            <template v-for="o in new Array(utils.random(8,21)).fill(1)">                            
                                <el-skeleton-item variant="text" :style="`width: ${utils.random(70,200)}px`" />
                            </template>
                        </div>
                    </template>
                    <template #default>
                        <el-scrollbar style="height:100%;width:100%;">
                            <el-tree 
                                class="tree"
                                :data="treeData"
                                @node-click="handleNodeClick"
                                @node-contextmenu="opemnContextMenu"
                            />
                        </el-scrollbar>
                    </template>
                </el-skeleton>
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
    width: 280px;
}

.tree {
    height: calc(100vh - var(--header-height) - var(--footer-height));
    margin: 5px;
}

.control {
    height: 24px;
    width: 100%;
    background-color: var(--bg2);
    display: flex;
    flex-direction: row;
    align-items: center;
}

.control .btn {
    height: 20px;
    width: 20px;
    border: 1px solid var(--border);
    margin: 2px;
    border-radius: 6px;
}

.control .btn-group {
    justify-content: flex-end;
    display: flex;
    margin-left: auto;
    margin-right: 4px;
}


</style>
<style>
.el-tree {
    width: 100%;
}

.el-tree>.el-tree-node {
    display: inline-block;
    min-width: 100%;
}

.editor-container {
    display: flex;
}

.addFoloder-popover {
    width: auto !important;
}

@font-face {
    font-family: Harmony;
    src: url(./fonts/HarmonyOS_Sans_SC_Regular.ttf);
}

.view-line {
    font-family: Consolas, Harmony, "Courier New", monospace;
}
</style>
