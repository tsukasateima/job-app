<script setup lang="ts">
import { useRouter } from 'vue-router'
import { defineProps } from 'vue'
import type { PropType } from 'vue'
interface TaskItem {
  id: string
}
defineProps({
  taskList: {
    type: Array as PropType<TaskItem[]>,
    default: () => []
  }
})
const router = useRouter()
const gotoDetail = (id: any) => {
  router.push('/task/detail/' + id)
}
</script>

<template>
  <div class="task-item" v-for="item in taskList" :key="item.id" @click="gotoDetail(item.id)">
    <div class="task-item-top">
      <h3>移动端小程序开发</h3>
      <span>紧急</span>
    </div>
    <dl class="task-project-requirement">
      <dt>
        <h5>任务预算</h5>
        <strong>￥1000</strong>
      </dt>
      <dt>
        <h5>任务周期</h5>
        <strong>90天</strong>
      </dt>
      <dt>
        <h5>服务方式</h5>
        <strong>驻场</strong>
      </dt>
    </dl>
    <p class="task-requirement">
      任务要求：Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque inventore atque non
      commodi voluptates ducimus et voluptatum debitis reprehenderit repellat, minima sint?
      Laudantium vero eius accusamus officia cum voluptate dolorum?Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Rerum quasi perspiciatis porro sit veniam aut, doloribus minima
      ipsa itaque cum, eligendi nemo nihil molestias at deleniti perferendis asperiores voluptatem.
      Sint.
    </p>
    <div class="task-item-bottom">
      <label>公司名称</label>
      <span><van-icon name="location-o" />北京</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.task-item {
  background-color: #fff;
  border-radius: 0.53rem;
  margin: 0 0.64rem 0.53rem;
  padding: 0.88rem 0.48rem 0.75rem;
  font-size: 0.69rem;
  font-weight: 100;
  color: #666;

  .task-item-top {
    display: flex;
    h3 {
      font-size: 0.91rem;
      line-height: 0.91rem;
      font-weight: 400;
      color: #333;
      margin-bottom: 1.01rem;
    }
    span {
      position: absolute;
      right: 0.64rem;
      width: 2.29rem;
      height: 1.08rem;
      line-height: 1.08rem;
      background: linear-gradient(90deg, $theme-orange, $theme-deep-orange);
      border-radius: 0.53rem 0 0 0.53rem;
      text-align: center;
      font-size: 0.59rem;
      color: #fff;
    }
  }
  .task-project-requirement {
    display: flex;
    margin-bottom: 0.96rem;
    dt {
      margin-right: 1.44rem;
      h5 {
        font-size: 0.69rem;
        line-height: 0.69rem;
        margin-bottom: 0.53rem;
        color: #999;
      }
      strong {
        font-size: 0.69rem;
        font-weight: 500;
        color: #333;
      }
    }
  }

  .task-requirement {
    color: #333;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  .task-item-bottom {
    display: flex;
    border-top: 1px solid #f5f5f5;
    margin-top: 0.72rem;
    padding-top: 0.72rem;
    line-height: 0.69rem;
    label {
      flex: 1;
    }
    span {
      text-align: right;
    }
    i {
      font-size: 0.8rem;
      font-weight: 600;
      margin-right: 0.1rem;
    }
  }
}
</style>
