import { useState } from 'react'

import Header from './components/Header'
import TaskForm from './components/TaskForm'
import Accountants from './components/Accountants'
import TaskList from './components/TaskList'
import AppStyles from './App.module.css'

import './global.css'

export interface Task {
  id: string
  title: string
  completed: boolean
}

function App() {
  const [tasks, setTasks] = useState<Array<Task>>([
    {
      id: '1',
      title: 'Estudar React',
      completed: false
    },
    {
      id: '2',
      title: 'Estudar Node.js',
      completed: true
    },
    {
      id: '3',
      title: 'Estudar TypeScript',
      completed: false
    }
  ])

  function handleTaskCompleted(taskId: string) {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed }
      }
      return task
    })
    setTasks(updatedTasks)
  }

  return (
    <>
      <Header />
      <TaskForm />
      <div className={AppStyles.wrapper}>
        <Accountants tasks={tasks} />        
        <TaskList tasks={tasks} onTaskCompleted={handleTaskCompleted} />
      </div>
    </>
  )
}

export default App
