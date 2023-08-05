import style from './Home.module.css'

export function Home(){
  return(
    <div className={style.containerHome}>
      <form className={style.form}>
        <input
          className={style.inputTask}
          type="text"
          placeholder='Adicione uma nova tarefa'
        />
        <button
          type="submit"
          className={style.btnSubmit}
          >
            Criar
        </button>
      </form>
    </div>
  )
}
