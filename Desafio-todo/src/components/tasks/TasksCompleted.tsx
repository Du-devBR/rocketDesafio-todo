import { BsCheckCircleFill, BsTrash } from 'react-icons/bs'
import style from './TasksCompleted.module.css'
import { ITasks } from '../../pages/Home/Home'


export function TasksCompleted({comment, onDelete} : ITasks){


  return(
    <div className={style.cardTask}>
      <button >
        <BsCheckCircleFill
          style={{fontSize:"1.25rem", color: "var(---purple-dark)", backgroundColor: "white", borderRadius: '50%'}}
        />
      </button>
      <p>{comment}</p>
      <button onClick={onDelete}>
        <BsTrash style={{fontSize:"1.25rem", color: "var(---gray--300)"}} />
      </button>
    </div>
  )
}
