<template>
  <div class="task-list">
    <div
      v-for="task in taskStore.tasks"
      :key="task.id"
      class="task-item"
    >
      <label>
        <input
          type="checkbox"
          :checked="task.done"
          @change="handleToggle(task.id)"
        />
        <span :class="{ done: task.done }">{{ task.title }}</span>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTaskStore } from "../store/taskStore";
import { onMounted } from "vue";

const taskStore = useTaskStore();

onMounted(() => {
  taskStore.loadTasks();
});

function handleToggle(id: number) {
  taskStore.toggleTask(id);
}
</script>

<style lang="scss" scoped>
.task-list {
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
</style>
