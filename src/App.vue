<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider
      v-model:collapsed="collapsed"
      :trigger="null"
      collapsible
      :collapsedWidth="48"
      :style="{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        background: '#fff',
      }"
    >
      <div class="logo h-48px flex items-center justify-center">
        <img
          src="./assets/images/logo.f330d3b5.png"
          class="w-72px"
          v-if="!collapsed"
        />
        <img
          src="./assets/images/logo2.45cb4193.jpg"
          class="max-w-28px"
          v-else
        />
      </div>
      <a-menu
          v-model:selectedKeys="selectedKeys"
          v-model:openKeys="openKeys"
          mode="inline"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <a-sub-menu key="sub1">
            <template #title>
              <span>
                <user-outlined />
                subnav 1
              </span>
            </template>
            <a-menu-item key="1">option1</a-menu-item>
            <a-menu-item key="2">option2</a-menu-item>
            <a-menu-item key="3">option3</a-menu-item>
            <a-menu-item key="4">option4</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <template #title>
              <span>
                <laptop-outlined />
                subnav 2
              </span>
            </template>
            <a-menu-item key="5">option5</a-menu-item>
            <a-menu-item key="6">option6</a-menu-item>
            <a-menu-item key="7">option7</a-menu-item>
            <a-menu-item key="8">option8</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub3">
            <template #title>
              <span>
                <notification-outlined />
                subnav 3
              </span>
            </template>
            <a-menu-item key="9">option9</a-menu-item>
            <a-menu-item key="10">option10</a-menu-item>
            <a-menu-item key="11">option11</a-menu-item>
            <a-menu-item key="12">option12</a-menu-item>
          </a-sub-menu>
        </a-menu>
    </a-layout-sider>
    <a-layout
      :style="{ marginLeft: collapsed ? '48px' : '200px' }"
      class="a-layout"
    >
      <a-layout-header
        class="menu-header"
        :style="{ left: collapsed ? '48px' : '200px' }"
      >
        <div class="menu-header-top">
          <menu-unfold-outlined
            v-if="collapsed"
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
          <menu-fold-outlined
            v-else
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
          1111
        </div>
        <div class="menu-header-content">header</div>
        <div class="menu-header-bottom">
          <div class="menu-header-bottom-back">
            <arrow-left-outlined />
            <h3>创建招采</h3>
          </div>
          <a-breadcrumb>
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item
              ><a href="">Application Center</a></a-breadcrumb-item
            >
          </a-breadcrumb>
        </div>
      </a-layout-header>

      <a-layout-content class="menu-content">
        <RouterView />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ArrowLeftOutlined,
  AppstoreOutlined
} from "@ant-design/icons-vue";
import { ref } from "vue";
const selectedKeys = ref<string[]>(["1"]);
const collapsed = ref<boolean>(false);
const openKeys = ref<string[]>(['sub1'])
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>

<style>
@import url("@/assets/style/common/var.css");
@import url("@/assets/style/common/common.less");
</style>
<style lang="less" scoped>
.a-layout {
  position: relative;
}
.menu-header {
  position: fixed;
  top: 0;
  left: 200px;
  right: 0;
  padding: 0;
  background: #f0f2f5;

  .menu-header-top {
    background: #fff;
    height: 48px;
  }
  .menu-header-content {
    margin: 16px;
    background: #ddd;
    height: 40px;
    margin-bottom: 0;
  }
  .menu-header-bottom {
    margin: 0 16px;
    background: #fff;
    padding-left: 28px;
    .menu-header-bottom-back {
      height: 42px;
      font-size: 20px;
      font-weight: 500;
      display: flex;
      align-items: center;
      h3 {
        padding-left: 16px;
      }
    }
  }
}
.menu-content {
  margin: 16px;
  padding: 24px;
  background: #fff;
  min-height: 280px;
  margin-top: 168px;
}
</style>
