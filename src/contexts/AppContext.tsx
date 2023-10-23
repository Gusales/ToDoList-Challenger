import { ReactNode, createContext, useState } from 'react'
import { v4 as randomUUID } from 'uuid'

export interface Task {
  id: string
  content: string
  completed: boolean
}

interface AppContextProps {
  tasks: Task[]
  createNewTask: (content: string) => void
  updateTaskStatus: (id: string, value: boolean) => void
  deleteTask: (id: string) => void
}

export const AppContext = createContext({} as AppContextProps)

export function AppContextProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[] | []>(() => {
    const storagedTasks = localStorage.getItem('@todo:tasks-state-1.0.0')
    if (storagedTasks) {
      return JSON.parse(storagedTasks)
    }
    return []
  })

  function saveToLocalStorage(task: Task[]) {
    const jsonTask = JSON.stringify(task)
    localStorage.setItem('@todo:tasks-state-1.0.0', jsonTask)
  }

  function createNewTask(content: string) {
    const id = randomUUID()
    const newTask = {
      completed: false,
      content,
      id,
    }

    setTasks([...tasks, newTask])
    saveToLocalStorage([...tasks, newTask])
  }

  function updateTaskStatus(id: string, value: boolean) {
    const updateTaskStatus = tasks.map((task) => {
      if (task.id === id) {
        task.completed = value
        return task
      }

      return task
    })

    saveToLocalStorage(updateTaskStatus)
    setTasks(updateTaskStatus)
  }

  function deleteTask(id: string) {
    const deleteTask = tasks.filter((item) => {
      if (item.id !== id) {
        return item
      }

      return null
    })

    saveToLocalStorage(deleteTask)
    setTasks(deleteTask)
  }

  return (
    <AppContext.Provider
      value={{ tasks, createNewTask, updateTaskStatus, deleteTask }}
    >
      {children}
    </AppContext.Provider>
  )
}
