
import Head from "next/head";
import { useState } from 'react'
import { FaRegHandPointRight, FaDownload } from 'react-icons/fa'


import Topbar from "../Component/Topbar";
import Navbar from "../Component/Navbar";
import Poster from '../Component/Poster'
import Stickybar from '../Component/Stickybar'
import BatchTable from '../Component/BatchTable'

import Footer from "../Component/Footer";



function CANprotocol() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <>

<Head>
        <title> Technoscripts : CAN protocol classes in pune, can protocol Training pune </title>
        <meta name="description" content="Best Embedded Training in pune, embedded course pune. Best training institute for embedded system course training in pune, CAN Protocol training Classes" />
      </Head>

            <Topbar />
            <Navbar />
            <Poster />
            <Stickybar />


            <div className='home-container'>
                <div className='heading'>
                    <h3>CAN Protocol Training :</h3>
                </div>

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
                                <h2>CAN Protocol Training :</h2>
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
                                    <h3>CAN Protocol Syllabus :</h3>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Introduction to CAN protocol   </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Use of CAN protocol in Automotive  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Basic of CAN Standard and Extended  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> CAN communication  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Implementation of CAN drivers  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> CAN Hardware  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> comparison I2C,SPI,RS232-drawbacks  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> why CAN, CAN basics, OSI -reference model,  </p>
          
                                    <p> <FaRegHandPointRight className='hand-icon' />   properties of CAN  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> node concept, CSMA/CD-CR  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> CAN states : dominant, recessive  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> CAN Voltage levels: CAN High & CAN Low  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> types of Frames-data, remote, error , overload  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Frame contents for all types  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Physical Layer, Arbitration Concept, Frame Formats  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Bit-stuffing coding  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> CAN Speed  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' />  Need of terminating resistors </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Types of errors – ack error, stuff error, form error, bit error, crc error  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> CAN Error Handling  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> CAN Error Detection  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> CAN bus arbitration  </p>
                                    
                                   
                                    

                                  
                                </div>

                                <div className='section2'>
                                    <h3> <br></br> </h3>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Fault Confinement  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' />  Active Flag, Passive Flag, Buss-off Conditions </p>
                                    <p> <FaRegHandPointRight className='hand-icon' />  Recovery From Bus OFF </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> LIN Versus CAN  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Interfacing of PIC18f458 with MCP2551 and CAN BUS  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Interframe Spacing  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Bit timing calculations  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Baud Rate calculations  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' />  Architecture of CAN engine in automotive </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> need of filter and mask registers  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> SFR’s -control , transmit, receive, filter, mask , baud rate control, interrupt  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> SFR: filter, mask , baud rate control, interrupt  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Project creation  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> loop back mode testing  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> creating 2 nodes : Transmitter and Receiver nodes  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> send any data from transmitter node and receiving  the same data on receiver node  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' />  Interview questions and discussion </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> CAN Bus analyzer Tool Chain  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Building Simple CAN Application using CAN Training Kit  </p>
                                    <p> <FaRegHandPointRight className='hand-icon' /> Project implementation using CAN  </p>
                                   
                                    

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

export default CANprotocol