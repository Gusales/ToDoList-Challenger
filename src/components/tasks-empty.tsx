import { Clipboard } from './clipboard'

export function TasksEmpty() {
  return (
    <div className="w-full h-full md:py-16 py-10 flex flex-col items-center justify-center gap-2 border-t border-gray-400">
      <Clipboard />
      <div className="flex flex-col items-center">
        <h2 className="text-gray-300 leading-relaxed font-bold">
          Você ainda não tem tarefas cadastradas
        </h2>
        <h3 className="text-gray-300 leading-relaxed">
          Crie tarefas e organize seus itens a fazer
        </h3>
      </div>
    </div>
  )
}
