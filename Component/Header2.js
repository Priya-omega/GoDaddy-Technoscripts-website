import React from 'react'
import Link from 'next/link';
import { RiArrowRightSFill, RiArrowDownSFill } from 'react-icons/ri'
import styles from '../styles/Header.module.scss'

function Header() {
    return (
        <>
            <div className={styles.navbar}>

                {/* <!-- Navbar logo --> */}
                <div className={styles.logo}>
                    <img src="img/logopng.png" alt="" />
                </div>


                {/* <!-- responsive navbar toggle button --> */}
                <input type="checkbox" id="navcheck" />
                <div className={styles.navbtn}>
                    <label for="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>


                {/* <!-- Navbar items --> */}
                <div className={styles.navlinks}>
                    <Link href="" className={styles.NavLink}> Home</Link>


                    {/* <!-- Dropdown menu --> */}
                    
                    {/* <div className={styles.dropdown}>
                        <Link href="" className={`${styles.dropBtn} ${styles.NavLink}`}> Courses<RiArrowDownSFill className={styles.downarrow} /> </Link>

                        <div className={styles.dropcontent}>
                            <Link href="/AdvanceCareer" className={styles.Link}> Advance Career Track </Link>

                            <Link href="/DiplomaEmbedded" className={styles.Link}> Diploma in Embedded System </Link>

                            <Link href="/IotTraining" className={styles.Link}> IOT Training </Link>

                            <Link href="/AdvanceIot" className={styles.Link}> Advance IOT </Link>

                            <Link href="/AutomotiveEmbedded" className={styles.Link}> Automotive Embedded </Link>


                            {/* <!-- Creating sub menu Dropdown --> */}

                            <div className="dropdown2">
                                <Link href="/" className="dropBtn2 Link">  Modular Courses <RiArrowRightSFill className={styles.navbar} /> </Link>

                                <div className={styles.navbar}>

                                    <Link href="/EmbeddedC-training" className={styles.navbar}>  Embedded C Training </Link>

                                    <Link href="/Micro8051" className={styles.navbar}> 8051 Training  </Link>

                                    <Link href="/Raspberry" className={styles.navbar}> Raspberry pi Training  </Link>

                                    <Link href="/Arduino" className={styles.navbar}> Arduino Training  </Link>

                                    <Link href="/PIC" className='Link'> PIC Training  </Link>

                                    <Link href="/AVR" className='Link'> AVR Training  </Link>

                                    <Link href="/Arm7" className='Link'> ARM 7 Training  </Link>

                                    <Link href="/ArmCortex" className='Link'> ARM Cortex Training  </Link>

                                    <Link href="/Linux" className='Link'> Embedded Linux Training   </Link>

                                </div>

                            </div>


                        </div>



                        {/* <button className="loginBtn">Login</button> */}

                        {/* searchbar */}

                    </div> */}

                    <Link href="/training" className={styles.NavLink}> Online Training</Link>

                    <Link href="/Placement" className={styles.NavLink}> Placement </Link>

                    <Link href="/Contact" className={styles.NavLink}> Contact Us</Link>

                </div>


                {/* Search Menu */}
                <div className={styles.search}>
                    <input type="search" placeholder='Search Here...' />
                    <button className={styles.searchbtn}>
                        Search
                    </button>
                </div>

            </div>
        </>
    )
}

export default Header