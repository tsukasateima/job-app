<script setup lang="ts">
import TaskList from '@/components/list/TaskList.vue'
import TalentList from '@/components/list/TalentList.vue'
import { reactive } from 'vue'
const taskList = reactive([{ id: '1' }])
</script>

<template>
  <TaskList :taskList="taskList" />
  <TalentList :talentList="taskList" />
  <FooterTabbbar />
</template>

<style lang="scss" scoped></style>
