import { Task } from '../../App'
import EmptyList from '../EmptyList'
import TaskItem from '../TaskItem'

import TaskListStyles from './TaskList.module.css'

interface TaskListProps {
    tasks: Array<Task>
    onTaskCompleted: (taskId: string) => void
}

function TaskList({ tasks, onTaskCompleted }: TaskListProps) {
    return (
        <div className={TaskListStyles.container}>
            {tasks.length === 0 ? (
                <EmptyList />
            ) : (
                tasks.map(task => (
                    <TaskItem key={task.id} task={task} onTaskCompleted={onTaskCompleted} />
                ))
            )}
        </div>
    )
}

export default TaskList
