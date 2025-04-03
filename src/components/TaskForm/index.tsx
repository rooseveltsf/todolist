
import { PlusCircle } from '@phosphor-icons/react'
import TaskFormStyles from './TaskForm.module.css'

function Input() {

    return (
        <div className={TaskFormStyles.containerInput}>
            <input type="text" placeholder='Adicione uma nova tarefa' />
            <button>
                Criar
                <PlusCircle size={16} />
            </button>
        </div>
    )
}

export default Input