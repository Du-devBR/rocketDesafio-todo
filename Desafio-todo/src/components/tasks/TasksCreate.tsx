
import { ITasks } from '../../pages/Home/Home'
import style from './TasksCreate.module.css'
import {BsCircle, BsTrash} from 'react-icons/bs'


export function TasksCreate(comment : ITasks){


  console.log(comment.comment)
  return(
    <div className={style.cardTask}>
      <button>
        <BsCircle style={{fontSize:"1.25rem", color: "var(---blue)"}} />
      </button>
      <p>{comment.comment}</p>
      <button>
        <BsTrash style={{fontSize:"1.25rem", color: "var(---gray--300)"}} />
      </button>
    </div>
  )
}
