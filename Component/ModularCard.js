import React from 'react'
import styles from '../styles/ModularCard.module.scss'
import Link from 'next/link'
import { FaRegCalendarCheck, FaClock, FaUserEdit, FaCheck } from 'react-icons/fa'
import {AiFillDollarCircle} from 'react-icons/ai'



function ModularCard() {
  return (
    <>
     <div className={styles.ModularCard}>
        <div className={styles.ModularCardcontainer}>
          <div className={styles.card}>
            <div className={styles.img}>
              <img src="img/card/1.svg" alt="EmbeddedC" />
            </div>

            <div className={styles.text}>
            <h3> Embedded C Training </h3>
                <p> <FaRegCalendarCheck className={styles.cardicon}/> Duration : 1 Month</p>
                <p> <AiFillDollarCircle className={styles.dollaricon}/> Fees : 8,000 INR</p>

                <p className={styles.text}>The course includes implementation of minimum two Live projects</p>

                <button className={styles.readbtn}>
                  <Link href="/EmbeddedC" className={styles.link}> Read More... </Link>
                </button>

            </div>

          </div>

          <div className={styles.card}>
            <div className={styles.img}>
              <img src="img/card/2.svg" alt="Micro8051" />
            </div>

            <div className={styles.text}>
            <h3> 8051 Training </h3>
            <p> <FaRegCalendarCheck className={styles.cardicon}/> Duration : 1 Month</p>
                <p> <AiFillDollarCircle className={styles.dollaricon}/> Fees : 8,000 INR</p>

                <p className={styles.text}>The course includes implementation of minimum two Live projects</p>

                <button className={styles.readbtn}>
                  <Link href="/Micro8051" className={styles.link}> Read More... </Link>
                </button>

            </div>

          </div>

          <div className={styles.card}>
            <div className={styles.img}>
              <img src="img/card/3.svg" alt="Raspberry" />
            </div>

            <div className={styles.text}>
            <h3> Raspberry pi Training </h3>
            <p> <FaRegCalendarCheck className={styles.cardicon}/> Duration : 1 Month</p>
                <p> <AiFillDollarCircle className={styles.dollaricon}/> Fees : 8,000 INR</p>

                <p className={styles.text}>The course includes implementation of minimum two Live projects</p>

                <button className={styles.readbtn}>
                  <Link href="/Raspberry" className={styles.link}> Read More... </Link>
                </button>

            </div>

          </div>

        </div>

        <div className={styles.ModularCardcontainer}>
          <div className={styles.card}>
            <div className={styles.img}>
              <img src="img/card/4.svg" alt="Arduino" />
            </div>

            <div className={styles.text}>
            <h3> Arduino Training </h3>
            <p> <FaRegCalendarCheck className={styles.cardicon}/> Duration : 1 Month</p>
                <p> <AiFillDollarCircle className={styles.dollaricon}/> Fees : 8,000 INR</p>

                <p className={styles.text}>The course includes implementation of minimum two Live projects</p>

                <button className={styles.readbtn}>
                  <Link href="/Arduino" className='link'> Read More... </Link>
                </button>

            </div>

          </div>

          <div className={styles.card}>
            <div className={styles.img}>
              <img src="img/card/5.svg" alt="PIC" />
            </div>

            <div className={styles.text}>
            <h3> PIC Training </h3>
            <p> <FaRegCalendarCheck className={styles.cardicon}/> Duration : 1 Month</p>
                <p> <AiFillDollarCircle className={styles.dollaricon}/> Fees : 8,000 INR</p>
                <p className={styles.text}>The course includes implementation of minimum two Live projects</p>

                <button className={styles.readbtn}>
                  <Link href="/PIC" className='link'> Read More... </Link>
                </button>

            </div>

          </div>

          <div className={styles.card}>
            <div className={styles.img}>
              <img src="img/card/6.svg" alt="AVR" />
            </div>

            <div className={styles.text}>
            <h3> AVR Training </h3>
            <p> <FaRegCalendarCheck className={styles.cardicon}/> Duration : 1 Month</p>
                <p> <AiFillDollarCircle className={styles.dollaricon}/> Fees : 8,000 INR</p>
                <p className={styles.text}>The course includes implementation of minimum two Live projects</p>

                <button className={styles.readbtn}>
                  <Link href="/AVR" className='link'> Read More... </Link>
                </button>

            </div>

          </div>

        </div>

        <div className={styles.ModularCardcontainer}>
          <div className={styles.card}>
            <div className={styles.img}>
              <img src="img/card/7.svg" alt="Arm7" />
            </div>

            <div className={styles.text}>
            <h3> ARM 7 Training</h3>
            <p> <FaRegCalendarCheck className={styles.cardicon}/> Duration : 1 Month</p>
                <p> <AiFillDollarCircle className={styles.dollaricon}/> Fees : 8,000 INR</p>
                <p className={styles.text}>The course includes implementation of minimum two Live projects</p>

                <button className={styles.readbtn}>
                  <Link href="/Arm7" className='link'> Read More... </Link>
                </button>

            </div>

          </div>

          <div className={styles.card}>
            <div className={styles.img}>
              <img src="img/card/8.svg" alt="ArmCortex" />
            </div>

            <div className={styles.text}>
            <h3> ARM Cortex Training</h3>
            <p> <FaRegCalendarCheck className={styles.cardicon}/> Duration : 1 Month</p>
                <p> <AiFillDollarCircle className={styles.dollaricon}/> Fees : 8,000 INR</p>

                <p className={styles.text}>The course includes implementation of minimum two Live projects</p>

                <button className={styles.readbtn}>
                  <Link href="/ArmCortex" className='link'> Read More... </Link>
                </button>

            </div>

          </div>

          <div className={styles.card}>
            <div className={styles.img}>
              <img src="img/card/9.svg" alt="Linux" />
            </div>

            <div className={styles.text}>
            <h3> Embedded Linux Training </h3>
            <p> <FaRegCalendarCheck className={styles.cardicon}/> Duration : 2 Month</p>
                <p> <AiFillDollarCircle className={styles.dollaricon}/> Fees : 24,000 INR</p>

                <p className={styles.text}>The course includes implementation of minimum two Live projects</p>

                <button className={styles.readbtn}>
                  <Link href="/Linux" className='link'> Read More... </Link>
                </button>

            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default ModularCard