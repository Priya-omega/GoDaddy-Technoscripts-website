
import Head from "next/head";
import { useState } from 'react'
import { FaRegHandPointRight, FaDownload } from 'react-icons/fa'
import Topbar from "../Component/Topbar";
import Navbar from "../Component/Navbar";
import Poster from '../Component/Poster'
import Stickybar from '../Component/Stickybar'
import BatchTable from '../Component/BatchTable'


import Footer from "../Component/Footer";


function Autosar() {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <>
 <Head>
        <title> Technoscripts | Best Autosar Training in Pune | Autosar Classes Join Now </title>
        <meta name="description" content="Technoscripts offering Best Embedded Training in pune with latest technologies and trends. Best Autosar Training provided by experts. Learn Autosar and upgrade your skills." />
      </Head>

            <Topbar />
            <Navbar />
            <Poster />
            <Stickybar />


            <div className='home-container'>
                <div className='heading'>
                    <h3>Autosar Training :</h3>
                </div>

                <p>
                    AUTOSAR full form is Automotive Open System Architecture is founded in 2003 by Major Automotive Players worldwide with an purpose of maintain scalability between different vehicle and platform variants, to develop an open industry standard for automotive architecture.
                </p>

                <p>
                    AUTOSAR uses a three-layered architecture which includes basic software, RTE i.e. Runtime environment and application layer. Classic Platform and adaptive platform are two standards used in autosar development.
                </p>


                <p> <strong> who can learn :</strong> Engineers / Embedded developers / Team leaders working in Automotive domain with hands-on working experience on controllers, coding and implementation of system can learn Autosar to enhance skills. </p>

                <p> <strong> prerequisite:  </strong> Candidate should know Embedded C programming. Basic Peripherals interfacing and coding. Knowledge of communication protocols will be added advantage.  </p>

            </div>


            <div className="Embedded-container">
                <div className="tab-container">
                    <div className="bloc-tabs">
                        <button
                            className={toggleState === 1 ? "tabs1 active-tabs1" : "tabs1"}
                            onClick={() => toggleTab(1)}
                        >
                            Description
                        </button>

                        <button
                            className={toggleState === 2 ? "tabs2 active-tabs2" : "tabs2"}
                            onClick={() => toggleTab(2)}
                        >
                            Curriculum
                        </button>
                        <button
                            className={toggleState === 3 ? "tabs3 active-tabs3" : "tabs3"}
                            onClick={() => toggleTab(3)}
                        >
                            Batch Scheduled
                        </button>
                        <button
                            className={toggleState === 4 ? "tabs4 active-tabs4" : "tabs4"}
                            onClick={() => toggleTab(4)}
                        >
                            Download PDF
                        </button>

                    </div>

                    <div className="content-tabs">

                        {/* Description  */}
                        <div
                            className={toggleState === 1 ? "content  active-content" : "content"}
                        >
                            <div className="heading">
                                <h2>Autosar Training :</h2>
                            </div>

                            {/* <hr /> */}
                            <p>
                                At Technoscripts we are providing Online Training For Embedded System & online IOT courses. All Online Courses comes with content same as delivered in classroom training with all practicals covered. we are giving online training for fresher students as well as professionals. Training program will be Personalised Interactive, guided by industry Experts, driven by technology, and designed to upgrade your skills and achieve career goals
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

                        </div>

                        {/* Curriculum */}
                        <div
                            className={toggleState === 2 ? "content  active-content" : "content"}
                        >
                            <div className="heading">
                                <h2>Curriculum</h2>
                            </div>
                            {/* <hr /> */}
                            <div className="embedded-c">
                                <div className='section1'>
                                    <h3> Autosar Syllabus :</h3>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Automotive product development life cycle </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Basics of Automotive domain </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Automotive Embedded system design </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Different frames of Automotive </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Building Blocks of Automotive Product design </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Automotive Functional Safety </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> ISO 61508 & ISo 26026 Safety Standards </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Basics of Testing and Validations used in automotive </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Introduction to Autosar </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Advantages of using AUTOSAR architecture </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Methodology used in autosar </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Data exchange formats used ECU extract, ECUC and System description. </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Detailed Autosar Architecture </p>
                                    
                       
                                  

                                </div>

                                <div className='section2'>
                                    <h3> <br></br> </h3>
                                    <p> <FaRegHandPointRight className='hand-icon' /> various layers of Autosar </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Introduction to concepts of BSW, RTE and SWC </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> AUTOSAR BSW Layer </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Design and Development of BSW modules </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> BSW modules Configuration using tools </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> AUTOSAR RTE </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Basics of SWC, Runnable, Interfaces and ports </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> SWC Design and configuration </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Communication Stack used </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Data flow between layers of communication stack </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Configuration of communication stack </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Configuration of MCU, COM, CANTP, CAN, CANIF </p>
                                   
                                </div>


                            </div>
                        </div>

                        {/* Batch Scheduled */}
                        <div
                            className={toggleState === 3 ? "content  active-content" : "content"}
                        >
                            <div className="heading">
                                <h2>Batch Scheduled</h2>
                            </div>

                            <BatchTable />

                        </div>


                        {/* Download PDF */}

                        <div
                            className={toggleState === 4 ? "content  active-content" : "content"}
                        >

                            <div className='heading'>
                                <h2>Download Syllabus</h2>
                            </div>


                            <div className='section3'>

                                <div className='download'>
                                    <FaDownload className='download-icon' />
                                </div>
                                <p> <a href="sylab/TechnoScripts-Brochure.pdf" attributes-list download className="dlink">Download Syllabus Pdf</a></p>
                            </div>


                        </div>

                    </div>

                </div>
            </div>



            <Footer />

        </>
    )
}

export default Autosar