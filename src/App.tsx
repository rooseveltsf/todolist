import './global.css'

import Header from './components/Header'
import TaskForm from './components/TaskForm'
import EmptyList from './components/EmptyList'
import Accountants from './components/Accountants'

import AppStyles from './App.module.css'

function App() {

  return (
    <>
      <Header />
      <TaskForm />
      <div className={AppStyles.wrapper}>
        <Accountants />

        <EmptyList />
      </div>
    </>
  )
}

export default App
