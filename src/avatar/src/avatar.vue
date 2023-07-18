<script setup lang="ts">
import { computed, defineComponent, reactive, ref, watch } from "vue";
import { AvatarProps, Shape } from "./avatar";

const props = withDefaults(defineProps<AvatarProps>(), {
  size: "medium",
  shape: Shape.Circle,
  fit: "cover",
});

const emit = defineEmits({
  error: (evt: Event) => evt instanceof Event,
});

defineComponent({
  name: "Avatar",
});

const isCircle = computed(() => {
  return props.shape === "circle";
});

const mergedSize = computed<Number>(() => {
  let _width = {
    small: 28,
    medium: 34,
    large: 40,
  };
  if (isNaN(Number(props.size))) {
    return _width[props.size as keyof typeof _width];
  }
  return props.size as number;
});

let style = reactive({
  width: mergedSize.value + "px",
  height: mergedSize.value + "px",
});

let hasLoadErrorRef = ref(false);

const handleError = (e: Event) => {
  hasLoadErrorRef.value = true;
  emit("error", e);
};

// need reset hasLoadError to false if src changed
watch(
  () => props.src,
  () => (hasLoadErrorRef.value = false)
);
</script>

<template>
  <span
    class="s-avatar"
    :style="style"
    :class="[isCircle ? 's-avatar-circle' : 's-avatar-square']"
  >
    <slot>
      <img
        v-if="!hasLoadErrorRef"
        @error="handleError"
        :style="{ objectFit: props.fit }"
        :src="props.src"
        :alt="props.alt"
      />
    </slot>
  </span>
</template>

<style scoped>
.s-avatar {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
}

.s-avatar img {
  display: block;
  height: 100%;
  border-style: none;
}

.s-avatar-circle {
  border-radius: 50%;
}

.s-avatar-square {
  border-radius: 4px;
}
</style>