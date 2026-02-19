<template>
  <div class="task-list">
    <AddTaskForm />
    <TaskFilter :current="filter" @update="setFilter" />
    <TransitionGroup 
      v-if="filteredTasks.length > 0" 
      name="list" 
      tag="ul"
    >
      <TaskItem
        v-for="task in filteredTasks"
        :key="task.id"
        :task="task"
        @toggle="store.toggleTask"
        @remove="remove"
      />
    </TransitionGroup>

    <Transition name="fade" mode="out-in">
      <h2 v-if="filteredTasks.length === 0" class="alt-title" key="empty">
        Список задач пуст, добавьте первую!
      </h2>
    </Transition>
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

function remove(id: number) {
  store.deleteTask(id)
}
</script>

<style lang="scss" scoped>
.task-list {
  flex: 1;
  width: 100%;
  max-width: 400px;
}

.task-item {
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

.alt-title {
  font-size: 1.5rem;
  color: #dcdcdc;
  text-align: center;
  margin-top: 20px;
  margin-top: 20%;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.2s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.list-leave-active {
  position: absolute;
  width: 100%;
}
.list-move {
  transition: transform 0.2s ease;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

ul {
  padding: 0;
}
</style>
