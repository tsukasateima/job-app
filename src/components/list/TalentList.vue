<script setup lang="ts">
import { useRouter } from 'vue-router'
import { defineProps } from 'vue'
import type { PropType } from 'vue'
interface TalentItem {
  id: string
}
defineProps({
  talentList: {
    type: Array as PropType<TalentItem[]>,
    default: () => []
  }
})
const router = useRouter()
const gotoDetail = (id: any) => {
  router.push('/talent/details/' + id)
}
</script>

<template>
  <div class="talent-item" v-for="item in talentList" :key="item.id" @click="gotoDetail(item.id)">
    <div class="talent-item-top">
      <div class="talent-item-pic">
        <img src="@/assets/img/icon/icon-message.png" alt="" />
      </div>
      <div class="talent-item-cont">
        <h3>
          李想
          <span class="orange">驻场</span>
          <span class="blue">远程</span>
          <span class="green">全职</span>
        </h3>
        <p>前端工程师 | 5年 | 本科 | 23岁</p>
        <dl>
          <dt>vue</dt>
          <dt>nodejs</dt>
          <dt>小程序</dt>
        </dl>
      </div>
    </div>

    <div class="talent-item-bottom">
      <label>已做两个项目</label>
      <span><van-icon name="location-o" />北京</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.talent-item {
  margin: 0 0.64rem 0.53rem;
  padding: 0.77rem 0.64rem;
  background-color: #fff;
  border-radius: 0.53rem;
  .talent-item-top {
    display: flex;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid #f5f5f5;

    .talent-item-pic {
      width: 4rem;
      height: 4rem;
      border-radius: 0.27rem;
      overflow: hidden;
      margin-right: 0.85rem;
      img {
        width: 100%;
        height: 100%;
      }
    }

    .talent-item-cont {
      h3 {
        font-size: 0.91rem;
        font-weight: 400;
        color: #333;
        display: flex;
        align-items: center;
        margin-bottom: 0.64rem;
        span {
          width: 1.97rem;
          height: 0.85rem;
          line-height: 0.85rem;
          border-radius: 0.43rem;
          font-size: 0.59rem;
          font-weight: 300;
          text-align: center;
          margin-left: 0.2rem;
          color: #fff;
          &.orange {
            background: linear-gradient(90deg, $theme-orange, $theme-deep-orange);
          }
          &.blue {
            background: linear-gradient(90deg, $theme-blue, $theme-deep-blue);
          }
          &.green {
            background: linear-gradient(90deg, $theme-green, $theme-deep-green);
          }
        }
      }
      p {
        font-size: 0.69rem;
        line-height: 0.69rem;
        font-weight: 100;
        color: #666;
        margin-bottom: 0.56rem;
      }
      dl {
        display: flex;
        dt {
          padding: 0.3rem 0.5rem;
          font-size: 0.59rem;
          line-height: 0.59rem;
          font-weight: 300;
          color: #666;
          background-color: #f6f7f8;
          border-radius: 0.16rem;
          margin-right: 0.27rem;
        }
      }
    }
  }
  .talent-item-bottom {
    display: flex;
    padding: 0.72rem 0 0.72rem;
    font-size: 0.8rem;
    font-weight: 500;
    margin-right: 0.1rem;
    color: #333;
    label {
      flex: 1;
    }
    span {
      text-align: right;
    }
    i {
      font-size: 0.8rem;
      font-weight: 500;
      margin-right: 0.1rem;
    }
  }
}
</style>
