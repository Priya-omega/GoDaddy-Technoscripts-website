import React from 'react'
import styles from '../styles/Courses.module.scss'
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa'
import { BsPeopleFill } from 'react-icons/bs'
import { AiTwotoneCalendar } from 'react-icons/ai'
import Link from 'next/link'


function Courses() {
  return (
    <>
     <div className={styles.Coursecontainer}>
    <div className={styles.Coursecard}>
        <div className={styles.figure}>
        
            <img src="img/embed2.webp" alt="EmbeddedSystem" className={styles.Courseimg} />
            <div className={styles.imgoverlay}></div>
        </div>

        <h3>Embedded System</h3>
        <div className={styles.rating}>
            <div> <FaStar className={styles.Courseicon} /> <FaStar className={styles.Courseicon} /> <FaStar className={styles.Courseicon} /> <FaStar className={styles.Courseicon} /> <FaStar className={styles.Courseicon} /> 5 Star (55 <BsPeopleFill /> )
            </div>
        </div>

        <div className={styles.text}>
            <p> <AiTwotoneCalendar className={styles.durationicon} /> Duration : 3 Month </p>

            <p>The course includes implementation of minimum two Live projects to gain hands on practice plus lots </p>

            <div className={styles.read}>
                <button className={styles.readbtn}>
                    <Link href="/EmbeddedC-training-pune" className={styles.link}><a> Read More...</a></Link>
                </button>
            </div>
        </div>
    </div>

    <div className={styles.Coursecard}>
        <div className={styles.figure}>
            <img src="img/automotive3.webp" alt="Automotive" className={styles.Courseimg} />
            <div className={styles.imgoverlay}></div>
        </div>
        <h3>Automotive Embedded</h3>
        <div className={styles.rating}>
            <div> <FaStar className={styles.Courseicon} /> <FaStar className={styles.Courseicon} /> <FaStar className={styles.Courseicon} /> <FaStar className={styles.Courseicon} /> <FaRegStar className={styles.Courseicon} /> 4 Star (155 <BsPeopleFill /> )
            </div>
        </div>

        <div className={styles.text}>
            <p> <AiTwotoneCalendar className={styles.durationicon} /> Duration : 3 Month</p>
            <p>It is course designed for pursuing students & those who wants to take training on specific</p>

            <div className={styles.read}>
                <button className={styles.readbtn}>
                    <Link href="/AutomotiveEmbedded-course-pune" className={styles.link}><a>Read More...</a></Link>
                </button>
            </div>
        </div>



    </div>

    <div className={styles.Coursecard}>
        <div className={styles.figure} >
            <img src="img/iot3.webp" alt="IOT" className={styles.Courseimg} />
            <div className={styles.imgoverlay}></div>
        </div>
        <h3>IOT Internet of Things</h3>
        <div className={styles.rating}>
            <div> <FaStar className={styles.Courseicon} /> <FaStar className={styles.Courseicon} /> <FaStar className={styles.Courseicon} /> <FaStar className={styles.Courseicon} /> <FaStarHalfAlt className={styles.Courseicon} /> 4.5 Star (250 <BsPeopleFill /> )
            </div>
        </div>

        <div className={styles.text}>
            <p> <AiTwotoneCalendar className={styles.durationicon} /> Duration : 3 Month</p>
            <p>
                We conduct in house as well as  corporate training on IOT. IOT training covers everything from basic
            </p>

            <div className={styles.read}>
                <button className={styles.readbtn}>
                    <Link href="/IotTraining-courses" className="link"><a>Read More...</a></Link>
                </button>
            </div>

</div>

    </div>

</div>
    </>
   

  )
}

export default Courses;