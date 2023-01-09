import React from 'react'
import Topbar from '../Component/Topbar'
import Navbar from '../Component/Navbar'
import Poster from '../Component/Poster'
import Stickybar from '../Component/Stickybar'
import Footer from '../Component/Footer'
import Courses from '../Component/Courses'
import { FaRegHandshake, FaProjectDiagram } from 'react-icons/fa'
import { AiTwotoneCalendar, AiOutlineSetting } from 'react-icons/ai'
import Q1 from '../Component/Questions/Q1'
import Q2 from '../Component/Questions/Q2'
import Q3 from '../Component/Questions/Q3'
import Q4 from '../Component/Questions/Q4'
import Q5 from '../Component/Questions/Q5'
import Q6 from '../Component/Questions/Q6'
import Q7 from '../Component/Questions/Q7'
import Q8 from '../Component/Questions/Q8'
import Q9 from '../Component/Questions/Q9'
import Q10 from '../Component/Questions/Q10'
import Q11 from '../Component/Questions/Q11'
import Q12 from '../Component/Questions/Q12'
import Q13 from '../Component/Questions/Q13'
import Q14 from '../Component/Questions/Q14'
import Q15 from '../Component/Questions/Q15'
import Q16 from '../Component/Questions/Q16'
import Q17 from '../Component/Questions/Q17'
import Q18 from '../Component/Questions/Q18'
import Q19 from '../Component/Questions/Q19'

import { RiArrowRightSFill, RiArrowDownSFill } from 'react-icons/ri'
import { useRouter } from 'next/router';
import Link from 'next/link'
import Head from 'next/head'
import Popup from '../Component/Popup'


function OnlineTraining() {
    const { asPath } = useRouter();

    return (
        <>
            <>
                <Head>
                    <title> Embedded System Online Training by Technoscripts, Most Trusted Name </title>
                    <meta name="description" content="Technoscripts provides Best embedded system online Training course with placement. Best Embedded systems online training with practicals." />
                </Head>

                <Topbar />

                <Navbar />

                {/* <Poster />
                <Stickybar /> */}

                <div className="enrollment">
                    <div className="enrollmentContainer">
                        <div className="text">
                            <div className="badge">
                                <h3>Certified Online Training</h3>
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

<div className="form">
    <Popup />
</div>

                        {/* <div className="form">

                            <div className="field">
                                <label htmlFor="" className="label">Full Name :</label>
                                <input type="text" placeholder='Enter Name' className="input" />
                            </div>

                            <div className="field">
                                <label htmlFor="" className="label">Mobile Number :</label>
                                <input type="text" placeholder='Enter Mobile Number' className="input" />
                            </div>

                            <div className="field">
                                <label htmlFor="" className="label">Select Course :</label>
                                <select name="course" id="course">
                                    <option value="Diploma in Embedded System">Diploma in Embedded System</option>
                                    <option value="Automotive Embedded">Automotive Embedded</option>
                                    <option value="IOT Training">IOT Training</option>
                                    <option value="8051 Training">8051 Training </option>
                                </select>
                            </div>

                            <div className="field">
                                <label htmlFor="" className="label">Select Batch :</label>
                                <select name="Batch" id="Batch">
                                    <option value="15 Aug,2022">15 Aug,2022</option>
                                    <option value="19 Aug,2022">19 Aug,2022</option>
                                    <option value="23 Aug,2022">23 Aug,2022</option>
                                    <option value="01 Sep,2022">01 Sep,2022</option>
                                </select>
                            </div>

                            <button className="btn" >Enroll Now</button>

                        </div> */}

                    </div>
                </div>



                <div className="page-container">

                    <div className='heading'>
                        <h3>Embedded Online Training</h3>
                    </div>

                    <p> At Technoscripts we are providing Online Training For Embedded System & online IOT courses. All Online Courses comes with content same as delivered in classroom training with all practicals covered. we are giving online training for fresher students as well as professionals. Training program will be Personalised Interactive, guided by industry Experts, driven by technology, and designed to upgrade your skills and achieve career goals.
                    </p>

                    <p>
                        Every course we are providing have 100% Placement support. There are different courses in embedded system , internet of things ( Iot),  Matlab, Automotive, Autosar etc.
                    </p>

                    <p>
                        All the required kits will be provided to candidates as per requirement for practical purpose. Training will be interactive live instructor led training, students can participate and sole all queries. Batch size will be small so all students can interactive actively and get good understanding of topic covered.
                    </p>

                    <p>
                        After Course completion interview preparation sessions will be conducted and placement process will be started.

                    </p>

                    <p>
                        Here is a list of online training modules, candidate’s can choose according to their skill set and current knowledge.
                    </p>


                </div>


                <Courses />

                {/* <hr /> */}

                <div className="page-container">
                    <div className="heading">
                        <h3> Batch Schedule : </h3>
                    </div>
                </div>

                <div className="training-table">
                    <table className='table'>
                        <tr>
                            <th>Sr. No.</th>
                            <th>Course Name</th>
                            <th>Duration</th>
                            <th>Syllabus</th>
                        </tr>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td> Complete Embedded Course</td>
                                <td> 3 months</td>
                                <td> Embedded system online Training  Syllabus</td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>STM32 Arm Cortex Training</td>
                                <td>1 Month</td>
                                <td>STM32 Arm Cortex Syllabus</td>
                            </tr>

                            <tr>
                                <td>3</td>
                                <td>Online Training for iot with Nodemcu  </td>
                                <td>1 Month</td>
                                <td>Online IOT Syllabus</td>
                            </tr>

                            <tr>
                                <td>4</td>
                                <td>IOT online training with Raspberry Pi </td>
                                <td>2 Month</td>
                                <td>IOT Advance Syllabus</td>
                            </tr>

                            <tr>
                                <td>5</td>
                                <td> Online Matlab Training</td>
                                <td>1 Month</td>
                                <td>MATLAB Syllabus</td>
                            </tr>

                            <tr>
                                <td>6</td>
                                <td> Online Automotive Embedded Training</td>
                                <td>3 Month</td>
                                <td>Automotive Syllabus</td>
                            </tr>

                        </tbody>
                    </table>

                </div>

                <div className="page-container">
                    <div className="heading">
                        <h3> Goals : </h3>
                    </div>

                    <div>
                        <ul>
                            <li> Learn Hands-on Embedded Systems course online to get an Excellent Job in this Domain </li>
                            <li> Become an Industry-ready Hands-on Embedded Engineer, by completing all the related embedded course-ware and embedded projects online </li>
                            <li> Complete certification course in embedded systems from NSDC for Embedded Software Engineer (ELE /Q3911) job role </li>
                            <li> Get your FIRST JOB with Core Embedded / IoT companies </li>
                        </ul>
                    </div>
                </div>

                <div className="page-container">
                    <div className="heading">
                        <h3> Target Audience : </h3>
                    </div>
                    <div>
                        <ul>
                            <li> Engineering (All Branches) </li>
                            <li> Students and Professionals looking to up-scale their Career </li>
                        </ul>
                    </div>

                </div>

                <div className="page-container">
                    <div className="heading">
                        <h3> Duration / Schedule : </h3>
                    </div>

                    <div>
                        <ul>
                            <li> Virtual Classroom Sessions – 5 Months / 98 Days / 196 Hours @ 2 Hrs per session </li>

                            <li> Live Assignment Discussion and Doubt Clarification sessions: 52 Hours @ 1.5 Hrs session </li>

                            <li> Virtual Classroom schedule – 6 Days per Week </li>

                        </ul>
                    </div>

                </div>


                <div className="page-container">
                    <div className="heading">
                        <h3> Online Embedded Systems Course - Learnng Environment & Delivery  : </h3>
                    </div>

                    <div>
                        <ul>
                            <li> Live Virtual Classes + Recorded Videos for Self Learning + Intervention Sessions with Mentors </li>
                            <li> Individual Online Doubt clarifications through Email, Forum and Chat whenever you are stuck up* </li>
                            <li> Expert pool of mentors always glad to support you </li>
                            <li> Build an excellent resume with 10 to 12 Mini Projects </li>
                            <li> Dedicated Interview Preparation Sessions Included in all modules </li>
                            <li> NSDC / ESSCI Certification: Obtain central Government certificate (Level-5) to enhance your career </li>
                        </ul>
                    </div>

                </div>

                <div className="page-container">
                    <div className="heading">
                        <h3> Placement Support : </h3>
                    </div>

                    <div>
                        <ul>
                            <li> Get Continuous Placement Opportunities for 2 year after course completion in Core Companies </li>
                            <li> 695+ Placement Drives** in 2021 </li>
                            <li> Embedded systems training aimed for jobs in core embedded companies </li>
                            <li> Check out our placement record to get a transparent and realistic view of placements </li>
                        </ul>
                    </div>
                </div>

                <div className="page-container">
                    <div className="heading">
                        <h3> Support Mechanism for Leaving : </h3>
                    </div>
                    <div>
                        <ul>
                            <li> Unlimited Intervention and Doubt clarification through Chat, Online Forum, Email: 6 Days / Week, 9:00 AM to 9:00 PM </li>
                            <li> Recorded Videos for Self Learning </li>
                            <li> Intervention Sessions with Mentors Post classes – Weekly Twice </li>
                            <li> Online Practice Tests </li>
                        </ul>
                    </div>
                </div>

                {/* --------------------FAQ------------ */}

                <div className="page-container">
                    <div className="heading">
                        <h3> Placements - General FAQ : </h3>
                    </div>

                    <div className="question-container">

                        <div className="container">
                            <Q1 />
                            <Q2 />
                            <Q3 />
                            <Q4 />
                            <Q5 />


                        </div>

                        <div className="container">
                            <Q6 />
                            <Q7 />
                            <Q8 />
                            <Q9 />

                        </div>








                    </div>


                </div>



                {/* -------------------- Embedded FAQ------------ */}

                <div className="page-container">
                    <div className="heading">
                        <h3> Embedded Systems Careers- FAQ : </h3>
                    </div>

                    <div className="question-container">

                        <div className="container">
                            <Q10 />
                            <Q11 />
                            <Q12 />
                            <Q13 />
                            <Q14 />

                        </div>

                        <div className="container">
                            <Q15 />
                            <Q16 />
                            <Q17 />
                            <Q18 />
                            <Q19 />

                        </div>








                    </div>


                </div>



                <Footer />

            </>
        </>
    )
}

export default OnlineTraining