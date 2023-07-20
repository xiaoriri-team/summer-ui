<script setup lang="ts">
import Avatar from "./avatar";
import Badge from "./badge";
import Timeline from "./timeline/src/timeline.vue";
import TimelineItem from "./timeline/src/timeline-item.vue";

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
    <div style="margin-top: 30px;">
      <Timeline>
        <TimelineItem color="#000" title="成功" content="哪里成功" time="2018-04-03 20:46">
          <template #title>
            <div style="color: #67C23A">
              123123
            </div>
          </template>
        </TimelineItem>
        <TimelineItem type="danger" title="错误？？？" time="1231213213"></TimelineItem>
        <TimelineItem  type="primary" title="错误？？？" time="1231213213"></TimelineItem>
      </Timeline>
    </div>
  </div>

</template>

<style scoped>
</style>
