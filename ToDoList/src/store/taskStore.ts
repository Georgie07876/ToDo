import { defineStore } from "pinia";
import { ref } from "vue";

export interface Task {
  id: number;
  title: string;
  done: boolean;
}

export const useTaskStore = defineStore("taskStore", () => {
  const tasks = ref<Task[]>([]);

  async function loadTasks() {
    const saved = localStorage.getItem("tasks");
    if (saved) {
      tasks.value = JSON.parse(saved) as Task[];
    } else {
      try {
        const response = await fetch("/tasks.json");
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = (await response.json()) as Task[];
        tasks.value = data;
        saveTasks();
      } catch (error) {
        console.error("Ошибка при загрузке tasks.json:", error);
        tasks.value = [];
      }
    }
  }

  function toggleTask(id: number) {
    const task = tasks.value.find(t => t.id === id);
    if (task) {
      task.done = !task.done;
      saveTasks();
    }
  }

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks.value));
  }

  return { tasks, loadTasks, toggleTask, saveTasks };
});
