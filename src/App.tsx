import Header from './components/Header'
import TaskForm from './components/TaskForm'
import Accountants from './components/Accountants'
import TaskList from './components/TaskList'

import AppStyles from './App.module.css'
import './global.css'

function App() {

  return (
    <>
      <Header />
      <TaskForm />
      <div className={AppStyles.wrapper}>
        <Accountants />        
        <TaskList />
      </div>
    </>
  )
}

export default App
