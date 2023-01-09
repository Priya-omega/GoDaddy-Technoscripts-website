import React from 'react'
import Link from 'next/link';

import { RiArrowRightSFill, RiArrowDownSFill } from 'react-icons/ri'
import styles from '../styles/Header.module.scss'
import {useRouter} from 'next/router';

function Header() {
const {asPath} = useRouter();

    return (
        <>
            <div className={styles.navbar}>

                {/* <!-- Navbar logo --> */}
                <div className={styles.logo}>
                    <img src="pic/logopng.webp" alt="" />
                </div>


                {/* <!-- responsive navbar toggle button --> */}
                <input type="checkbox" id={styles.navcheck} />
                <div className={styles.navbtn}>
                    <label for="navcheck" className={styles.label}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>


                {/* <!-- Navbar items --> */}
                <div className={styles.navlinks}>
                    {/* <Link href="/"><a className={styles.NavLink}>Home</a></Link> */}

                    <Link href="/TestPage"><a className={asPath === '/TestPage' ? styles.active : styles.NavLink}>Test Page</a></Link>

                    <Link href="/"><a className={asPath === '/' ? styles.active : styles.NavLink}>Home</a></Link>



                    {/* <!-- Dropdown menu --> */}
                    <div className={styles.dropdown}>
                    <Link href="/Coursepage" ><a className={asPath === '/Coursepage' ? styles.active : styles.dropBtn}>Courses</a></Link>
                
                 {/* <Link href="/Coursepage" ><a className={`${styles.dropBtn} ${styles.NavLink}`}>Courses</a></Link> */}
                        {/* Courses<RiArrowDownSFill className={styles.downarrow}/> */}
                        <div className={styles.dropcontent}>
                            <Link href="/AdvanceCareer" className={styles.Link}><a> Advance Career Track</a></Link>

                            <Link href="/DiplomaEmbedded" className={styles.Link}><a> Diploma in Embedded System</a></Link>

                            <Link href="/IotTraining" className={styles.Link}><a> IOT Training</a></Link>

                            <Link href="/AdvanceIot" className={styles.Link}><a> Advance IOT </a></Link>

                            <Link href="/AutomotiveEmbedded" className={styles.Link}><a> Automotive Embedded</a></Link>


                            {/* <!-- Creating sub menu Dropdown --> */}

                            <div className={styles.dropdown2}>
                                <Link href="/modular-courses-in-embedded-Pune" className={`${styles.dropBtn2} ${styles.Link}`}>Modular Courses</Link>
                                {/* <RiArrowRightSFill className={styles.rightarrow} /> */}
                                
                                <div className={styles.dropcontent2}>

                                    <Link href="/EmbeddedC" className={styles.Link}>  Embedded C Training </Link>

                                    <Link href="/Micro8051" className={styles.Link}> 8051 Training  </Link>

                                    <Link href="/Raspberry" className={styles.Link}> Raspberry pi Training  </Link>

                                    <Link href="/Arduino" className={styles.Link}> Arduino Training  </Link>

                                    <Link href="/PIC" className={styles.Link}> PIC Training  </Link>

                                    <Link href="/AVR" className={styles.Link}> AVR Training  </Link>

                                    <Link href="/Arm7" className={styles.Link}> ARM 7 Training  </Link>

                                    <Link href="/ArmCortex" className={styles.Link}> ARM Cortex Training  </Link>

                                    <Link href="/Linux" className={styles.Link}> Embedded Linux Training   </Link>

                                </div>
                            </div>
                        </div>
                    </div>


                    <Link href="/OnlineTraining"><a className={asPath === '/OnlineTraining' ? styles.active : styles.NavLink}>Online Training</a></Link>

                    <Link href="/PlacementPage"><a className={asPath === '/PlacementPage' ? styles.active : styles.NavLink}>Placements</a></Link>

                    <Link href="/Contact"><a className={asPath === '/Contact' ? styles.active : styles.NavLink}>Contact Us</a></Link>

                    {/* <button className="loginBtn">Login</button> */}

                    {/* searchbar */}

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