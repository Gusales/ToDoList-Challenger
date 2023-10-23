import { useTask } from '../hooks/useTask'
import { TaskItem } from './task'

export function TasksList() {
  const { tasks } = useTask()
  return (
    <div className="w-full h-full">
      <ul className="mt-6 grid gap-3">
        {tasks.map((task) => {
          return <TaskItem key={task.id} task={task} />
        })}
      </ul>
    </div>
  )
}
