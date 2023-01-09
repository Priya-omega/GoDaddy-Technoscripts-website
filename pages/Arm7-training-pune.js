import { useState } from 'react'
import Head from 'next/head'

import { FaRegHandPointRight, FaDownload } from 'react-icons/fa'
import Topbar from '../Component/Topbar'
import Navbar from '../Component/Navbar'
import Poster from '../Component/Poster'
import Stickybar from '../Component/Stickybar'
import Footer from '../Component/Footer'
import BatchTable from '../Component/BatchTable'
import { RiArrowRightSFill, RiArrowDownSFill } from 'react-icons/ri'
import Link from 'next/link'




function Arm7() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };


    return (
        <>
            <Head>
                <title> Arm-7-training-pune </title>
                <meta name="description" content="Best Embedded Training in pune, ARM 7 Training in pune embedded Course we are one of the best training institute for embedded system course training in Pune" />
                <link rel="icon" href="img/TS.webp" />

            </Head>

            <Topbar />
            <Navbar />
            <Poster />
            <Stickybar />

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
                                <h2>ARM 7 Training</h2>
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
                                    <h3>ARM7 Syllabus :</h3>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Introduction to ARM  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' />  Introduction to 16/32-bit Processors </p>
                                    <p> <FaRegHandPointRight className='hand-icon' />  The ARM Architecture </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Overview of ARM  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Register Set and Modes  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> ARM Processor Core  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Data Path and Instruction Decoding  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Comparison of ARM Series (ARM 10, ARM 11, Cortex)  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Intelligent Energy Management  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' />  Introduction to Exceptions </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Conditional Execution  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> ARM Development Environment  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Assembler and Compilers  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' />  Linkers and Debuggers </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Software Interrupts  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Introduction to ARM Cortex family of processors  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> ARM 7 Interfacing.  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Writing efficient C programs for ARM  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Timer/Counter with Interrupt  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> UART programming (polling/interrupt)  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> System Peripherals  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Pin Connect Block  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Hardware Debugging Tools  </p>



                                </div>

                                <div className='section2'>
                                    <h3>On-Chip Peripherals Programming, and Application:</h3>
                                    <p> <FaRegHandPointRight className='hand-icon' /> GPIO Ports  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Timers & Counters  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> A/D converter  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Interrupts & ISR’s  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Interfacing of LEDs  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Interfacing of Switches  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Interfacing of Relays  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Interfacing of LCD  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' />  Interfacing of ADC </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Interfacing of DC Motors  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Interfacing of Real Time Clock  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Serial Communication  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> GSM interfacing  </p>


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
                                <p> <a href="sylab/ARM7.pdf" attributes-list download className="dlink">Download Syllabus Pdf</a></p>

                            </div>


                        </div>

                    </div>

                </div>
            </div>


            <Footer />

        </>
    )
}

export default Arm7