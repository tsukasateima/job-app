<script setup lang="ts">
import { reactive } from 'vue'
import { adminAuditorCompanyDetail, adminAuditorCompanyEdit } from '@/api/admin'
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
  const res = await adminAuditorCompanyEdit({
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
  const res: any = await adminAuditorCompanyDetail({
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
  <van-nav-bar title="企业信息" left-arrow @click-left="leftBack" />
  <dl>
    <dt>
      <label>企业名称</label>
      <span>{{ state.item.company_name }}</span>
    </dt>
    <dt>
      <label>机构代码</label>
      <span>{{ state.item.organization_code }}</span>
    </dt>
    <dt>
      <label>企业法人</label>
      <span>{{ state.item.contacts }}</span>
    </dt>
    <dt>
      <label>联系电话</label>
      <span>{{ state.item.phone }}</span>
    </dt>
    <dd>
      <img :src="state.item.permit" />
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
      width: 14.08rem;
      height: 9.6rem;
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
