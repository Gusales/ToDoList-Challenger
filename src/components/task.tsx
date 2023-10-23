import { Trash2 } from 'lucide-react'
import { Task } from '../contexts/AppContext'
import { useTask } from '../hooks/useTask'
import { ChangeEvent } from 'react'

interface TaskProps {
  task: Task
}

export function TaskItem({ task }: TaskProps) {
  const { updateTaskStatus, deleteTask } = useTask()

  function handleSetTaskStatus(e: ChangeEvent<HTMLInputElement>) {
    updateTaskStatus(task.id, e.target.checked)
  }

  function handleDeleteTask() {
    deleteTask(task.id)
  }

  return (
    <li className="flex items-start justify-between gap-3 p-4 bg-gray-500 shadow-md rounded-lg">
      <input
        type="checkbox"
        className="w-[18px] h-[18px] rounded-full bg-transparent border-2 border-blue cursor-pointer hover:bg-blue/20 text-purple focus:outline-0"
        id="task-status"
        onChange={handleSetTaskStatus}
        checked={task.completed === true}
      />
      <p
        data-completed={task.completed}
        className="text-sm leading-[140%] flex-1 text-gray-100 data-[completed=true]:line-through data-[completed=true]:text-gray-300"
      >
        {task.content}
      </p>
      <button
        name="deletar"
        className="p-2 rounded transition-colors hover:bg-gray-400 leading-none"
        onClick={handleDeleteTask}
      >
        <Trash2 size={16} className="text-gray-300 hover:text-danger" />
      </button>
    </li>
  )
}
