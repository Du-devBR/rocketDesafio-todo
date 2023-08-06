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
      <section className={style.containerTasks}>
        <header className={style.headerTasks}>
          <div className={style.createTasks}>
            <strong>Tarefas criadas</strong>
            <span>0</span>
          </div>
          <div className={style.completedTasks}>
            <strong>Concluidas</strong>
            <span>0</span>
          </div>
        </header>
      </section>
    </div>
  )
}
