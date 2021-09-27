<template>
  <div class='uploadPhotoItem'>
    <span class='myProgress'>
      <span class='plan'></span>
      30%
    </span>
    <img :src='imgUrl' />
    <span class='pictureName'>
      {{ item.name }}
    </span>
  </div>
</template>

<script>
export default {
  props: ['item'],
  data () {
    return {
      imgUrl: ''
    }
  },
  created () {
    // 要解决的问题
    // 让 file 在浏览器里面呈现出来
    const render = new FileReader()
    render.onload = () => {
      // result base64 url -> file img
      this.imgUrl = render.result
    }
    render.readAsDataURL(this.item)
  }
}
</script>
