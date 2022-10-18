<template>
  <div>
    <el-button @click="btnUpload" type="primary" class="el-icon-upload2" v-if="false"> Select and upload files</el-button>
    <el-button @click="btnDelete" type="primary" class="el-icon-upload2" v-if="false"> Test Delete</el-button>
    <input @change="uploadFile" ref="fileUploadRef" type="file" id="file-input" multiple style="display: none;" />
    <h2 style="color: #42b983">List file name and size</h2>
    <div class="table_container">
      <el-table :data="blobList" border v-loading="loading">
        <el-table-column prop="value.name" label="name" align="center"></el-table-column>
        <el-table-column prop="value.properties.contentLength" label="size(bit)" align="center"></el-table-column>
        <el-table-column label="operation" align="center">
          <template #default='{row}'>
            <!-- <template v-slot='{row}'> -->
            <!-- <template v-slot:default='{row}'> -->
            <!-- https://firtstsamp.blob.core.windows.net/firstsampcontainer/ -->
            <el-button @click="seePic(row.value.name)" class="el-icon-view" type="primary" size="small">see</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- dialog -->
    <el-dialog :title="picName" :visible.sync="showPic" width="30%">
      <el-image :src="picUrl" fit="cover"></el-image>
    </el-dialog>
  </div>
</template>

<script>
// 导入Azure存储包
import { BlobServiceClient } from '@azure/storage-blob'
// 存储账户信息-Blob 服务 SAS URL
const blobSasUrl = 'https://firtstsamp.blob.core.windows.net/?sv=2021-06-08&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2022-11-04T15:58:18Z&st=2022-10-17T07:58:18Z&spr=https,http&sig=bg3QhXf5dgyWudA%2B6i6ggMhx4Id5YbzKnVtXiaHl2Qw%3D'
// Create a new BlobServiceClient
const blobServiceClient = new BlobServiceClient(blobSasUrl)
// Get a container client from the BlobServiceClient，这里我的存储桶名字为 firstsampcontainer
const containerClient = blobServiceClient.getContainerClient('firstsampcontainer')
export default {
  name: 'Home',
  data () {
    return {
      // 文件信息列表
      blobList: [],
      loading: false,
      showPic: false,
      picUrl: '',
      picName: ''
    }
  },
  created () {
    this.getFileInfo()
  },
  methods: {
    // 获取文件信息 get file info
    async getFileInfo () {
      this.loading = true
      this.blobList = []
      // 存储容器的内容,迭代器
      const iter = containerClient.listBlobsFlat()
      let blobItem = await iter.next()
      this.blobList.push(blobItem)
      // 根据done判断是否完成
      while (!blobItem.done) {
        blobItem = await iter.next()
        // 添加文件到文件信息列表
        this.blobList.push(blobItem)
      }
      // 移除最后一个空对象信息
      this.blobList.pop()
      this.loading = false
    },
    // 上传文件按钮点击事件
    btnUpload () {
      this.$refs.fileUploadRef.click()
    },
    // 上传文件 upload file
    async uploadFile () {
      // 选择的文件列表 selected filelist
      const fileList = this.$refs.fileUploadRef.files
      for (const file of fileList) {
        const blockBlobClient = containerClient.getBlockBlobClient(file.name)
        await blockBlobClient.uploadBrowserData(file)
      }
      // 刷新文件列表 refresh filelist
      this.getFileInfo()
      this.$message.success('upload success')
    },
    async btnDelete () {
      try {
        await containerClient.deleteBlob('QQ浏览器截图20210813160829.png')
        this.getFileInfo()
        this.$message.success('delete success')
      } catch {
        this.$message.success('Something went wrong')
      }
    },
    seePic (name) {
      //  https://firtstsamp.blob.core.windows.net/firstsampcontainer/ 桶地址 container adress
      const baseUrl = 'https://firtstsamp.blob.core.windows.net/firstsampcontainer/'
      this.picName = name
      this.picUrl = baseUrl + name
      this.showPic = true
    }
  }
}
</script>

<style lang="less" scoped>
.table_container {
  margin: 0 auto;
}
/deep/ .el-dialog__header {
  background-color: #3e98f6;
  text-align: left;
  .el-dialog__title {
    color: #fff;
  }
}
/deep/ .el-icon-close:before {
  color: #fff;
}
</style>
