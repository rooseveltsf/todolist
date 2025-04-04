import { useState } from 'react'
import { PlusCircle } from '@phosphor-icons/react'
import TaskFormStyles from './TaskForm.module.css'

interface TaskFormProps {
    onTaskCreated: (taskTitle: string) => void
}

function Input({ onTaskCreated }: TaskFormProps) {

    const [title, setTitle] = useState('')

    return (
        <div className={TaskFormStyles.containerInput}>
            <input
                type="text"
                id='task-input'
                placeholder='Adicione uma nova tarefa'
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <button onClick={() => {
                onTaskCreated(title)
                setTitle('')
                window.document.getElementById('task-input')?.focus()
            }}>
                Criar
                <PlusCircle size={16} />
            </button>
        </div>
    )
}

export default Input