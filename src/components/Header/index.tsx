import Styles from './Header.module.css'
import logo from '../../assets/logo.png'

function Header() {
    return (
        <header className={Styles.header}>
            <img width={126} height={48} src={logo} alt="Logo" />
        </header>
    )
}

export default Header
