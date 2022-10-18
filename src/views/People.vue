<template>
  <div>
    <el-input style="width: 150px" placeholder="input name" v-model="searchName">
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </el-input>
    <el-button @click="search" type="primary" style="margin: 15px 0">search</el-button>

    <!-- select file -->
    <input @change="uploadFile" ref="fileUploadRef" type="file" id="file-input" multiple style="display: none;" />

    <el-table :data="peopleList" border style="width: 100%" v-loading="isLoading">
      <el-table-column prop="name" label="Name" align="center"></el-table-column>
      <el-table-column prop="height" label="Height" width="180" align="center"></el-table-column>
      <el-table-column prop="author" label="Author" width="180" align="center"></el-table-column>
      <el-table-column prop="picture" label="Picture" align="center">
        <template v-slot:default="{ row }">
          <span>{{row.picture}}</span>
          <el-button @click="seePic(row.picture)" class="el-icon-view" type="text" size="mini" v-if="row.picture"></el-button>
          <el-button class="el-icon-view" type="text" size="mini" v-else>NULL</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="keywords" label="Keywords" align="center"></el-table-column>
      <el-table-column label="operation" align="center">
        <template v-slot:default="{ row }">
          <el-button @click="btnUpload(row)" type="primary" class="el-icon-upload2" size="mini">upload img</el-button>
        </template>
      </el-table-column>
    </el-table>

     <!-- dialog -->
    <el-dialog :title="picName" :visible.sync="showPic" width="30%">
      <el-image :src="picUrl" fit="cover"  @error="imgError"></el-image>
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
  created () {
    this.getPeopleInfo()
  },
  data () {
    return {
      peopleList: [],
      searchName: '',
      editPeople: {},
      isLoading: false,
      showPic: false,
      picUrl: '',
      picName: ''
    }
  },
  methods: {
    async getPeopleInfo () {
      this.isLoading = true
      // 人员列表数据
      const { data } = await this.$http.get('/data/fetchList')
      // console.log(data)
      this.peopleList = data
      this.isLoading = false
    },
    async search () {
      const { data } = await this.$http.get(`/data/fetchByName/${this.searchName}`)
      this.peopleList = data
    },
    // upload button click
    btnUpload (people) {
      this.$refs.fileUploadRef.click()
      this.editPeople = people
    },
    async uploadFile () {
      // selected filelist
      const fileList = this.$refs.fileUploadRef.files
      for (const file of fileList) {
        const blockBlobClient = containerClient.getBlockBlobClient(file.name)
        await blockBlobClient.uploadBrowserData(file)
      }
      // update personal info by api
      await this.$http.post('/data/updateByName', { ...this.editPeople, picture: fileList[0].name })
      // refresh filelist
      await this.getPeopleInfo()
      this.$message.success('upload success')
    },
    // preview picture
    seePic (name) {
      //  https://firtstsamp.blob.core.windows.net/firstsampcontainer/  -----container adress
      const baseUrl = 'https://firtstsamp.blob.core.windows.net/firstsampcontainer/'
      this.picName = name
      this.picUrl = baseUrl + name
      this.showPic = true
    },
    imgError () {
      this.$message.warning('No pictures found, please upload again')
    }
  }
}
</script>

<style lang="less" scoped>
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
