<template>
  <div class="task-form">
    <form @submit.prevent="addTask" class="task-form__form">
      <input 
        class="task-form__input"
        type="text" 
        v-model="taskTitle" 
        placeholder="Добавить задачу..." 
        required 
        @keyup.enter="addTask"
      />
      <button type="submit" class="task-form__button">Добавить</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTaskStore } from '../store/useTaskStore';

const taskStore = useTaskStore();
const taskTitle = ref('');

function addTask() {
  if (taskTitle.value.trim()) {
    taskStore.addTask(taskTitle.value.trim());
    taskTitle.value = '';
  }
}
</script>

<style lang="scss" scoped>
.task-form {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 10px;

  &__form {
    display: flex;
    gap: 10px;
  }

  &__input {
    flex: 1;
    padding: 10px 15px;
    font-size: 1rem;
    border: 2px solid #ccc;
    border-radius: 8px;
    transition: border-color 0.3s, box-shadow 0.3s;
    outline: none;

    &:focus {
      border-color: #409eff;
      box-shadow: 0 0 0 2px rgba(64, 158, 255, 0.2);
    }

    &::placeholder {
      color: #aaa;
    }
  }

  &__button {
    padding: 10px 16px;
    background-color: #409eff;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #337ecc;
    }

    &:active {
      background-color: #2a6eb3;
    }
  }
}
</style>
