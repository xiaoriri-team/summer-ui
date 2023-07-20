<script setup lang="ts">
import {BadgeProps,useMaxNumberShow} from "./badge.ts";
import {defineComponent} from "vue";

defineComponent({
  name: "Badge"
})

const props = withDefaults(defineProps<BadgeProps>(), {
  max: 99,
  hidden: false,
  type: 'default'
})

</script>

<template>
  <transition>
    <div class="content">
      <slot/>
      <sup class="dot" :class="[props.type]" v-show="!props.hidden">
        {{ useMaxNumberShow(props.value,props.max) }}
      </sup>
    </div>
  </transition>
</template>

<style scoped>
.content .dot {
  color: #ffffff;
  position: absolute;
  padding: 0 6px;
  text-align: center;
  left: 100%;
  bottom: calc(100% - 9px);
  display: flex;
  align-items: center;
  border-radius: 9px;
  font-variant-numeric: tabular-nums;
  z-index: 1;
  transform: translateX(-50%);
}

.content {
  position: relative;
  display: inline-flex;
}

sup {
  vertical-align: super;
  font-size: smaller;
}

.default {
  background: #f56c6c;
}

.success {
  background: #67C23A;
}

.primary {
  background: #409EFF;
}

.warning {
  background: #E6A23C;
}

.danger {
  background:#F56C6C;
}

.info {
  background: #909399;
}

</style>