import {useState} from 'react'
import { BsPlusSquareFill } from 'react-icons/bs'
import styles from '../../styles/Questions.module.scss'

function Q5() {
  const [toggle, setToggle] = useState(false);

  return (
    <>

    <div className={styles.quebtn}> 
    <span>  What is the salary levels of placed students? </span> <BsPlusSquareFill onClick={() => setToggle(!toggle)}  className={styles.plusicon}/> </div>

    {
      toggle && (
        <div className={styles.question}>
          <p> Salary levels for the students who are placed depends purely depends on companies hiring for fresher jobs. As per our statistics, Emertxe has placed students in the range between INR 3.0L to INR 27.3 Lakhs per annum CTC.</p>
      
      <p>
      As a mentoring team, we strongly advise our students not to decide on a company purely by looking into salary levels rather look into the nature of work, exposure you will be getting and type of projects that they are working on. This will ensure you always stay on a continuous learning path and become a critical contributing team member of the organization. With skill sets your salary levels grow in a very healthy phase, sometimes get more paid than even market standards.
      </p>
        </div>
      )
    }

  </>
  )
}

export default Q5