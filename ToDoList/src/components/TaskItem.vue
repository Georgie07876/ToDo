<template>
  <div class="task-item">
    <label class="task-item__label">
      <input
        type="checkbox"
        :checked="task.done"
        class="task-item__checkbox"
        @change="$emit('toggle', task.id)"
      />
      <span :class="['task-item__title', { 'task-item__title--done': task.done }]">
        {{ task.title }}
      </span>
    </label>
    <button
      class="task-item__remove-btn"
      @click="$emit('remove', task.id)"
    >
      ×
    </button>
  </div>
</template>

<script setup lang="ts">
import type { Task } from '@/store/useTaskStore'

defineProps<{ task: Task }>()
defineEmits<{
  (e: 'toggle', id: number): void
  (e: 'remove', id: number): void
}>()
</script>

<style lang="scss" scoped>
.task-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
  margin-bottom: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  &__label {
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    flex: 1;
  }

  &__checkbox {
    appearance: none;
    -webkit-appearance: none;
    width: 24px;
    height: 24px;
    border-radius: 6px;
    border: 2px solid rgba(255, 255, 255, 0.5);
    background: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    position: relative;
    transition: all 0.2s ease;

    &:checked {
      background: #4caf50;
      border-color: #4caf50;

      &::after {
        content: '✓';
        position: absolute;
        color: white;
        font-size: 16px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    &:hover {
      border-color: rgba(255, 255, 255, 0.8);
      background: rgba(255, 255, 255, 0.2);
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
    }
  }

  &__title {
    color: white;
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.2s ease;

    &--done {
      text-decoration: line-through;
      opacity: 0.7;
    }
  }

  &__remove-btn {
    background: none;
    border: none;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #ff4d4d;
    color: white;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    opacity: 0.7;
    transform: scale(0.9);
    margin-left: 12px;
    box-shadow: 0 2px 4px rgba(255, 77, 77, 0.3);
    line-height: 1;
    &:hover {
      background-color: #e60000;
      opacity: 1;
      transform: scale(1.1);
      box-shadow: 0 4px 8px rgba(230, 0, 0, 0.4);
    }

    &:active {
      transform: scale(0.95);
    }
  }
}
</style>
