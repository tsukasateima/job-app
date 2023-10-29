<script setup lang="ts">
import { reactive } from 'vue'
import { adminAuditorTalentDetail, adminAuditorTalentEdit } from '@/api/admin'
import { showToast } from 'vant'
import { useRouter } from 'vue-router'
import debounce from '@/utils/debounce'
const router = useRouter()
const id = router.currentRoute.value.params.id
const leftBack = () => history.back()
const state: any = reactive({
  loading: false,
  item: {}
})
const auditorEdit = async (type: any) => {
  const res = await adminAuditorTalentEdit({
    user_id: id,
    is_check: type
  })
  if (res) {
    showToast('操作成功')
    leftBack()
  }
}
const auditorEditPass = () => {
  debounce(auditorEdit(1), 1000)
}
const auditorEditFail = () => {
  debounce(auditorEdit(2), 1000)
}
const getDetail = async () => {
  state.loading = true
  const res: any = await adminAuditorTalentDetail({
    id: id
  })
  if (res) {
    state.item = res
  } else {
    showToast(res.msg)
  }
  state.loading = false
}
getDetail()
</script>
<template>
  <van-nav-bar title="个人信息" left-arrow @click-left="leftBack" />
  <dl>
    <dt>
      <label>姓 名</label>
      <span>{{ state.item.real_name }}</span>
    </dt>
    <dt>
      <label>性 别</label>
      <span>{{ state.item.sex }}</span>
    </dt>
    <dt>
      <label>年 龄</label>
      <span>{{ state.item.age }}</span>
    </dt>
    <dt>
      <label>工 龄</label>
      <span>{{ state.item.work_year }}</span>
    </dt>
    <dt>
      <label>城 市</label>
      <span>{{ state.item.city }}</span>
    </dt>
    <dt>
      <label>证 件 号</label>
      <span>{{ state.item.idcard }}</span>
    </dt>
    <dt>
      <p>{{ state.item.task_ask }}</p>
    </dt>
    <dd>
      <img :src="state.item.idCard_just" />
      <img :src="state.item.idCard_back" />
    </dd>
  </dl>
  <div class="detail-btn">
    <button @click="auditorEditPass">审核通过</button>
    <button @click="auditorEditFail">审核失败</button>
  </div>
</template>
<style scoped lang="scss">
dl {
  padding: 0.64rem;
  dt {
    margin-bottom: 1rem;
    label {
      font-size: 0.69rem;
      line-height: 0.69rem;
      font-weight: 400;
      color: #666666;
      margin-right: 0.77rem;
      width: 2.8rem;
      display: inline-block;
      text-align: justify;
      text-align-last: justify;
    }
    span {
      font-size: 0.69rem;
      line-height: 0.69rem;
      font-weight: 400;
      color: #000000;
    }
    p {
      font-size: 0.69rem;
      font-weight: 300;
      color: #333333;
      line-height: 1.23rem;
    }
  }

  dd {
    display: flex;
    justify-content: space-between;
    margin: 0 1.2rem;
    img {
      width: 7.47rem;
      height: 4.83rem;
    }
  }
}

.detail-btn {
  position: fixed;
  bottom: 0.64rem;
  display: flex;
  left: 0.54rem;
  right: 0.54rem;
  button {
    height: 2.35rem;
    background: #fe9215;
    border-radius: 0.27rem;
    font-size: 0.8rem;
    text-align: center;
    font-weight: 400;
    color: #ffffff;
    border: none;
    flex: 1;
    margin: 0 0.2rem;
  }
}
</style>
