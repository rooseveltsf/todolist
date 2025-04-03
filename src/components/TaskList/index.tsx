import EmptyList from '../EmptyList'
import TaskItem from '../TaskItem'

import TaskListStyles from './TaskList.module.css'

function TaskList() {
    return (
        <div className={TaskListStyles.container}>
            {/* <EmptyList /> */}
            <TaskItem />
            <TaskItem />
            <TaskItem />
        </div>
    )
}

export default TaskList
