import { useState } from 'react'
import { FaRegHandPointRight, FaDownload } from 'react-icons/fa'
import Topbar from '../Component/Topbar'
import Navbar from '../Component/Navbar'
import Poster from '../Component/Poster'
import Stickybar from '../Component/Stickybar'
import Footer from '../Component/Footer'
import BatchTable from '../Component/BatchTable'
import { RiArrowRightSFill, RiArrowDownSFill } from 'react-icons/ri'
import Link from 'next/link'
import Head from 'next/head'



function Arduino() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <>
        
      <Head>
        <title> Best Arduino training in pune, arduino workshop pune </title>
        <meta name="description" content="Arduino training in pune, arduino workshop in pune, Best Embedded Training in pune, embedded course pune, Technoscripts offers arduino workshops in pune" />
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
                                <h2>Arduino Training</h2>
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
                                <h2> Curriculum </h2>

                            </div>
                            {/* <hr /> */}
                            <div className="embedded-c">

                                <div className='section1'>
                                    <div>
                                        <h3> Arduino Syllabus: </h3>
                                        <p> <FaRegHandPointRight className='hand-icon' /> Introduction to Arduino  </p>
                                        <p> <FaRegHandPointRight className='hand-icon' /> Introduction to Embedded System  </p>
                                        <p> <FaRegHandPointRight className='hand-icon' /> Applications & Scope of Embedded System in various industries.  </p>
                                        <p> <FaRegHandPointRight className='hand-icon' /> Introduction to Open Source platform  </p>
                                        <p> <FaRegHandPointRight className='hand-icon' />  An Overview of Open Hardware </p>
                                        <p> <FaRegHandPointRight className='hand-icon' /> Arduino Board Description  </p>
                                        <p> <FaRegHandPointRight className='hand-icon' /> Introduction to Microcontroller  </p>
                                        <p> <FaRegHandPointRight className='hand-icon' /> What is Microcontroller?  </p>
                                        <p> <FaRegHandPointRight className='hand-icon' /> Difference between Microcontroller and Microprocessor  </p>
                                        <p> <FaRegHandPointRight className='hand-icon' /> Microcontroller architecture and Interfacing  </p>
                                        <p> <FaRegHandPointRight className='hand-icon' /> Introduction to Microcontrollers & the Arduino Platform  </p>
                                        <p> <FaRegHandPointRight className='hand-icon' /> How can we use microcontroller in our circuits  </p>
                                        <p> <FaRegHandPointRight className='hand-icon' /> Introduction to Programming Language  </p>
                                        <p> <FaRegHandPointRight className='hand-icon' /> Programming Languages- Assembly Vs Embedded ‘C’  </p>
                                        <p> <FaRegHandPointRight className='hand-icon' /> Microcontroller Programming using Embedded ‘C’  </p>
                                        <p> <FaRegHandPointRight className='hand-icon' /> Introduction to software tool chain  </p>

                                    </div>

                                    <div>
                                        <h3>Switch :</h3>
                                        <p> <FaRegHandPointRight className='hand-icon' /> Types of switches </p>
                                        <p> <FaRegHandPointRight className='hand-icon' /> Their Functions </p>
                                        <p> <FaRegHandPointRight className='hand-icon' /> Interfacing of switch with Arduino </p>
                                    </div>

                                    <div>
                                        <h3>Buzzer :</h3>
                                        <p> <FaRegHandPointRight className='hand-icon' /> Types of Buzzer </p>
                                        <p> <FaRegHandPointRight className='hand-icon' /> Uses of Buzzer in Real Time </p>
                                        <p> <FaRegHandPointRight className='hand-icon' /> Interfacing of Buzzer with Arduino </p>
                                    </div>

                                    <div>
                                        <h3> LEDs: </h3>
                                        <p> <FaRegHandPointRight className='hand-icon' /> Types of LEDs. </p>
                                        <p> <FaRegHandPointRight className='hand-icon' /> How LEDs works? </p>
                                        <p> <FaRegHandPointRight className='hand-icon' /> How LEDs will glow in sequence? </p>
                                        <p> <FaRegHandPointRight className='hand-icon' /> Interfacing of LED with Arduino  </p>

                                    </div>

                                    <div>
                                        <h3>Display Devices  :</h3>
                                        <p> <FaRegHandPointRight className='hand-icon' /> Types of Display Devices </p>
                                        <p> <FaRegHandPointRight className='hand-icon' /> What is a LCD? </p>
                                        <p> <FaRegHandPointRight className='hand-icon' /> How to use LCD? </p>
                                        <p> <FaRegHandPointRight className='hand-icon' /> Interfacing of LCD with Arduino </p>
                                    </div>

                                    <div>
                                        <h3>RFID :</h3>
                                        <p> <FaRegHandPointRight className='hand-icon' /> What is RF? </p>
                                        <p> <FaRegHandPointRight className='hand-icon' /> What is RFID? </p>
                                        <p> <FaRegHandPointRight className='hand-icon' /> How to read RFID </p>
                                        <p> <FaRegHandPointRight className='hand-icon' /> RFID Interfacing </p>

                                    </div>

                                </div>

                                <div className='section2'>
                                    <div>
                                        <h3>Serial Communication :</h3>
                                        <p> <FaRegHandPointRight className='hand-icon' /> Difference between Parallel and Serial Communication </p>
                                        <p> <FaRegHandPointRight className='hand-icon' /> USART / UART Protocol </p>
                                        <p> <FaRegHandPointRight className='hand-icon' /> RS232 Standard </p>
                                        <p> <FaRegHandPointRight className='hand-icon' /> TTL Converter </p>
                                        <p> <FaRegHandPointRight className='hand-icon' /> UART Programming </p>
                                        <p> <FaRegHandPointRight className='hand-icon' /> GSM Interfacing </p>
                                        <p> <FaRegHandPointRight className='hand-icon' /> Motor interfacing </p>
                                        <p> <FaRegHandPointRight className='hand-icon' /> LCD Interfacing </p>

                                    </div>

                                    <div >
                                        <h3>ADC :</h3>
                                        <p> <FaRegHandPointRight className='hand-icon' /> What is ADC? </p>
                                        <p> <FaRegHandPointRight className='hand-icon' /> Use of ADC </p>
                                        <p> <FaRegHandPointRight className='hand-icon' /> What is Resolution? </p>
                                        <p> <FaRegHandPointRight className='hand-icon' /> Uses of different ADC Registers </p>
                                        <p> <FaRegHandPointRight className='hand-icon' /> Interfacing of Analog Devices with Digital World </p>
                                    </div>

                                    <div>
                                        <h3> Software Installation: </h3>
                                        <p> <FaRegHandPointRight className='hand-icon' /> Getting started with the Arduino IDE to start writing your first program </p>
                                        <p> <FaRegHandPointRight className='hand-icon' /> Writing your First ‘Embedded C’ Program </p>
                                        <p> <FaRegHandPointRight className='hand-icon' /> Interfacing of I/O devices </p>
                                    </div>

                                    <div>
                                        <h3>PWM :</h3>
                                        <p> <FaRegHandPointRight className='hand-icon' /> What is PWM? </p>
                                        <p> <FaRegHandPointRight className='hand-icon' /> Use of PWM </p>
                                        <p> <FaRegHandPointRight className='hand-icon' /> Interfacing Fading of LED using PWM </p>
                                        <p> <FaRegHandPointRight className='hand-icon' /> Motor Speed control using PWM </p>
                                        <p> <FaRegHandPointRight className='hand-icon' /> Servo Motor Control </p>
                                    </div>

                                    <div>
                                        <h3>SD Cards and Data logging :</h3>
                                        <p> <FaRegHandPointRight className='hand-icon' /> Introduction of Storage Devices </p>
                                        <p> <FaRegHandPointRight className='hand-icon' /> Theory of SPI </p>
                                        <p> <FaRegHandPointRight className='hand-icon' /> Hardware overview </p>
                                        <p> <FaRegHandPointRight className='hand-icon' /> Interfacing SD card </p>
                                    </div>

                                    <div>
                                        <h3>Wireless Communication :</h3>
                                        <p> <FaRegHandPointRight className='hand-icon' /> Introduction of wireless communication </p>
                                        <p> <FaRegHandPointRight className='hand-icon' /> Overview of Wireless Devices </p>
                                        <p> <FaRegHandPointRight className='hand-icon' /> Wifi using Nodemcu ESP8226 </p>
                                    </div>





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

            {/* <div className="page-container">
                <div className="heading">
                    <h2>Arduino Training in Pune</h2>
                </div>

                <div className="arduino">



                    <div className='section1'>
                        <h3> Arduino Syllabus: </h3>
                        <p> <FaRegHandPointRight className='hand-icon' /> Introduction to Arduino  </p>
                        <p> <FaRegHandPointRight className='hand-icon' /> Introduction to Embedded System  </p>
                        <p> <FaRegHandPointRight className='hand-icon' /> Applications & Scope of Embedded System in various industries.  </p>
                        <p> <FaRegHandPointRight className='hand-icon' /> Introduction to Open Source platform  </p>
                        <p> <FaRegHandPointRight className='hand-icon' />  An Overview of Open Hardware </p>
                        <p> <FaRegHandPointRight className='hand-icon' /> Arduino Board Description  </p>
                        <p> <FaRegHandPointRight className='hand-icon' /> Introduction to Microcontroller  </p>
                        <p> <FaRegHandPointRight className='hand-icon' /> What is Microcontroller?  </p>
                        <p> <FaRegHandPointRight className='hand-icon' /> Difference between Microcontroller and Microprocessor  </p>
                        <p> <FaRegHandPointRight className='hand-icon' /> Microcontroller architecture and Interfacing  </p>
                        <p> <FaRegHandPointRight className='hand-icon' /> Introduction to Microcontrollers & the Arduino Platform  </p>
                        <p> <FaRegHandPointRight className='hand-icon' /> How can we use microcontroller in our circuits  </p>
                        <p> <FaRegHandPointRight className='hand-icon' /> Introduction to Programming Language  </p>
                        <p> <FaRegHandPointRight className='hand-icon' /> Programming Languages- Assembly Vs Embedded ‘C’  </p>
                        <p> <FaRegHandPointRight className='hand-icon' /> Microcontroller Programming using Embedded ‘C’  </p>
                        <p> <FaRegHandPointRight className='hand-icon' /> Introduction to software tool chain  </p>


                    </div>

                    <div>
                        <h3>Serial Communication :</h3>
                        <p> <FaRegHandPointRight className='hand-icon' /> Difference between Parallel and Serial Communication </p>
                        <p> <FaRegHandPointRight className='hand-icon' /> USART / UART Protocol </p>
                        <p> <FaRegHandPointRight className='hand-icon' /> RS232 Standard </p>
                        <p> <FaRegHandPointRight className='hand-icon' /> TTL Converter </p>
                        <p> <FaRegHandPointRight className='hand-icon' /> UART Programming </p>
                        <p> <FaRegHandPointRight className='hand-icon' /> GSM Interfacing </p>
                        <p> <FaRegHandPointRight className='hand-icon' /> Motor interfacing </p>
                        <p> <FaRegHandPointRight className='hand-icon' /> LCD Interfacing </p>

                    </div>

                    <div >
                        <h3>ADC :</h3>
                        <p> <FaRegHandPointRight className='hand-icon' /> What is ADC? </p>
                        <p> <FaRegHandPointRight className='hand-icon' /> Use of ADC </p>
                        <p> <FaRegHandPointRight className='hand-icon' /> What is Resolution? </p>
                        <p> <FaRegHandPointRight className='hand-icon' /> Uses of different ADC Registers </p>
                        <p> <FaRegHandPointRight className='hand-icon' /> Interfacing of Analog Devices with Digital World </p>
                    </div>


                    <div>
                        <h3> Software Installation: </h3>
                        <p> <FaRegHandPointRight className='hand-icon' /> Getting started with the Arduino IDE to start writing your first program </p>
                        <p> <FaRegHandPointRight className='hand-icon' /> Writing your First ‘Embedded C’ Program </p>
                        <p> <FaRegHandPointRight className='hand-icon' /> Interfacing of I/O devices </p>
                    </div>

                    <div>
                        <h3>Switch :</h3>
                        <p> <FaRegHandPointRight className='hand-icon' /> Types of switches </p>
                        <p> <FaRegHandPointRight className='hand-icon' /> Their Functions </p>
                        <p> <FaRegHandPointRight className='hand-icon' /> Interfacing of switch with Arduino </p>
                    </div>

                    <div>
                        <h3>Buzzer :</h3>
                        <p> <FaRegHandPointRight className='hand-icon' /> Types of Buzzer </p>
                        <p> <FaRegHandPointRight className='hand-icon' /> Uses of Buzzer in Real Time </p>
                        <p> <FaRegHandPointRight className='hand-icon' /> Interfacing of Buzzer with Arduino </p>
                    </div>

                    <div>
                        <h3> LEDs: </h3>
                        <p> <FaRegHandPointRight className='hand-icon' /> Types of LEDs. </p>
                        <p> <FaRegHandPointRight className='hand-icon' /> How LEDs works? </p>
                        <p> <FaRegHandPointRight className='hand-icon' /> How LEDs will glow in sequence? </p>
                        <p> <FaRegHandPointRight className='hand-icon' /> Interfacing of LED with Arduino  </p>

                    </div>

                    <div>
                        <h3>Display Devices  :</h3>
                        <p> <FaRegHandPointRight className='hand-icon' /> Types of Display Devices </p>
                        <p> <FaRegHandPointRight className='hand-icon' /> What is a LCD? </p>
                        <p> <FaRegHandPointRight className='hand-icon' /> How to use LCD? </p>
                        <p> <FaRegHandPointRight className='hand-icon' /> Interfacing of LCD with Arduino </p>
                    </div>

                    <div>
                        <h3>PWM :</h3>
                        <p> <FaRegHandPointRight className='hand-icon' /> What is PWM? </p>
                        <p> <FaRegHandPointRight className='hand-icon' /> Use of PWM </p>
                        <p> <FaRegHandPointRight className='hand-icon' /> Interfacing Fading of LED using PWM </p>
                        <p> <FaRegHandPointRight className='hand-icon' /> Motor Speed control using PWM </p>
                        <p> <FaRegHandPointRight className='hand-icon' /> Servo Motor Control </p>
                    </div>

                    <div>
                        <h3>SD Cards and Data logging :</h3>
                        <p> <FaRegHandPointRight className='hand-icon' /> Introduction of Storage Devices </p>
                        <p> <FaRegHandPointRight className='hand-icon' /> Theory of SPI </p>
                        <p> <FaRegHandPointRight className='hand-icon' /> Hardware overview </p>
                        <p> <FaRegHandPointRight className='hand-icon' /> Interfacing SD card </p>
                    </div>

                    <div>
                        <h3>Wireless Communication :</h3>
                        <p> <FaRegHandPointRight className='hand-icon' /> Introduction of wireless communication </p>
                        <p> <FaRegHandPointRight className='hand-icon' /> Overview of Wireless Devices </p>
                        <p> <FaRegHandPointRight className='hand-icon' /> Wifi using Nodemcu ESP8226 </p>
                    </div>

                    <div>
                        <h3>RFID :</h3>
                        <p> <FaRegHandPointRight className='hand-icon' /> What is RF? </p>
                        <p> <FaRegHandPointRight className='hand-icon' /> What is RFID? </p>
                        <p> <FaRegHandPointRight className='hand-icon' /> How to read RFID </p>
                        <p> <FaRegHandPointRight className='hand-icon' /> RFID Interfacing </p>

                    </div>


                </div>





            </div> */}

            <Footer />
        </>
    )
}

export default Arduino