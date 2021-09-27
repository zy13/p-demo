<template>
  <div class="container">
    <div class="photoHeader">
      <div class="imgContainer">
        <img class="photoName" src="../assets/img/1.jpg" />
      </div>
      <div class="btnContainer">
        <span class="photoTitle">相册名称</span>
        <button class="mybtn" @click="showUploadView = true">上传照片</button>
      </div>
    </div>

    <div class="photoContainer">
      <template v-for="photo in photos">
        <router-link
          :to="{ name: 'Details', params: { id: photo.id, photo } }"
          :key="photo.id"
        >
          <div class="photoItem">
            <!-- :src="photo.imgUrl"  -->
            <img src="http://localhost:3000/static/img/logo.png"/>
            <span>
              {{ photo.name }}
            </span>
          </div>
        </router-link>
      </template>
    </div>
      <UploadView
      :visible.sync="showUploadView"
      @upload-completed="handleUploadCompleted"
    ></UploadView>
  </div>
</template>

<script>
import '../assets/css/photo.css'
import UploadView from '../components/UploadView'
import { apiGetPhotos } from '../api'

export default {
  components: {
    UploadView
  },
  data () {
    return {
      showUploadView: false,
      photos: []
    }
  },
  created () {
    this.getPhotos()
  },
  methods: {
    async getPhotos () {
      const { data } = await apiGetPhotos()
      this.photos = data.list
    },
    handleUploadCompleted () {
      this.getPhotos()
    }
  }
}
</script>
