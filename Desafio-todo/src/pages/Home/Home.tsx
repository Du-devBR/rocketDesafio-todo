import { useState } from 'react'
import style from './Home.module.css'
import {TasksCreate } from '../../components/tasks/TasksCreate'

export interface ITasks {
  comment: string
}

export function Home(){

  const [textTasks, setTextTasks] = useState<ITasks>({
    comment: ""
  })
  const [countTask, setCountTask] = useState(0)
  const [errorInput, setErrorInput] = useState(false)
  const [tasks, setTasks] = useState<any>([])

  function handleRegisterNewTask(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault()
   if(textTasks.comment.length >= 1){
    setTasks([...tasks, textTasks.comment])
    setCountTask(tasks.length + 1)
    setTextTasks({comment: ""})
    setErrorInput(false)
   }else{
    setErrorInput(true)
   }
  }

  // console.log(tasks)
  return(
    <div className={style.containerHome}>
      <form className={style.form} onSubmit={handleRegisterNewTask}>
        <input
          className={errorInput ? style.inputTaskError : style.inputTask}
          type="text"
          value={textTasks.comment}
          onChange={(event) => setTextTasks({...textTasks, comment: event.target.value})}
          onKeyDown={() => setErrorInput(false)}
          placeholder={errorInput ? "Precisa preenchar a tarefa para enviar" : 'Adicione uma nova tarefa'}
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
            <span>{countTask}</span>
          </div>
          <div className={style.completedTasks}>
            <strong>Concluidas</strong>
            <span>0</span>
          </div>
        </header>
        <div className={style.listTaksCreate}>
          <ul>
            {
              tasks.map((task: string, index: number) => (
                <li>
                  <TasksCreate
                    key={index}
                    comment={task}
                  />
                </li>
              ))
            }
          </ul>
        </div>
      </section>
    </div>
  )
}
