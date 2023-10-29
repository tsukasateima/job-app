<script setup lang="ts">
import { useRouter } from 'vue-router'
import { defineProps } from 'vue'
import type { PropType } from 'vue'
interface ContractItem {
  id: string
}
defineProps({
  contractList: {
    type: Array as PropType<ContractItem[]>,
    default: () => []
  }
})
const router = useRouter()
const gotoDetail = (id: any) => {
  router.push('/contract/details/' + id)
}
</script>

<template>
  <dl v-for="item in contractList" :key="item.id" @click="gotoDetail(item.id)">
    <dd>
      <h3>移动端小程序开发工程师</h3>
      <span>履约中</span>
      <van-icon class="progress-icon" name="arrow" />
    </dd>
    <dt>
      <label>公司名称</label>
      <span>北京无忧科技有限公司</span>
    </dt>
    <dt>
      <label>合约类型</label>
      <span></span>
    </dt>
    <dt>
      <label>合约周期</label>
      <span></span>
    </dt>
    <dt>
      <label>签约时间</label>
      <span></span>
    </dt>
    <dt>
      <label>合约进度</label>
      <span></span>
    </dt>
    <dt class="contract-progress">
      <i class="orange"></i>
      <i class="green"></i>
      <i></i>
      <i></i>
    </dt>
  </dl>
</template>

<style lang="scss" scoped>
dl {
  font-size: 0.64rem;
  color: #666;
  padding: 1rem 0.7rem;
  border: 1px solid #eee;
  background-color: #fff;
  dd {
    display: flex;
    margin-bottom: 0.9rem;
    align-items: center;
    h3 {
      font-size: 0.8rem;
      font-weight: 500;
      color: #333;
      flex: 1;
    }
    span {
      text-align: right;
      font-size: 0.75rem;
      color: $theme-orange;
    }
    i {
      color: $theme-orange;
      font-size: 0.75rem;
    }
  }

  dt {
    display: flex;
    margin-bottom: 0.72rem;
    &:last-child {
      margin-bottom: 0;
    }
    label {
      flex: 1;
    }
    span {
      text-align: right;
    }
  }
  .contract-progress {
    display: flex;
    height: 0.53rem;
    width: 100%;
    i {
      flex: 1;
      background-color: $theme-grey;
      margin: 0 1px;
      &.green {
        background-color: $theme-green;
      }
      &.orange {
        background-color: $theme-orange;
      }
      &.red {
        background-color: $theme-red;
      }
    }
  }
}
</style>
