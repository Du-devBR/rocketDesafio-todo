
import { ITasks } from '../../pages/Home/Home'
import style from './TasksCreate.module.css'
import {BsCircle, BsTrash} from 'react-icons/bs'


export function TasksCreate({comment, onDelete, onCompleted} : ITasks){

  return(
    <div className={style.cardTask}>
      <button onClick={onCompleted}>
        <BsCircle style={{fontSize:"1.25rem", color: "var(---blue)"}} />
      </button>
      <p>{comment}</p>
      <button onClick={onDelete}>
        <BsTrash style={{fontSize:"1.25rem", color: "var(---gray--300)"}} />
      </button>
    </div>
  )
}
