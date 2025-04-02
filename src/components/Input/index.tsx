
import { PlusCircle } from '@phosphor-icons/react'
import InputStyles from './Input.module.css'

function Input() {

    return (
        <div className={InputStyles.containerInput}>
            <input type="text" placeholder='Adicione uma nova tarefa' />
            <button>
                Criar
                <PlusCircle size={16} />
            </button>
        </div>
    )
}

export default Input