import { TasksHeader } from './tasks-header'
import { TasksEmpty } from './tasks-empty'
import { TasksList } from './tasks-list'
import { useTask } from '../hooks/useTask'

export function Tasks() {
  const { tasks } = useTask()

  return (
    <section>
      <TasksHeader />
      <div className="mt-6">
        {tasks.length === 0 ? <TasksEmpty /> : <TasksList />}
      </div>
    </section>
  )
}
