<template>
  <div class="loginContainer">
    <h1>登录</h1>
    <input v-model="username" class="inputStyle" type="text" placeholder="账号"><br/>
    <input v-model="password" class="inputStyle" type="password" placeholder="密码"><br/>
    <button class="loginStyle" @click="login">登录</button>
  </div>
</template>

<script>
import '../assets/css/login.css'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  created () {
    console.log(123)
  },
  methods: {
    login () {
      this.$store.dispatch('login', {
        username: this.username,
        password: this.password
      }).then(() => {
        this.$router.push({
          name: 'Photos'
        })
      })
    }
  }
}
</script>
