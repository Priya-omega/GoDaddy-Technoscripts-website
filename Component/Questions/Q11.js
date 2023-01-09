import {useState} from 'react'
import { BsPlusSquareFill } from 'react-icons/bs'
import styles from '../../styles/Questions.module.scss'

function Q11() {
  const [toggle, setToggle] = useState(false);

  return (

    <>

      <div className={styles.quebtn}> 
      <span>  What are the job trends and scope of Embedded Systems? </span> <BsPlusSquareFill onClick={() => setToggle(!toggle)}  className={styles.plusicon}/> </div>

      {
        toggle && (
          <div className={styles.question}>
            <p> There are many factors (Business, Technology, Customer) factors that driver job trends. As far as Embedded Systems are concerned we see following trends driving the job market. </p>
            <ol className='1'>
              <li> Ubiquitous Computing:ANY time, ANY device and ANY location computing, powered by low-cost and low-power computing across a range of devices </li>
              <li> Internet-Of-Things:The total installed base of Internet of Things (IoT) connected devices worldwide is projected to amount to 30.9 billion units by 2025, a sharp jump from current installation base. </li>
              <li> Demography needs:Growing economy like BRIC countries have embedded systems requirements in upcoming areas like healthcare, education and digital payments </li>
              <li> Industry 4.0:Automation (ex: Robotics) and data exchange in manufacturing segments. Constant push to optimize manufacturing and supply chain </li>
              <li> Government: Huge investments in core segments like Defence segment and constant aspiration for indigenous design and manufacturing </li>
            </ol>
          </div>
        )
      }

    </>
  )
}

export default Q11