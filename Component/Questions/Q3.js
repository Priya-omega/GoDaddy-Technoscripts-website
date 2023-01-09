import {useState} from 'react'
import { BsPlusSquareFill } from 'react-icons/bs'
import styles from '../../styles/Questions.module.scss'

function Q3() {
  const [toggle, setToggle] = useState(false);

  return (
    <>

      <div className={styles.quebtn}>
         <span> What is the guarantee of placements for embedded systems?  </span> <BsPlusSquareFill onClick={() => setToggle(!toggle)}  className={styles.plusicon}/> </div>

      {
        toggle && (
          <div className={styles.question}>
            <p> Emertxe is one of the best Embedded Institute with Placements. Students are provided with ample number of placement opportunities. During the time of admission we provide a written commitment to every student. It will clearly mention regarding Placement opportunities in Embedded Systems for Freshers in core Embedded Systems companies. This is more than enough to convert it into a job. </p>

            <p>
            Every student goes through rigorous training in all the Embedded systems course modules with continuous assessment. As long as student regularly follow the classes, assignments and mini-projects, they will not face any issue in getting a job. Our placement department will do rest of the job. As per our statistics, every student who has completed their course assignments and their assigned projects in Embedded Systems gets placed by their 3rd to 4th interview.
            </p>

            <p>
            Even though every eligible student is entitled to get unlimited placement opportunities up to two year after course completion in core embedded companies. To get a view about what our past students has to say, visit our Emertxe – YouTube channel.
            </p>
          
          </div>
        )
      }

    </>
  )
}

export default Q3