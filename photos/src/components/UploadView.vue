<template>
  <div class='masking' v-show='visible'>
    <div class='addPhotoContainer'></div>
    <div class='addController'>
      <h3 class='addTitle'>
        上传照片-普通上传(H5)<span class='close' @click='close'>╳</span>
      </h3>
      <div class='photoTitles'>
        <span class='uploadTo'>上传到</span>
        <div class='photoSelect'>
          <img class='showPhoto' src='public/img/1.jpg' />
          相册名称
        </div>
      </div>

      <!-- 上传按钮 -->
      <div class='showContainer' v-show='!showLoadContainer'>
        <div class='uploadContainer'>
          <span class='fileinput-button'>
            <span>上传图片</span>
            <input
              class='imgFile'
              type='file'
              name=''
              multiple='multiple'
              @input='addPhoto'
            />
          </span>
          <span class='hint'>
            按住Ctrl可多选
          </span>
        </div>
      </div>

      <!-- 显示待上传图片  -->
      <div class='loadContainer' v-show='showLoadContainer'>
        <div class='wantUpload'>
          <template v-for='(item, index) in wantUploadPhotos'>
            <uploadPhotoItem :item='item' :key='index'></uploadPhotoItem>
          </template>
        </div>
        <div class='addStyle'>
          <!-- <span class='fileinput-add'>
              <span></span>
              <input class='imgFile-add' type='file' multiple='multiple' />
            </span> -->
        </div>
        <!-- 开始上传按钮 -->
        <div class='bottomStyle'>
          <span class='uploadBtn' @click='updatePhotos'>开始上传</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import uploadPhotoItem from './uploadPhotoItem'
import { apiUpload } from '../api'
export default {
  props: ['visible'],
  components: {
    uploadPhotoItem
  },
  data () {
    return {
      wantUploadPhotos: []
    }
  },
  computed: {
    showLoadContainer () {
      return this.wantUploadPhotos.length > 0
    }
  },
  methods: {
    async updatePhotos () {
      for (const item of this.wantUploadPhotos) {
        await apiUpload(item)
      }
      // 写好代码的一个点
      // 表达出代码的意图
      // 就是给它一个好的名字
      // 中层次的代码
      // 代码整洁之道
      // 重构
      this.uploadCompleted()
    },

    uploadCompleted () {
      // 所有的 file 都上传ok了
      // 低层次的代码
      this.reset()
      this.$emit('upload-completed')
    },

    reset () {
      this.wantUploadPhotos = []
    },

    close () {
      this.$emit('update:visible', false)
    },
    addPhoto (e) {
      this.wantUploadPhotos.push(...Array.from(e.target.files))
    }
  }
}
</script>

<style></style>
