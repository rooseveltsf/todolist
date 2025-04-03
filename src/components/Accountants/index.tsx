import AccountantsStyles from './Accountants.module.css'

function Accountants() {
    return (
        <div className={AccountantsStyles.taskCount}>
            <div>
                <p>Tarefas criadas</p>
                <span>0</span>
            </div>

            <div>
                <p className={AccountantsStyles.concluded}>Concluídas</p>
                <span>0</span>
            </div>
        </div>
    )
}

export default Accountants;