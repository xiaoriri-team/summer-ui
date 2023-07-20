<script setup lang="ts">
import Avatar from "./avatar";
import Badge from "./badge";

let imgUrl = "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg";
</script>

<template>
  <div>
    <Avatar size="small" :src="imgUrl"></Avatar>
    <Avatar size="medium" :src="imgUrl"></Avatar>
    <Avatar size="80" :src="imgUrl"></Avatar>
  </div>
  <div style="margin-top: 20px">
    <div>
      <Badge value="100+">
        <button>asdasd</button>
      </Badge>
      <Badge value="2222+" type="success">
        <button>asdasd</button>
      </Badge>
      <Badge value="111122" type="primary" :max="100">
        <div style="padding: 10px;">21231231</div>
      </Badge>
    </div>

  </div>

</template>

<style scoped>
</style>
