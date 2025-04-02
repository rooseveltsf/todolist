import logo from '../../assets/logo.png'
import Styles from './Header.module.css'
function Header() {

  return (
    <div>

      <header className={Styles.header}>
        <img width={126} height={48} src={logo} alt="Logo" />
      </header>
    </div>
  )
}

export default Header
