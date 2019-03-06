<template>
  <div class="login-wrap">
    <div class="login">
      <h2>登录界面</h2>
      <input
        type="text"
        placeholder="请输入用户名"
        v-model="formData.acc"
      >
      <input
        type="text"
        placeholder="请输入密码"
        v-model="formData.password"
      >
      <button @click="login">登录</button>
    </div>
  </div>
</template>

<script>
import md5 from 'js-md5'
import { setToken } from '@/utils/auth'
import { userLogin } from '@/api/user'
export default {
  name: 'login',
  data () {
    return {
      formData: {
        acc: '',
        password: ''
      }
    }
  },
  mounted () {
  },
  methods: {
    login () {
      let params = {
        acc: this.formData.acc,
        pwd: md5(this.formData.password)
      }
      userLogin(JSON.stringify(params)).then((res) => {
        console.log('res=', res)
        let { status, desc, data } = res
        if (status !== 200) {
          return
        }
        setToken(data.data.token)
        this.$router.push({ name: 'layout' })
      })
    }
  }
}
</script>

<style lang="css" scoped>
.login-wrap {
  width: 100%;
  height: 100%;
  position: relative;
}
.login {
  width: 200px;
  height: 200px;
  border: 1px solid #ccc;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
