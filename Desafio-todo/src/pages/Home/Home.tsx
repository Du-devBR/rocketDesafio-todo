import { useState } from 'react'
import fileFull from '../../assets/img/fileFull.png'
import style from './Home.module.css'
import {TasksCreate } from '../../components/tasks/TasksCreate'
import { TasksCompleted } from '../../components/tasks/TasksCompleted'

export interface ITasks {
  comment: string,
  onDelete?: () => void,
  onCompleted?: () => void,
}

export function Home(){

  const [textTasks, setTextTasks] = useState<ITasks>({
    comment: ""
  })
  const [countTask, setCountTask] = useState(0)
  const [countTaskCompleted, setCountTaskCompleted] = useState(0)
  const [errorInput, setErrorInput] = useState(false)
  const [tasks, setTasks] = useState<any>([])
  const [tasksCompleted, setTasksCompleted] = useState<any>([])

  console.log("completas: " + tasksCompleted)
  console.log("criadas: " + tasks)

  function handleRegisterNewTask(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault()
   if(textTasks.comment.length >= 1){
    setTasks([...tasks, textTasks.comment])
    setCountTask(countTask + 1)
    setTextTasks({comment: ""})
    setErrorInput(false)
   }else{
    setErrorInput(true)
   }
  }

  function handleDeleteTaskCreate(taskDelete: string){
    const taskWithoutDelete = tasks.filter((task : string) => {
      return task !== taskDelete
    })

    setTasks(taskWithoutDelete)
    setCountTask(countTask - 1)
  }

  function handleDeleteTaskCompleted(taskDelete: string){
    const tasksWhitoutDeleteCompleted = tasksCompleted.filter((task : string) => {
      return task !== taskDelete
    })
    setTasksCompleted(tasksWhitoutDeleteCompleted)
    setCountTask(countTask - 1)
    setCountTaskCompleted(countTaskCompleted - 1)
  }

  function handleCompletedTasks(taskIndex: number){
    const completedTask = tasks[taskIndex]
    const uptadateTaskByindex = tasks.filter((task : string, index: number) => index !== taskIndex)

    setTasks(uptadateTaskByindex);
    setTasksCompleted([...tasksCompleted, completedTask]);
    setCountTaskCompleted(tasksCompleted.length + 1)
  }

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
            <span>{countTaskCompleted} de {countTask}</span>
          </div>
        </header>
        {
          tasks.length || tasksCompleted.length ? (
            <div className={style.listTaksCreate}>
            <ul>
              {
                tasks.map((task: string, index: number) => (
                  <li>
                    <TasksCreate
                      key={index}
                      comment={task}
                      onDelete={() => handleDeleteTaskCreate(task)}
                      onCompleted={()  => handleCompletedTasks(index)}
                    />
                  </li>
                ))
              }
            </ul>
            <ul>
              {
                tasksCompleted.map((taskCompleted: string, index: number) => (
                  <li>
                    <TasksCompleted
                      key={index}
                      comment={taskCompleted}
                      onDelete={() => handleDeleteTaskCompleted(taskCompleted)}
                    />
                  </li>
                ))
              }
            </ul>
          </div>
          ): (
            <div>
              <img src={fileFull} alt="" />
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          )
        }

      </section>
    </div>
  )
}
