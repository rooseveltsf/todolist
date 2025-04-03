import { Trash } from "@phosphor-icons/react"

import TaskItemStyles from './TaskItem.module.css'

function TaskItem() {
  return (
    <div className={TaskItemStyles.containerItem}>
      <input type="checkbox" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
      <button>
        <Trash size={24} weight="bold" />
      </button>
    </div>
  )
}

export default TaskItem
