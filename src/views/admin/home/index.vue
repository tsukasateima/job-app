<script setup lang="ts">
import FooterTabbar from '@/components/FooterTabbar/FooterTabbbar.vue'
import CharLine from './components/CharLine.vue'
import CharBar from './components/CharBar.vue'
import CharPie from './components/CharPie.vue'
import { adminHomeChart } from '@/api/admin'
import { reactive } from 'vue'
const state = reactive({
  chartData: Object as any
})
const getAdminHomeChart = async () => {
  const res = await adminHomeChart({})
  if (res) {
    state.chartData = res
  }
  console.log(state.chartData)
}
getAdminHomeChart()
</script>

<template>
  <div class="admin-home">
    <van-nav-bar class="admin-home-title" title="首页"></van-nav-bar>
    <div class="admin-banner">
      <img src="@/assets/img/admin/home/banner.png" alt="" />
      <p>轻松管理项目进度，提高审核效率</p>
    </div>

    <div class="admin-title">
      <div class="admin-title-header">
        <h3>工作管理<i></i></h3>
      </div>
    </div>

    <div class="admin-job">
      <router-link to="/admin/home/contract">
        <img src="@/assets/img/admin/home/icon-contract.png" />
        <h4>合约管理<span>合约进度管理</span></h4>
      </router-link>
      <router-link to="/admin/home/auditor/">
        <img src="@/assets/img/admin/home/icon-auditor.png" />
        <h4>审核管理<span>任务/认证管理</span></h4>
      </router-link>
      <router-link to="/admin/home/pay">
        <img src="@/assets/img/admin/home/icon-pay.png" />
        <h4>发薪管理<span>合约薪资管理</span></h4>
      </router-link>
      <router-link to="/admin/home/user">
        <img src="@/assets/img/admin/home/icon-user.png" />
        <h4>用户管理<span>入驻用户/企业</span></h4>
      </router-link>
    </div>

    <div class="admin-title">
      <div class="admin-title-header">
        <h3>合约数据（周）<i></i></h3>
        <dl>
          <dt>上周</dt>
          <dd>下周</dd>
        </dl>
      </div>
      <CharLine v-if="state.chartData.line" :data="state.chartData.line" />
    </div>

    <div class="admin-title">
      <div class="admin-title-header">
        <h3>新增入驻（周）<i></i></h3>
        <dl>
          <dt>人才</dt>
          <dd>企业</dd>
        </dl>
      </div>
      <CharBar v-if="state.chartData.bar" :data="state.chartData.bar" />
    </div>

    <div class="admin-title">
      <div class="admin-title-header">
        <h3>人才年龄比例<i></i></h3>
      </div>
      <CharPie v-if="state.chartData.pie" :data="state.chartData.pie" />
    </div>
  </div>
  <FooterTabbar />
</template>

<style lang="scss" scoped>
.admin-home {
  background-color: #f6f6f6;
  padding: 0 0.64rem 4rem;
}
.admin-home-title {
  background-color: #f6f6f6;
  font-size: 400;
  ::v-deep .van-nav-bar__title {
    font-weight: normal;
  }
}

.admin-banner {
  position: relative;
  img {
    width: 100%;
  }
  p {
    position: absolute;
    top: 3.1rem;
    left: 1.2rem;
    font-size: 0.69rem;
    font-weight: 300;
    color: #fff;
  }
}

.admin-job {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  a {
    display: flex;
    align-items: center;
    width: 48%;
    height: 4.45rem;
    background-color: #fff;
    border-radius: 0.53rem;
    margin-bottom: 1rem;
    img {
      width: 2.45rem;
      height: 2.45rem;
      margin: 0 0.56rem 0 0.72rem;
    }
    h4 {
      font-size: 0.8rem;
      line-height: 0.8rem;
      font-weight: 400;
      color: #333;
      span {
        font-size: 0.64rem;
        line-height: 0.64rem;
        font-weight: 300;
        color: #333;
        margin-top: 0.45rem;
        display: block;
      }
    }
  }
}

.admin-title {
  .admin-title-header {
    display: flex;
    align-items: center;
    margin-bottom: 0.67rem;
    margin-top: 1.44rem;
    h3 {
      flex: 1;
      font-size: 0.96rem;
      line-height: 0.96rem;
      font-weight: 900;
      color: #333;
      position: relative;
      margin-bottom: 0.4rem;
      i {
        position: absolute;
        left: -0.1rem;
        width: 3rem;
        height: 0.96rem;
        background: linear-gradient(90deg, $theme-orange, #fff);
        opacity: 0.4;
        border-radius: 0.32rem;
      }
    }
  }
  dl {
    display: flex;
    font-size: 0.59rem;
    line-height: 0.59rem;
    color: #666;
    dt {
      margin-right: 0.77rem;
      &::before {
        content: '';
        margin-right: 0.24rem;
        width: 0.37rem;
        height: 0.37rem;
        background: $theme-blue;
        border-radius: 50%;
        display: inline-block;
      }
    }
    dd {
      margin-right: 0.77rem;
      &::before {
        content: '';
        width: 0.37rem;
        height: 0.37rem;
        margin-right: 0.24rem;
        background: $theme-orange;
        border-radius: 50%;
        display: inline-block;
      }
    }
  }
}
</style>
