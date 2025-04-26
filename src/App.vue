<template>
  <el-container style="min-height: 100vh">
    <el-header>
      <Header></Header>
    </el-header>
    <el-main><router-view /></el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script setup>
import Header from "./components/Header.vue";
</script>

<style></style>
