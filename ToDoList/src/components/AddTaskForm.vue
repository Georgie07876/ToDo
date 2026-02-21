<template>
  <div class="task-form">
    <form class="task-form__form" @submit.prevent="addTask">
      <input
        v-model="taskTitle"
        class="task-form__input"
        type="text"
        placeholder="Добавить задачу..."
        required
      />
      <button type="submit" class="task-form__button">Добавить</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTaskStore } from '@/store/useTaskStore'

const taskStore = useTaskStore()
const taskTitle = ref('')

function addTask() {
  if (taskTitle.value.trim()) {
    taskStore.addTask(taskTitle.value.trim())
    taskTitle.value = ''
  }
}
</script>

<style lang="scss" scoped>
.task-form {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;

  &__form {
    display: flex;
    gap: 10px;
    width: 100%;
  }

  &__input {
    flex: 1 1 auto;
    min-width: 0;
    padding: 10px 15px;
    font-size: 1rem;
    border: 2px solid #ccc;
    border-radius: 8px;
    transition:
      border-color 0.3s,
      box-shadow 0.3s;
    outline: none;
    box-sizing: border-box;

    &:focus {
      border-color: #409eff;
      box-shadow: 0 0 0 2px rgba(64, 158, 255, 0.2);
    }

    &::placeholder {
      color: #aaa;
    }
  }

  &__button {
    flex: 0 0 auto;
    padding: 10px 20px;
    background-color: #409eff;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    white-space: nowrap;
    transition: background-color 0.3s ease;
    box-sizing: border-box;

    &:hover {
      background-color: #337ecc;
    }

    &:active {
      background-color: #2a6eb3;
    }
  }
}
</style>
