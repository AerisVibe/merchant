<template>
  <el-container class="h-screen flex items-center justify-center bg-cyan-950 ">
    <el-container class="max-w-3xl flex items-center justify-center">
      <el-row class="w-full">
        <el-form :model="loginForm"
                 ref="loginForm"
                 @keyup.enter.native="handleLogin"
                 class="login-form"
                 auto-complete="on"
                 label-position="left">
          <el-form-item prop="username">
            <el-input
                v-model="loginForm.username"
                placeholder="Username"
                name="username"
                type="text"
                tabindex="1"/>
            <el-text class="show-pwd" @click="showPwd">
              <el-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"/>

            </el-text>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
                :type="passwordType"
                :pwd-strength="true"
                v-model="loginForm.password"
                placeholder="Password"
                name="password"
                tabindex="2"
                @keyup.native="checkCapslock"
                @blur="capsTooltip = false"
                @keyup.enter.native="handleLogin"
            />
            <el-text class="show-pwd" @click="showPwd">
              <el-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"/>
              <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
                <i class="el-icon-warning"/>
              </el-tooltip>
              <el-dialog title="提示" :visible.sync="showDialog">
                <el-text>这是一段信息</el-text>
              </el-dialog>
            </el-text>
          </el-form-item>
          <el-button :loading="loading"
                     type="primary"
                     style="width:100%;margin-bottom:30px;"
                     @click.native.prevent="handleLogin">
            Login
          </el-button>
          <el-container class="flex items-center justify-between">
            <el-checkbox v-model="loginForm.rememberMe">请仔细阅读</el-checkbox>
            <a href="javascript:;">用户协议</a>
          </el-container>
          <el-container class="flex justify-between">
            <el-button type="text" @click="showDialog = true">注册</el-button>
            <el-button type="text" @click="showDialog = true">忘记密码</el-button>
          </el-container>


        </el-form>
      </el-row>
      <!--      <el-text class="login-title">登录</el-text>-->
      <!--      <el-input v-model="loginForm.username"></el-input>-->
      <!--      <el-input v-model="loginForm.password"></el-input>-->
    </el-container>

  </el-container>
</template>
<script lang="ts" setup>
// lang="ts" 支撑ts语法
import {ref, reactive} from 'vue'
import router from '@/router'


const loginForm = reactive({
      username: '',
      password: '',
      rememberMe: false,
    }
)

const passwordType = ref('password')
const capsTooltip = ref(false)
const loading = ref(false)
const showDialog = ref(false)


const checkCapslock = (e) => {
  const {key} = e
  capsTooltip.value = key && key.length === 1 && (key >= 'A' && key <= 'Z')
}
const showPwd = () => {
  if (passwordType.value === 'password') {
    passwordType.value = ''
  } else {
    passwordType.value = 'password'
  }
}
const handleLogin = () => {
  router.push({
    path: '/layout',
  })
}

const getOtherQuery = (query) => {
  return Object.keys(query).reduce((acc, cur) => {
    if (cur !== 'redirect') {
      acc[cur] = query[cur]
    }
    return acc
  }, {})
}
</script>

<style>

</style>
