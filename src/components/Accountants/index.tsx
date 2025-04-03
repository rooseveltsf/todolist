import { Task } from '../../App';
import AccountantsStyles from './Accountants.module.css'

interface AccountantsProps {
    tasks: Array<Task>
}

function Accountants({ tasks }: AccountantsProps) {
    const totalTasks = tasks.length
    const concludedTasks = tasks.filter(task => task.completed).length

    return (
        <div className={AccountantsStyles.taskCount}>
            <div>
                <p>Tarefas criadas</p>
                <span>{totalTasks}</span>
            </div>

            <div>
                <p className={AccountantsStyles.concluded}>Concluídas</p>
                <span>{concludedTasks}</span>
            </div>
        </div>
    )
}

export default Accountants;