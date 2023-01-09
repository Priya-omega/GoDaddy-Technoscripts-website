import {useState} from 'react'
import { BsPlusSquareFill } from 'react-icons/bs'
import styles from '../../styles/Questions.module.scss'

function Q16() {
    const [toggle, setToggle] = useState(false);
  return (
    <>

    <div className={styles.quebtn}>  
   <span> I am interested in doing Masters. Will this course help me? </span>  <BsPlusSquareFill onClick={() => setToggle(!toggle)}  className={styles.plusicon}/> </div>

    {
      toggle && (
        <div className={styles.question}>
          <p> TechnoScripts advanced embedded systems course is an intense hands-on practical driven immersive learning course. It primary focus on making entry level engineers employable by making them land fresher placements in Embedded Systems. Having said, some of our students take-up this course as a bridge-course before they start their Masters Degree, especially with foreign universities. Such students are identified separately and both our mentors and placement cell work with them in the following areas: </p>
          <ol className='1'>
            <li> Ex-student connect who are already studying in foreign universities for admission related help </li>

            <li> Customising course module duration to meet the timeline of University admission window (Fall / Spring in USA) </li>

            <li> Providing with Letter-Of-Recommendation(LOR) and reviewing Statement-Of-Purpose (SOP) </li>

            <li> Providing internships for a specified duration of time by exposing them with real time projects </li>

            <p>
            All the required recommendation letters and internship letters are provided as per the international university standards so that our students maximize the chance of admission and TA / RA. With this approach, good number of our students get admissions into top notch universities based out of USA / Europe / Singapore.
            </p>
          </ol>
        </div>
      )
    }

  </>
  )
}

export default Q16