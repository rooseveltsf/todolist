import EmptyList from '../EmptyList'

import TaskListStyles from './TaskList.module.css'

function TaskList() {
    return (
        <div className={TaskListStyles.container}>
            <EmptyList />
        </div>
    )
}

export default TaskList
