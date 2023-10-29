<script setup lang="ts">
import { reactive } from 'vue'
import MessageList from '@/components/list/MessageList.vue'
const messageList = reactive([{ id: '1' }, { id: '2' }])
</script>

<template>
  <MessageList :messageList="messageList" />
  <FooterTabbbar />
</template>

<style lang="scss" scoped></style>
