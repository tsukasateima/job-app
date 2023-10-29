<script setup lang="ts">
import { reactive } from 'vue'
import { getCode, login } from '@/api/user'
import { userStore } from '@/store/user'
import { useRouter } from 'vue-router'
import { showToast } from 'vant'
const store = userStore()
const state: any = reactive({
  checked: true,
  accounts: '',
  code: '',
  codeText: '获取验证码',
  time: 60,
  interTimeCode: null
})
const onClickLeft = () => {
  window.history.back()
}
const getCodeChange = async () => {
  if (state.interTimeCode) return // 防止重复点击
  const res: any = await getCode({ accounts: state.accounts })
  if (res) {
    state.interTimeCode = setInterval(() => {
      state.time--
      state.codeText = `${state.time}秒后重发`
      if (state.time <= 0) {
        clearInterval(state.interTimeCode)
        state.interTimeCode = null
        state.time = 60
        state.codeText = '获取验证码'
      } else {
        state.codeText = `${state.time}秒后重发`
      }
    }, 1000)
    state.code = res.code
  }
}
const router = useRouter()
const loginSubmit = async () => {
  if (!state.checked) {
    showToast('请先阅读并同意《IT企业平台服务协议》和《隐私政策》')
    return
  }
  if (state.accounts === '') {
    showToast('请输入手机号')
    return
  }
  if (!state.code) {
    showToast('请输入验证码')
    return
  }
  const res: any = await login({
    accounts: state.accounts,
    code: state.code
  })
  if (res.errCode === 200) {
    store.setUserInfo(res.data)
    if (store.role === 1) {
      router.push('/task')
    } else if (store.role === 2) {
      router.push('/admin/home')
    } else if (store.role === 3) {
      router.push('/talent')
    }
  } else {
    showToast(res.msg)
  }
}
</script>

<template>
  <div class="login-container">
    <van-icon class="icon-left" name="arrow-left" @click="onClickLeft" />
    <div class="login-form">
      <h3>验证码登录</h3>
      <div class="login-form-item">
        <i class="icon-phone"></i>
        <input type="text" placeholder="请输入手机号" v-model="state.accounts" />
      </div>
      <div class="login-form-item">
        <i class="icon-code"></i>
        <input type="text" placeholder="请输入验证码" v-model="state.code" />
        <span @click="getCodeChange">{{ state.codeText }}</span>
      </div>
      <van-button class="login-button" type="primary" block @click="loginSubmit">登录</van-button>
      <div class="login-form-label">
        <van-checkbox v-model="state.checked">我已阅读</van-checkbox>
        <router-link to="/login/serviceAgree">《IT企业平台服务协议》</router-link>和
        <router-link to="/login/privacyPolicy">《隐私政策》</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.icon-left {
  font-size: 0.9rem;
  margin: 0.67rem 0 0 0.67rem;
}
.login-form {
  padding: 0 1.07rem;
  h3 {
    font-size: 1.39rem;
    line-height: 1.39rem;
    font-weight: 400;
    color: #333;
    margin-top: 2.35rem;
    margin-bottom: 4rem;
    padding-left: 0.3rem;
  }
  .login-form-item {
    display: flex;
    font-size: 0.75rem;
    font-weight: 300;
    color: #9fa7ad;
    margin: 0 0.18rem 2rem;
    padding: 0.5rem 0;
    border-bottom: 1px solid #e7e7e7;
    align-items: center;
    .icon-phone {
      background: url('@/assets/img/icon/icon-phone.png') no-repeat;
      background-size: contain;
      width: 1.01rem;
      height: 1.01rem;
    }
    .icon-code {
      background: url('@/assets/img/icon/icon-code.png') no-repeat;
      background-size: contain;
      width: 1.01rem;
      height: 1.01rem;
    }
    input {
      flex: 1;
      margin-left: 0.48rem;
    }
    span {
      font-size: 0.75rem;
      font-weight: 300;
      color: $theme-orange;
      border-left: 1px solid $theme-orange;
      line-height: 0.75rem;
      padding-left: 0.56rem;
    }
  }
  .login-button {
    border-radius: 0.45rem;
  }
  .login-form-label {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 1.5rem;
    left: 0;
    width: 100%;
  }
}
</style>
