<script setup lang="ts">
import { ref, reactive } from 'vue';

const props = defineProps<{
  id: number,
  device: boolean,
  token: boolean
}>()

const upload = () => {
  isupload.value = true
  containerStyle.height = "280px"
}

var containerStyle = reactive({
  border: ((!props.device && !props.token) || !props.token?`#F56C6C solid 2px`:``),
  margin: ((!props.device && !props.token) || !props.token?`2px`:``),
  height: ""
})

var uploadFile = ref("device.json")

var isupload = ref(false);

var uploadSelecter = ref();



const uploadFunc = async (file,files) => {
  // console.log();
  var event = event || window.event;
    var file = event.target.files[0];
    var reader = new FileReader(); 
    //转base64
    reader.onload = function(e) {
    // _this.imageUrl = e.target.result //将图片路径赋值给src
      console.log(e.target.result);
      
    }
    reader.readAsDataURL(file);
  
}

</script>
<template>
  <div class="container" :style="containerStyle">
    <div class="front" :style="isupload?`margin-left: -269.33px;`:``">
      <div class="logo">
        <img :src="`http://q2.qlogo.cn/headimg_dl?dst_uin=${id}&spec=100`"/>
      </div>
      <div class="information">
        <div class="id">{{ id }}</div>
        <div>设备信息: 
          <span style="font-weight: bold;color: #67C23A" v-if="device">√</span>
          <span style="font-weight: bold;color: #F56C6C" v-else>x</span>
        </div>
        <div>会话信息: 
          <span style="font-weight: bold;color: #67C23A" v-if="token">√</span>
          <span style="font-weight: bold;color: #F56C6C" v-else>x</span>
        </div>
      </div>
    </div>
    <div class="behind" @click="upload" :class="isupload?`upload`:`noupload`">
      {{ isupload?``:`上传` }}
      <div style="margin: 10px;transition: 0.5;" :style="isupload?`opacity: 1;`:`opacity: 0;display: none;`">
        <el-upload
          class="upload-demo"
          drag
          action="#"
          multiple
          :auto-upload="false"
          ref="uploadSelecter"
          :on-change="uploadFunc"
          :limit="1"
        >
          <el-icon>当前用户 {{ id }} </el-icon>
          <div class="el-upload__text">
            <br/>
            将文件拖到这里或者<em> 点击此处上传 </em>
          </div>
          <template #tip>
            <div class="el-upload__tip">
              点击下面按钮切换上传文件
            </div>
          </template>
        </el-upload>
        <div>
          <k-button v-if="isupload" class="btn" @click="(`device.json`)">上传设备文件</k-button>
          <k-button v-if="isupload" class="btn" @click="(`session.token`)">上传会话文件</k-button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
img {
  border-radius: 16.44px;
  height: 76px;
  margin: 6px;
}
.container {
  display: flex;
  background-color: var(--bg1);
  margin: 8px;
  height: 88px;
  border-radius: 16.44px;
  transition: 0.3s;
  overflow: hidden;
}
.front {
  transition: 0.3s;
  display: flex;
  height: 100%;
  margin-right: 38px;
}
.behind {
  width: 100%;
  height: 100%;
  background-color:   orange;
  transition: 0.3s;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  font-size: 0px;
}
.behind.upload {
  padding-left: 0px;
}
.information {
  margin: 10px;
}
.id {
  font-size: 20px;
  font-weight: bolder;
  width: 123.334px;
}

.container:hover .front {
  /* transform: translateX(-88px); */
  margin-left: -88px;
  opacity: 0.4;
  filter: blur(1px);
}
.container:hover .behind.noupload {
  /* transform: translatex(-58.91px); */
  /* width: 58.91px; */
  background-color: rgb(255, 196, 0);
  font-size: 20px;
  padding-left: 0px;
  cursor: pointer;
  user-select: none;
}
.upload {
  font-size: 16px;
  background-color: var(--bg3);
  display: flex;
  flex-direction: row;
}
/* .btn {
  height: 20px;
  background-color: rgb(255, 196, 0);
  margin: 5px;
  padding: 5px;
} */
</style>
<style>
.behind.upload ul.el-upload-list.el-upload-list--text * {
    font-size: 10px !important;
}
</style>