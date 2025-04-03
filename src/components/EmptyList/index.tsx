import { ClipboardText } from "@phosphor-icons/react"
import EmptyListStyles from './EmptyList.module.css'
function EmptyList() {
    return (
        <div className={EmptyListStyles.container}>
            <ClipboardText size={56} weight="thin" />
            <p>Nenhuma tarefa encontrada</p>
            <p>Crie uma tarefa e comece a trabalhar</p>
        </div>
    )
}

export default EmptyList
