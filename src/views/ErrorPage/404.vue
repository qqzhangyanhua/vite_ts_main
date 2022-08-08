<!--
 * @Author: ZYH
 * @Date: 2022-08-08 11:26:19
 * @LastEditTime: 2022-08-08 11:48:13
 * @Description: 
-->
<template>
  <Result
    status="404"
    title="404"
    sub-title="Sorry, the page you visited does not exist."
  >
    <template #extra>
      <a-button type="primary" @click="handelBack">返回首页</a-button>
    </template>
  </Result>
</template>
<script lang="ts" setup>
import { Result } from "ant-design-vue";
import { useRouter } from "vue-router";
const router = useRouter();
const handelBack = () => {
  router.push({ name: "dashboard" });
};
</script>
<style lang="scss" scoped></style>
