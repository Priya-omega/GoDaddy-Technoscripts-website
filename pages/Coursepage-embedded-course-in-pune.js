import React from 'react'
import Link from 'next/link'
// import styles from '../styles/Coursepage.module.scss'
import { FaRegCalendarCheck, FaClock, FaUserEdit, FaCheck,FaRegHandshake,FaProjectDiagram   } from 'react-icons/fa'
import { RiStarHalfSFill } from 'react-icons/ri'
import { AiTwotoneCalendar, AiOutlineSetting } from 'react-icons/ai'

import { RiArrowRightSFill, RiArrowDownSFill } from 'react-icons/ri'
import ModularCard from '../Component/ModularCard'
import Topbar from '../Component/Topbar'
import Header from '../Component/Header'
import Poster from '../Component/Poster'
import Stickybar from '../Component/Stickybar'
import Footer from '../Component/Footer'
import Navbar from '../Component/Navbar'
import Head from 'next/head'


import { useRouter } from 'next/router';


function Coursepage() {
    const { asPath } = useRouter();
    return (
        <>
            <Head>
                <title> Best Embedded System course in pune | TechnoScripts | Embedded institue</title>
                <meta name="description" content="Best Embedded Training institue in pune, embedded course pune. we are one of the best training institute for embedded system training in Pune" />
            </Head>

            <Topbar />

            <Navbar />

            <div className="courseEnrollment">
                    <div className="enrollmentContainer">
                        <div className="text">
                            <div className="badge">
                                <h3>Certified Online Courses</h3>
                            </div>

                            <h1>Get Trained , Get Placed</h1>

                            <h3>With <span className="white"> India&apos;s No.1 </span> </h3>
                            <h3>Embedded Training Institute </h3>

                            <p>
                                <div className="span" > <FaRegHandshake className="placementicon" /> Placement Assistance</div>
                                <div className="span"> <FaProjectDiagram className="projecticon" /> Live Projects</div>

                            </p>

                            <p>
                                <div className="span"> <AiOutlineSetting className="techicon" /> Technical Support</div>
                                <div className="span"> <AiTwotoneCalendar className="durationicon" />Flexible Schedule </div>
                            </p>

                        </div>

                    </div>
                </div>



            <div className='page-container'>
                <div className="heading">
                    <h3> Courses </h3>
                </div>

                <div className="CoursePage">

                    <h5 className='blue'>Get Trained, Get Ahead with Our Programs</h5>

                    <p>
                        Embedded system training courses by pune’s best training institute. Following courses in embedded system are offered by Technoscripts:
                    </p>

                    <p>
                        The embedded system course in our institute is a blend of software and hardware which when combined make sure the proper functioning of an embedded system that ranges from the small portable devices like digital watches & MP3 players to some of the large stationary installations like traffic lights, factory controllers to some of the very large & complex systems like hybrid vehicles MRI, aerospace applications. The embedded system is actually a computer system with an integrated function inside a large mechanical or electrical system usually with real-time computing restrictions.
                    </p>

                    <div className="short">
                        <span> <RiStarHalfSFill className='star-icon' /> Training</span>
                        <span><RiStarHalfSFill className='star-icon' /> Certificates</span>
                        <span> <RiStarHalfSFill className='star-icon' />  Projects </span>
                        <span> <RiStarHalfSFill className='star-icon' /> Placement </span>
                    </div>


                    <div className='card-container'>
                        <div className="card">
                            <div className="img">
                                <img src="img/embed2.webp" alt="Embedded System" />
                            </div>

                            <div className="minicard">
                                <h3> Embedded System</h3>
                                <p> <FaRegCalendarCheck className='card-icon' /> 4 Month</p>
                                <p> <FaClock className='card-icon' /> start from: 16 Jan 2023</p>

                                <p className='text'>The course includes implementation of minimum two Live projects</p>

                                <button className='read-btn'>
                                    <Link href="/EmbeddedC" className='link'> Read More... </Link>
                                </button>

                            </div>




                        </div>

                        <div className="card">
                            <div className="img">
                                <img src="img/automotive3.webp" alt="Automotive" />
                            </div>


                            <div className="minicard">
                                <h3> Automotive Embedded</h3>
                                <p> <FaRegCalendarCheck className='card-icon' /> 4 Month</p>
                                <p> <FaClock className='card-icon' /> start from: 16 Jan 2023</p>

                                <p className='text'>The course includes implementation of minimum two Live projects</p>

                                <button className='read-btn'>
                                    <Link href="AutomotiveEmbedded" className='link'> Read More... </Link>
                                </button>

                            </div>


                        </div>

                        <div className="card">
                            <div className="img">
                                <img src="img/iot3.webp" alt="IOT" />
                            </div>


                            <div className="minicard">
                                <h3> IOT Internet of Things</h3>
                                <p> <FaRegCalendarCheck className='card-icon' /> 2 Month</p>
                                <p> <FaClock className='card-icon' /> start from: 16 Jan 2023</p>

                                <p className='text'>The course includes implementation of minimum two Live projects</p>

                                <button className='read-btn'>
                                    <Link href="IotTraining" className='link'> Read More... </Link>
                                </button>

                            </div>

                        </div>

                    </div>

                    <div className='card-container'>
                        <div className="card">
                            <div className="img">
                                <img src="img/15.webp" alt="PGDiploma" />
                            </div>

                            <div className="minicard">
                                <h3> PG Diploma In Embedded </h3>
                                <p> <FaRegCalendarCheck className='card-icon' /> 3 Month</p>
                                <p> <FaClock className='card-icon' /> start from: 16 Jan 2023</p>

                                <p className='text'>The course includes implementation of minimum two Live projects</p>

                                <button className='read-btn'>
                                    <Link href="DiplomaEmbedded" className='link'> Read More... </Link>
                                </button>

                            </div>




                        </div>

                        <div className="card">
                            <div className="img">
                                <img src="img/17.webp" alt="AdvanceIOT" />
                            </div>


                            <div className="minicard">
                                <h3> Advance IOT</h3>
                                <p> <FaRegCalendarCheck className='card-icon' /> 4 Month</p>
                                <p> <FaClock className='card-icon' /> start from: 16 Jan 2023</p>

                                <p className='text'>The course includes implementation of minimum two Live projects</p>

                                <button className='read-btn'>
                                    <Link href="AdvanceIot" className='link'> Read More... </Link>
                                </button>

                            </div>


                        </div>

                        <div className="card">
                            <div className="img">
                                <img src="img/19.webp" alt="AutosarTraining" />
                            </div>


                            <div className="minicard">
                                <h3> Autosar Training</h3>
                                <p> <FaRegCalendarCheck className='card-icon' /> 2 Month</p>
                                <p> <FaClock className='card-icon' /> start from: 16 Jan 2023</p>

                                <p className='text'>The course includes implementation of minimum two Live projects</p>

                                <button className='read-btn'>
                                    <Link href="AutomotiveEmbedded" className='link'> Read More... </Link>
                                </button>

                            </div>

                        </div>

                    </div>

                    <p>
                        Technoscripts is a leading Indian entity founded in 2005 exploring itself in embedded system development & training. It is well known for advance technology training with quality training & good placement track for freshers as well as working professionals.
                    </p>

                    <p>
                        We are pioneer of the embedded system training with expertise of over 12 years. We are one of the India’s most reputed corporate training & Workshops Company in the field of Embedded System & Robotics
                    </p>

                </div>

            </div>

            <div className="page-container">

                <div className="heading">
                    <h3>Modular Courses</h3>
                </div>

                <p>
                    Embedded Systems have a very wide application in different domains such as automobile, consumer consumer durable, appliances, medical applications, Power electronics, diagnostic equipment, Industrial automation,  communication systems, aerospace and entertainment systems, Mobile applications. Embedded system is part of automation & its use will be growing only. it is having never ending scope.
                </p>


                <ModularCard />

                <p>
                    The main motive behind any professional training is to get excellence in technologies & get placed on desired job profile. our aim behind this training is also to help students in getting good jobs in design & development in embedded system for the same invites the companies for campus interview also arrange interview for student at company campus.
                </p>

                <p>
                    We Conduct mock group discussion and personal interview session. we guide students in the area of soft skills and personality development to achieve success in their career.Our placement activity starts from the second month from date of batch commencement.
                </p>

            </div>

            <Footer />

        </>
    )
}

export default Coursepage