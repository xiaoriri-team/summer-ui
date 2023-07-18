<script setup lang="ts">
import Avatar from "./avatar";
let imgUrl = "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg";
</script>

<template>
  <Avatar size="small" :src="imgUrl"></Avatar>
  <Avatar size="medium" :src="imgUrl"></Avatar>
  <Avatar size="80" :src="imgUrl"></Avatar>
</template>

<style scoped>
</style>
