import {useState} from 'react'
import { BsPlusSquareFill } from 'react-icons/bs'
import styles from '../../styles/Questions.module.scss'

function Q17() {
    const [toggle, setToggle] = useState(false);
  return (
    <>

    <div className={styles.quebtn}>
      <span> What do you mean by foundations in embedded systems? </span>  <BsPlusSquareFill onClick={() => setToggle(!toggle)}  className={styles.plusicon}/> </div>

    {
      toggle && (
        <div className={styles.question}>
          <p> As the saying goes ‘technologies go through rapid changes whereas foundation won’t’ which is the primary reason why you should master foundations. For example many new programming languages are techniques will come into the foray of IoT as it matures, foundational aspects of all programming languages (example – Algorithms) won’t change. Hence in our IoT course we give lot of importance on foundations such as </p>
          <ul>
            <li> Algorithms </li>

            <li> Optimisation </li>

            <li> Linux platform </li>

            <li> Hardware interfacing </li>

            <li>  Protocols </li>

            <li>  OS and multitasking </li>

            <p>
            Once you learn these foundations, you will be able to apply these skills in any new technology that you come across and learn them at ease. In our Embedded Systems course we maintain a very good balance between building foundations and learning advanced skills to that participants are positioned as lifelong learners in the careers.
            </p>
          </ul>
        </div>
      )
    }

  </>
  )
}

export default Q17