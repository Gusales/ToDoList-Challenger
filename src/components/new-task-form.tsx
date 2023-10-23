import { FormEvent, useState } from 'react'
import { PlusIcon } from './plus-icon'
import { useTask } from '../hooks/useTask'

export function NewTaskForm() {
  const [taskContent, setTaskContent] = useState('')
  const { createNewTask } = useTask()
  async function HandleCreateNewForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (taskContent !== '') {
      createNewTask(taskContent)
      setTaskContent('')
    }
  }

  return (
    <form
      onSubmit={HandleCreateNewForm}
      className="md:-mt-7 -mt-2 flex w-full md:gap-2 gap-1"
    >
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        className="flex-1 bg-gray-500 text-gray-100 border border-gray-700 rounded-lg md:p-4 p-2 placeholder:text-gray-300 focus:border-purple-dark"
        value={taskContent}
        onChange={(e) => setTaskContent(e.target.value)}
        required
      />
      <button
        type="submit"
        className="flex items-center gap-2 md:p-4 px-2 py-3 text-gray-100 bg-blue-dark rounded-lg transition-colors hover:bg-blue focus:bg-blue focus:outline-none focus:border-0 focus:shadow-purple"
      >
        Criar <PlusIcon />
      </button>
    </form>
  )
}
