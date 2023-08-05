import style from './Header.module.css'
import logo  from "../../assets/img/logo.png"

export function Header(){
  return(
    <header className={style.header}>
      <img src={logo} alt="logotipo todo com foguete nas cores azul com roxo." />
    </header>
  )
}
