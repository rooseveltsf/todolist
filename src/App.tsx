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
  const [tasks, setTasks] = useState<Array<Task>>([])

  function handleTaskCompleted(taskId: string) {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed }
      }
      return task
    })
    setTasks(updatedTasks)
  }

  function handleTaskCreated(taskTitle: string) {
    const newTask = {
      id: crypto.randomUUID(),
      title: taskTitle,
      completed: false
    }
    setTasks([...tasks, newTask])
  }

  function handleTaskDeleted(taskId: string) {
    const updatedTasks = tasks.filter(task => task.id !== taskId)
    setTasks(updatedTasks)
  }


  return (
    <>
      <Header />
      <TaskForm onTaskCreated={handleTaskCreated} />
      <div className={AppStyles.wrapper}>
        <Accountants tasks={tasks} />        
        <TaskList tasks={tasks} onTaskCompleted={handleTaskCompleted} onTaskDeleted={handleTaskDeleted} />
      </div>
    </>
  )
}

export default App
