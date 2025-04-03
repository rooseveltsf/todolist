import { ClipboardText } from "@phosphor-icons/react"
import EmptyListStyles from './EmptyList.module.css'

function EmptyList() {
    return (
        <>
            <ClipboardText size={56} weight="thin" />
            <p className={EmptyListStyles.paragraph}>Nenhuma tarefa encontrada</p>
            <p className={EmptyListStyles.paragraph}>Crie uma tarefa e comece a trabalhar</p>
        </>
    )
}

export default EmptyList
