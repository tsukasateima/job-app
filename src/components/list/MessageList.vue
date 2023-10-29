<script setup lang="ts">
import { useRouter } from 'vue-router'
import { defineProps } from 'vue'
import type { PropType } from 'vue'
interface MessageItem {
  id: string
}
defineProps({
  messageList: {
    type: Array as PropType<MessageItem[]>,
    default: () => []
  }
})
const router = useRouter()
const gotoDetail = (id: any) => {
  router.push('/message/talk/' + id)
}
</script>

<template>
  <dl v-for="item in messageList" :key="item.id" @click="gotoDetail(item.id)">
    <dd>
      <img src="@/assets/img/icon/icon-message.png" alt="" />
      <span></span>
    </dd>
    <dt>
      <h3>123<span>5分钟前</span></h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas velit ex facere corrupti
        recusandae soluta minima eveniet maxime porro maiores sequi dolorum consequuntur cupiditate
        harum alias aspernatur sint, aliquid laudantium?
      </p>
    </dt>
  </dl>
</template>

<style scoped lang="scss">
dl {
  font-size: 0.64rem;
  color: #666666;
  padding: 0.9rem 0;
  margin: 0 0.67rem;
  border-bottom: 1px solid #eeeeee;
  display: flex;
  align-items: center;
  dd {
    position: relative;
    margin-right: 0.56rem;
    img {
      width: 2.61rem;
      height: 2.61rem;
      border-radius: 50%;
    }
    span {
      position: absolute;
      top: 0;
      right: 0;
      width: 0.32rem;
      height: 0.32rem;
      background: #ff0000;
      border-radius: 50%;
    }
  }

  dt {
    flex: 1;
    h3 {
      font-size: 0.8rem;
      line-height: 0.8rem;
      font-weight: 500;
      color: #333333;
      margin-bottom: 0.43rem;
      span {
        float: right;
        color: #999999;
        font-size: 0.64rem;
        font-weight: 100;
      }
    }
    p {
      font-size: 0.69rem;
      line-height: 0.69rem;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
