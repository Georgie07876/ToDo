import { defineStore } from "pinia";
import { ref } from "vue";

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export const useTaskStore = defineStore("taskStore", () => {
  const tasks = ref<Task[]>([]);

  const loadTasks = async () => {
    const saved = localStorage.getItem("tasks");
    
    if (saved) {
      tasks.value = JSON.parse(saved) as Task[];
    } else {
      try {
        const response = await fetch("/tasks.json"); // Путь относительно корня
        const data = await response.json() as Task[];
        tasks.value = data;
        saveTasks();
      } catch (e) {
        console.error("Ошибка загрузки tasks.json:", e);
        tasks.value = [];
      }
    }
  };

  /**
 @param id
   */
  const toggleTask = (id: number) => {
    const task = tasks.value.find(t => t.id === id);
    if (task) {
      task.done = !task.done;
      saveTasks();
    }
  };

  const saveTasks = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks.value));
  };

  return {
    tasks,
    loadTasks,
    toggleTask,
    saveTasks
  };
});