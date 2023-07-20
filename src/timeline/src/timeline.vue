<script setup lang="ts">

import {TimelineProps} from "./timeline.ts";

const props = withDefaults(defineProps<TimelineProps>(), {})

</script>

<template>
  <div class="timeline">
    <slot></slot>
  </div>
</template>

<style scoped>

</style>