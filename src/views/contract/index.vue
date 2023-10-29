<script setup lang="ts">
import { reactive } from 'vue'
import ContractList from '@/components/list/ContractList.vue'
const contractList = reactive([{ id: '1' }])
</script>

<template>
  <ContractList :contractList="contractList" />
  <FooterTabbbar />
</template>

<style lang="scss" scoped></style>
