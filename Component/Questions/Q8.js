import {useState} from 'react'
import { BsPlusSquareFill } from 'react-icons/bs'
import styles from '../../styles/Questions.module.scss'

function Q8() {

    const [toggle, setToggle] = useState(false);

  return (
    <>

    <div className={styles.quebtn}>
      <span> I am a fresher. How do you help me with placements? </span>  <BsPlusSquareFill onClick={() => setToggle(!toggle)}  className={styles.plusicon}/> </div>

    {
      toggle && (
        <div className={styles.question}>
          <p> TechnoScript's trainings and placement division has direct contacts with more than 1200+ companies. These companies are hiring for Embedded Systems jobs for freshers in Bangalore, Chennai, Hyderabad, Pune. In our placement portfolio we have organizations of various types (MNCs, Mid-size organizations, Start-ups). With more than 18 year of existence companies are aware of Emertxe course syllabus, training methodology and industry expertise of our mentors. By hiring our trained candidates companies benefit in terms of faster deployment, lower cost and better hiring conversion. Hence Emertxe is one of the most sought after IT finishing schools for core companies. Every month minimum 80-90 placement companies participate in hiring our students. Emertxe students get Unlimited placement opportunities up to two year after course completion. </p>

          <p> On the technical delivery side Emertxe training programs are rigorous and practical in nature. Students go through immersive hands-on learning experience. This means every session, every day is a learning day. Students are continuously working and up-skilling their practical skills in Embedded Systems design and programming. As a proof of output, students will be producing average of 40 assignments / module and 7 to 8 Embedded projects in their resume by the end of the course. </p>

          <p>  In India more than 15 Lakhs engineering graduates coming out of colleges every year. However employability ratio is getting lower year-on-year. For example, few years back it was lingering around 15%, which has now come down to single digit. Check out some of the research results from industry bodies: NASSCOM – Employability reports. Emertxe’s up-skilling process resolves this industry-academia gap by making freshers employable in embedded systems jobs for freshers in Bangalore or any other major city of India. </p>

          <p>
          Our skilled students face placement companies and clear the selection process with ease. This has created a win-win proposition for students and companies. In summary Emertxe has helped thousands of freshers by increasing their skill levels and making them employable. We do this day in and day out, the next success story could be yours. Please contact our Emertxe – Admission Team if you need any more information.
          </p>
    
        </div>
      )
    }

  </>
  )
}

export default Q8