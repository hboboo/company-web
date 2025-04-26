<template>
  <div class="header">
    <div class="logo">
      <img src="../assets/img/toplogo.png" alt="Logo" />
    </div>
    <div class="navbar">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="nav-item"
        :class="{ active: activeIndex === index }"
        @click="handleClick(index)"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// 导航菜单项数组
const items = ["首页", "业务介绍", "经典案例", "关于我们", "联系我们"];

// 当前激活项索引，默认第一个
const activeIndex = ref(0);

// 点击菜单项时更新激活索引
function handleClick(index) {
  activeIndex.value = index;
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px; // 去掉两边默认边距
  background-color: #fff;
  margin-bottom: 5px;
}

.logo {
  padding: 10px 20px;
}

.logo img {
  height: 40px;
}

.navbar {
  display: flex;
  gap: 50px; // 增大菜单项间距
  margin: 0 auto; // 水平居中
}

.nav-item {
  position: relative;
  padding: 10px 0;
  cursor: pointer;
  font-size: 18px;
  color: #999; // 默认浅灰色字体
  transition: all 0.2s;

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: transparent;
    transition: background-color 0.2s;
  }

  &:hover {
    font-size: 20px;
    color: #000; // 悬停时字体变黑
  }

  &.active {
    font-size: 20px;
    color: #000; // 激活项字体黑色

    &::after {
      background-color: #409eff;
    }
  }
}
</style>
