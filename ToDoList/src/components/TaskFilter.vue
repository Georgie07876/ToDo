<template>
  <div class="task-filter">
    <button
      v-for="opt in options"
      :key="opt"
      :class="{ active: opt === current }"
      @click="$emit('update', opt)"
    >
      {{ labels[opt] }}
    </button>
  </div>
</template>

<script setup lang="ts">
  import type { FilterType } from '@/composables/useTaskFilter'

  defineProps<{ current: FilterType }>()
  defineEmits<(e: 'update', val: FilterType) => void>()

  const options: FilterType[] = ['all', 'active', 'completed']
  const labels = { all: 'Все', active: 'Активные', completed: 'Выполненные' }
</script>

<style lang="scss" scoped>
  .task-filter {
    padding-top: 40px;
    display: flex;
    width: 100%;
    gap: 10px;
    justify-content: space-between;

    button {
      flex: 1;
      padding: 12px 0;
      color: #fff;
      background: #409eff;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      border: none;
      transition: background-color 0.3s ease;
      white-space: nowrap;
      &:hover {
        background-color: #337ecc;
      }

      &.active {
        background-color: #2a6eb3;
        box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
      }
    }
  }
</style>
