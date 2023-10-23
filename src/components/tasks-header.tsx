import { useTask } from '../hooks/useTask'

export function TasksHeader() {
  const { tasks } = useTask()
  const completedTasks = tasks.filter((task) => {
    if (task.completed === true) {
      return task
    }
    return null
  })

  return (
    <header className="flex w-full items-center justify-between md:mt-16 mt-4">
      <div className="flex gap-2">
        <p className="text-blue">Tarefas criadas</p>
        <div className="px-3 bg-gray-400 flex items-center rounded-l-full rounded-r-full">
          <span className="text-gray-200 text-xs block">{tasks.length}</span>
        </div>
      </div>

      <div className="flex gap-2">
        <p className="text-purple">Concluídas</p>
        <div className="px-3 bg-gray-400 flex items-center rounded-l-full rounded-r-full">
          <span className="text-gray-200 text-xs block">
            {completedTasks.length} de {tasks.length}
          </span>
        </div>
      </div>
    </header>
  )
}
