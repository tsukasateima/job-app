<script setup lang="ts">
const leftBack = () => history.back()
</script>
<template>
  <van-nav-bar title="关于我们" left-arrow @click-left="leftBack" />
  <div class="about-page">
    <h5><i /> 简介</h5>
    <p>
      北京驻场无忧科技有限公司以提供互联网技术人才驻场、远程、全职服务为核心业务。自2017年创立以来，服务了200家以上的互联网企业，涉及电商、医疗、金融、教育、视频、SASS、H5游戏、农业、工业、制造业、二手车、旅游、建材、租赁、数字藏品、IT企业服务、招聘、保险、装修、物流移动应用等行业。
    </p>
    <h5><i />使命</h5>
    <p>让技术服务更简单</p>
    <h5><i /> 愿景</h5>
    <p>成为全国领先的互联网技术人才服务商</p>

    <h5><i />北京驻场无忧科技有限公司</h5>
    <p>联系人：秦先生 <br />电话：13321178501 <br />邮箱：joshen@zcwytd.com</p>
  </div>
</template>
<style scoped lang="scss">
.about-page {
  height: calc(100vh - 46px);
  padding: 0.85rem 0.61rem;
}
h5 {
  font-weight: 400;
  font-size: 1rem;
  line-height: 1rem;
  color: #333333;

  margin-bottom: 0.53rem;
  i {
    display: inline-block;
    height: 1rem;
    width: 0.2rem;
    background: $theme-orange;
    margin-right: 0.5rem;
  }
}
p {
  font-size: 0.75rem;
  font-weight: 400;
  color: #333333;
  line-height: 1.23rem;
  margin-bottom: 1.5rem;
}
</style>
