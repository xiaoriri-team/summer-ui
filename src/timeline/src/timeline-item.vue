<script setup lang="ts">

import {TimelineItemProps} from "./timeline.ts";

const props = withDefaults(defineProps<TimelineItemProps>(), {})

</script>

<template>
  <div class="timeline">
    <div class="left">
      <div class="dot" :class="props.type" :style="{borderColor:props.color}"></div>
      <div class="line"></div>
    </div>
    <div class="content">
      <div class="title">
        <slot name="title">
          {{ props.title }}
        </slot>
      </div>
      <div class="text">
        <slot name="content">
          {{ props.content }}
        </slot>
      </div>
      <div class="time">
        <slot name="time">
          {{ props.time }}
        </slot>
      </div>
    </div>
  </div>
</template>

<style scoped>

.timeline {
  display: flex;
}

.left {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.dot {
  height: 14px;
  width: 14px;
  border: 2px solid rgb(118, 124, 130);
  border-radius: 50%;
}

.line {
  border: none;
  background: rgb(219, 219, 223);
  width: 2px;
  flex: 1;
}

.content {
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
}

.title {
  color: #000;
  font-size: 14px;
  font-weight: 500;
  margin: 0 0 6px 0
}

.text {
  margin: 0;
}

.time {
  font-size: 12px;
  color: rgb(118, 124, 130);
  margin-bottom: 6px;
}


.success {
  border-color: #67C23A;
}

.primary {
  border-color: #409EFF;
}

.warning {
  border-color: #E6A23C;
}

.danger {
  border-color: #F56C6C;
}

.info {
  border-color: #909399;
}

</style>