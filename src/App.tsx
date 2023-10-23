import { Header } from './components/header'
import { NewTaskForm } from './components/new-task-form'
import { Tasks } from './components/tasks'
import { AppContextProvider } from './contexts/AppContext'

export function App() {
  return (
    <AppContextProvider>
      <div className="min-h-screen w-screen bg-gray-600 flex flex-col items-center">
        <Header />
        <div className="w-full max-w-3xl px-2 pb-2">
          <NewTaskForm />
          <Tasks />
        </div>
      </div>
    </AppContextProvider>
  )
}
