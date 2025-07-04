<template>
  <div class="task-list">
    <AddTaskForm @task-added="onAdd" />
    <TaskFilter :current="filter" @update="setFilter" />
    <TaskItem
      v-for="task in filteredTasks"
      :key="task.id"
      :task="task"
      @toggle="toggle"
      @remove="remove"
    />
  </div>
</template>

<script setup lang="ts">
import AddTaskForm from './AddTaskForm.vue'
import TaskFilter from './TaskFilter.vue'
import TaskItem from './TaskItem.vue'
import { useTaskStore } from '../store/useTaskStore'
import { useTaskFilter } from '../composables/useTaskFilter'

const store = useTaskStore()
const { filter, filteredTasks, setFilter } = useTaskFilter()

store.loadTasks()

function onAdd(title: string) {
  store.addTask(title)
}
function toggle(id: number) {
  store.toggleTask(id)
}
function remove(id: number) {
  store.deleteTask(id)
}
</script>

<style lang="scss" scoped>
.task-list {
  width: 100%;
  max-width: 400px;
}

.task-item {
  padding: 40px;
  margin-bottom: 10px;
  label {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  span {
    margin-left: 8px;
  }
  .done {
    text-decoration: line-through;
    color: #999;
  }
}
</style>
