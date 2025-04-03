import { Trash } from "@phosphor-icons/react"

import TaskItemStyles from './TaskItem.module.css'
import { Task } from "../../App"

interface TaskItemProps {
  task: Task
  onTaskCompleted: (taskId: string) => void
}

function TaskItem({ task, onTaskCompleted }: TaskItemProps) {
  return (
    <div className={TaskItemStyles.containerItem}>
      <input type="checkbox" checked={task.completed} onChange={() => {
        return onTaskCompleted(task.id)
      }} />
      <p>{task.title}</p>
      <button>
        <Trash size={24} weight="bold" />
      </button>
    </div>
  )
}

export default TaskItem
