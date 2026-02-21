import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export interface Task {
  id: number
  title: string
  done: boolean
}

export const useTaskStore = defineStore('taskStore', () => {
  const tasks = ref<Task[]>([])

  async function loadTasks() {
    const saved = localStorage.getItem('tasks')
    if (saved) {
      tasks.value = JSON.parse(saved) as Task[]
    } else {
      try {
        const response = await fetch('/tasks.json')
        if (!response.ok) throw new Error(`HTTP ${response.status}`)
        const data = (await response.json()) as Task[]
        tasks.value = data
      } catch (error) {
        console.error('Ошибка при загрузке tasks.json:', error)
        tasks.value = []
      }
    }
  }

  function toggleTask(id: number) {
    const task = tasks.value.find((t: Task) => t.id === id)
    if (task) {
      task.done = !task.done
    }
  }

  watch(
    tasks,
    (newTasks) => {
      localStorage.setItem('tasks', JSON.stringify(newTasks))
    },
    { deep: true }
  )

  function addTask(title: string) {
    const newTask: Task = {
      id: Date.now(),
      title,
      done: false
    }
    tasks.value.push(newTask)
  }

  function deleteTask(id: number) {
    tasks.value = tasks.value.filter((task: Task) => task.id !== id)
  }

  return { tasks, loadTasks, toggleTask, addTask, deleteTask }
})
