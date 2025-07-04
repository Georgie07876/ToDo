<template>
  <div class="task-item">
    <label>
      <input type="checkbox" :checked="task.done" @change="$emit('toggle', task.id)" />
      <span :class="{ done: task.done }">{{ task.title }}</span>
    </label>
    <button @click="$emit('remove', task.id)">Удалить</button>
  </div>
</template>

<script setup lang="ts">
import type { Task } from '../store/useTaskStore'

const props = defineProps<{ task: Task }>()
const emit = defineEmits<{
  (e: 'toggle', id: number): void
  (e: 'remove', id: number): void
}>()
</script>

<style lang="scss" scoped>

.task-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #ccc;

    label {
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    input[type="checkbox"] {
        margin-right: 10px;
    }

    span.done {
        text-decoration: line-through;
        color: #999;
    }

    button {
        background-color: #ff4d4d;
        color: white;
        border: none;
        padding: 5px 10px;
        cursor: pointer;

        &:hover {
            background-color: #e60000;
        }
    }
}

</style>