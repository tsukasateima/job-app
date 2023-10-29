<script setup lang="ts">
import { reactive } from 'vue'
import { getPolicy } from '@/api/user'
import { showToast } from 'vant'
const onClickLeft = () => {
  window.history.back()
}
const state = reactive({
  htmlText: ''
})
const getPolicys = async () => {
  const res: any = await getPolicy({
    id: 16
  })
  if (res) {
    console.log(res)
    state.htmlText = res.records[6].content
  } else {
    showToast('获取隐私政策失败')
  }
}
getPolicys()
</script>

<template>
  <van-nav-bar title="服务协议" left-text="" left-arrow @click="onClickLeft" />
  <div class="text-agree" v-html="state.htmlText"></div>
</template>

<style lang="scss" scoped></style>
