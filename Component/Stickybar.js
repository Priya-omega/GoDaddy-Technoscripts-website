import React from 'react'
import styles from '../styles/Stickybar.module.scss'

function Stickybar() {
  return (
    <>
      <div className={styles.stickybar}>

<div className={styles.sectioncontainer}>
  <div className={styles.icon}>
    <img src="img/1.webp" alt="Training" />
  </div>

  <div className={styles.text}>
    <p className={styles.bold}>312+</p>
    <p>Trainings Conducted</p>
  </div>
</div>

<div className={styles.sectioncontainer}>
  <div className={styles.icon2}>
    <img src="img/2.webp" alt="Hiring" />
  </div>

  <div className={styles.text}>
    <p className={styles.bold}>572+</p>
    <p>Hiring Partners</p>
  </div>
</div>

<div className={styles.sectioncontainer}>
  <div className={styles.icon3}>
    <img src="img/3.webp" alt="Students" />
  </div>

  <div className={styles.text}>
    <p className={styles.bold}>4552+</p>
    <p>Students Placed</p>
  </div>
</div>

<div className={styles.sectioncontainer}>
  <div className={styles.icon4}>
    <img src="img/4.webp" alt="Corporate" />
  </div>

  <div className={styles.text}>
    <p className={styles.bold}>258+</p>
    <p>Corporate Trainings</p>
  </div>
</div>

</div>
    </>
  )
}

export default Stickybar