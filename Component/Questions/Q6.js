import {useState} from 'react'
import { BsPlusSquareFill } from 'react-icons/bs'
import styles from '../../styles/Questions.module.scss'

function Q6() {
  const [toggle, setToggle] = useState(false);

  return (
    <>

      <div className={styles.quebtn}>
        <span> Where can I get the list of companies visited recently? </span>  <BsPlusSquareFill onClick={() => setToggle(!toggle)}  className={styles.plusicon}/> </div>

      {
        toggle && (
          <div className={styles.question}>
            <p> Please check out our placements page to get details of recent placement companies recruiting for fresher jobs. We strongly recommend you to connect with our Facebook page to get regular updates on companies visited and much more information related to embedded industry. </p>
 
          </div>
        )
      }

    </>
  )
}

export default Q6