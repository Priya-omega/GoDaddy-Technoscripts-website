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




function AdvanceIot() {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <Head>
        <title>  Pune | Best IOT Course | IOT classes Pune Technoscripts </title>
        <meta name="description" content="Best iot Training in pune, Advance IOT course in pune. we are most trusted IOT Training institute for IOT courses IOT classes with placement." />
      </Head>

      <Topbar />

      <Navbar />

      <Poster />
      <Stickybar />

      <div className="page-container">
        <div className="heading">
          <h3> Advance IOT Training</h3>
        </div>

        <p>
          The Internet of Things (IOT) is the next wave, world is going to witness. Today, we live in an era of connected devices (mobile phones, computers etc.), the future is of connected things (Things mean: home appliances, vehicles, lamp-posts, personal accessories, your pets, industrial equipment’s and everything which you use in day to-day life).
        </p>

        <p>
          The Internet of Things (IoT) is expanding at a rapid rate, and it is becoming increasingly important for professionals to understand what it is, how it works, and how to harness its power to improve business. This introductory course will enable learners to leverage their business and/or technical knowledge across IoT-related functions in the workplace.
        </p>

        <p>
          In the course, we will examine the concept of IoT. We will look at the ‘things’ that make up the Internet of Things, including how those components are connected together, how they communicate, and how they value add to the data generated. We will also examine cybersecurity and privacy issues, and highlight how IoT can optimize processes and improve efficiencies in your business
        </p>

        <p>
          Internet of Things (IoT) is evolving and changing the world rapidly. It is making the world small and connected to each other. Nowadays IoT is the backbone of every industry such as smart homes, smart cities, smart cars and the automation industry, today each and every industry is dependent upon IoT. The Internet of Things is all about connected life.
        </p>

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

            <div
              className={toggleState === 1 ? "content  active-content" : "content"}
            >
              <div className="heading">
                <h2>Description</h2>
              </div>

              {/* <hr /> */}


              <p>
                Today we hear a lot about this new era of “smart” and “connected” everywhere—smart homes, smart cars, smart gadgets, and even smart enterprises. No area of our work or personal lives seems to be untouched by these advancements in creating the ultimate connected experience.
              </p>

              <p>
                This change has presented the modern-day consumer with an unprecedented amount of convenience and comfort through smarter living. This has further raised consumer expectations, and technology innovators are constantly striving to meet these ever increasing demands.
              </p>

            </div>

            <div
              className={toggleState === 2 ? "content  active-content" : "content"}
            >
              <div className="heading">
                <h2>Curriculum</h2>
              </div>
              {/* <hr /> */}
              <div className="embedded-c">
                <div className='section1'>

                  <div>
                    <h3> Syllabus : </h3>
                    <p> <FaRegHandPointRight className='hand-icon' /> What is IoT and Working with IoT </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> How does IoT work? </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Building Blocks of IoT </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> What are the words I need to know? </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Why IOT (Opportunities & Application of IOT)? </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Challenges in IoT and Understand IoT design solution </p>

                  </div>

                  <div>
                    <h3> Linux : </h3>
                    <p> <FaRegHandPointRight className='hand-icon' /> Linux Concepts </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Linux Architecture </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Introduction to components of I/O architecture </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Objectives of Linux I/O model </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Virtual file system </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> File system services </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Accessing the command line (terminal and desktop) </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Accessing and using manual pages </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Working with the command line and the shell </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Piping and redirection </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Linux OS </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Different Linux commands like cp , mv mount </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Introduction to VI editor. VI editor settings </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Creating script </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Shell variables conditions (if else ) </p>
                    <p> <FaRegHandPointRight className='hand-icon' />Shell control structures  </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Shell programs to read command line parameters </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Linux lab for shell programming </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Autostart Scripts </p>
                  </div>

                  <div>
                    <h3> Python : </h3>
                    <p> <FaRegHandPointRight className='hand-icon' /> Python Basics and programming </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> using python on Raspberry Pi </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Data types in python </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> using variables in python </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Casting, string operatins </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> use of Python Tuples </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> use of operators in python </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> python looping in linux </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> functions used in python </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Classes and objects </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> File handling in python </p>
                  </div>

                  <div>
                    <h3> Arduino : </h3>
                    <p> <FaRegHandPointRight className='hand-icon' /> Getting Started with Arduino</p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Arduino Code Language (C Refresher) </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Inputs and App Control </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Arduino Simulation Environment </p>

                  </div>

                  <div>
                    <h3> Sensors, Signals & Electronics : </h3>
                    <p> <FaRegHandPointRight className='hand-icon' /> Introduction to Open Source platform </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> An Overview of Open Hardware </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Arduino Board Description </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Getting started with the Arduino IDE writing your first program on Arduino </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Analog Sensor </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Basic electronics refresher </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Digital Sensors </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Digital Signals </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Sensors overview </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Difference between Parallel and Serial Communication </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Communication Protocols </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> USART / UART Protocol </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> RS232 Standard </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> TTL Converter </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> UART Programming </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> GSM Interfacing </p>
                  </div>

                </div>

                <div className='section2'>

                  <div>
                    <h3> Basic Networking with NODEMCU </h3>
                    <p> <FaRegHandPointRight className='hand-icon' /> Intro to NODEMCU</p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Basic Wireless Networking </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Sensor Log </p>
                  </div>

                  <div>
                    <h3> Advanced Micro Controller Concepts </h3>
                    <p> <FaRegHandPointRight className='hand-icon' /> LED blink using MQTT </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Messaging and MQTT </p>
                  </div>

                  <div>
                    <h3> Raspberry Pi : </h3>
                    <p> <FaRegHandPointRight className='hand-icon' /> Introducing the Raspberry Pi </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Course Objectives and Course Map </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Booting the Raspberry Pi 3 </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> OS Options Overview </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Camera Interfacing : Application Imaging, Video Recording, </p>

                  </div>

                  <div>
                    <h3> Interfacing Hardware with the Raspberry Pi </h3>
                    <p> <FaRegHandPointRight className='hand-icon' /> Raspberry Pi Remote Access </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Bash Command-line </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Raspberry Pi LED Blink Example </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Linux Overview and Device Drivers </p>

                  </div>

                  <div>
                    <h3> Google firebase </h3>
                    <p> <FaRegHandPointRight className='hand-icon' /> Connecting device to Google Firebase </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Creating real time database in google firebase </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Creating Web server using Firebase </p>
                    <p> <FaRegHandPointRight className='hand-icon' />  HTTP and MQTT On firebase </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Appliance control through google assistant </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> use of Amazon Alexa on Raspberry Pi </p>
                  </div>

                  <div>
                    <h3> Machine-to-Machine Communication </h3>
                    <p> <FaRegHandPointRight className='hand-icon' /> Sensors Integration </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Node-red: M2M and Gateway </p>
                  </div>

                  <div>
                    <h3> Multimedia Concepts </h3>
                    <p> <FaRegHandPointRight className='hand-icon' /> Raspberry Pi Media Server </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Running Services </p>
                  </div>

                  <div>
                    <h3> Speech Processing Concepts </h3>
                    <p> <FaRegHandPointRight className='hand-icon' /> Voice Control Application </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Voice Control System Architecture </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Amazon Alexa tool & Google voice assistant: </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Raspberry Security Cam </p>

                  </div>

                  <div>
                    <h3> Amazon AWS IOT  </h3>
                    <p> <FaRegHandPointRight className='hand-icon' /> We move to IaaS with Amazon’s cloud offering – AWS. </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> This means creating your own server instance in the cloud, choosing and configuring its OS, and running your service. </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> AWS IoT core services, AWS Message Brokers </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> AWS Elastic Compute Cloud ec2 instance, Server deployment in AWS </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> Case Study on Home Automation
                      In this first of our case studies, we examine what an ideal home automation system will look like and how it will be organized. We’ll talk about the nodes, the gateway and the cloud services that such a system would need. </p>
                  </div>

                  <div>
                    <h3> Connectivity beyond Wi-Fi  </h3>
                    <p> <FaRegHandPointRight className='hand-icon' /> Case Study on Smart City
                      IoT technology is relevant for more than just consumer goods. This video looks at how we might go about building smart city solutions. </p>
                    <p> <FaRegHandPointRight className='hand-icon' /> BLE
                      Connectivity at ultra-short ranges can be just as important as those at longer distance when it comes to certain IoT applications. We look at bluetooth and other radio frequency alternatives. </p>

                  </div>
                </div>


              </div>
            </div>

            <div
              className={toggleState === 3 ? "content  active-content" : "content"}
            >
              <div className="heading">
                <h2>Batch Scheduled</h2>
              </div>

              <BatchTable />

            </div>

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
                <p> <a href="sylab/IOT-Syllabus.pdf" attributes-list download className="dlink">Download Syllabus Pdf</a></p>

              </div>


            </div>

          </div>

        </div>
      </div>

      <Footer />

    </>

  )
}

export default AdvanceIot