import {useState} from 'react'
import { BsPlusSquareFill } from 'react-icons/bs'
import styles from '../../styles/Questions.module.scss'

function Q14() {
  const [toggle, setToggle] = useState(false);
    
  return (
   
    <>

      <div className={styles.quebtn}> 
      <span>Why non-functional aspects are critical in Embedded domain?  </span><BsPlusSquareFill onClick={() => setToggle(!toggle)}  className={styles.plusicon}/> </div>

      {
        toggle && (
          <div className={styles.question}>
            <p> Embedded systems are typically resource constrained systems, in terms of processing power, memory, peripherals and similar system resources. In your Embedded Systems Application, you need to design it to perform the particular functionality, in spite of having lesser amount of resources. As a designer /programmer you are supposed to keep this mind. It required Embedded Systems Developer to know specific techniques like Optimisation, Algorithm design, Data structures etc. </p>
         
         <p>
         Along with that one need to consider other non- functional characteristics like security,compliance,scalability, customizability also plays very important role as embedded systems are widely deployed in very different kind of environment (example – A factory monitoring device deployed in a dusty / noisy environment). Hence keeping non-functional aspects is key for an Embedded Systems developer.
         </p>
          </div>
        )
      }

    </>
  )
}

export default Q14