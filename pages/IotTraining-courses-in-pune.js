import { useState } from 'react'
import { FaRegHandPointRight, FaDownload } from 'react-icons/fa'
import Link from 'next/link'
import Topbar from '../Component/Topbar'
import Navbar from '../Component/Navbar'
import Poster from '../Component/Poster'
import Stickybar from '../Component/Stickybar'
import Footer from '../Component/Footer'
import BatchTable from '../Component/BatchTable'
import { RiArrowRightSFill, RiArrowDownSFill } from 'react-icons/ri'
import Head from 'next/head'


function IotTraining() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>

<Head>
        <title> Best IOT training institute in pune, Trusted IOT course Pune |TechnoScripts </title>
        <meta name="description" content="Best IOT Training in Pune by Technoscripts, Most trusted brand for IOT Course in Pune, Reputed IOT class in pune. Internet of things course, iot training with placement." />
      </Head>

    <Topbar />
<Navbar/>
    <Poster />
    <Stickybar />

    <div className="page-container">
      <div className="heading">
        <h3> Internet Of Things (IOT) Training:</h3>
      </div>

      {/* <hr /> */}
      <p>
        Technoscripts is top rated & reputed IOT training institute in Pune. We are introducing first of its kind “ Internet of Thing ” training and workshop in India. Our endeavour is to impart skills those are highly in demand and will become Industry’s new big thing in the coming years. So in this pursuit, we are offering this program which is the result of extensive research as well as high level consulting work done by our team in the past. This course gives initial practical and strategic understanding of vast world of “Internet of Things“ which has already captured the imagination of all fortune 500 companies. So future belongs to a technology like “Internet of Things” as all research houses have term “Internet of Things” as a game changer.
      </p>

      <p>
        This IOT course is meant to be an exhaustive introduction to the fascinating world of devices connected to each other through internet commonly referred to as Internet of Things. Separating the hype and reality, this course is designed to be a common practical meeting point for both manufacturing industry personnel as end users, as well as IT professionals, who are responsible for delivering innovative IT solutions.
        After completion of this training, you will have learnt key skills to implement your IoT ideas in hardware as well as software part and IOT application.
        This training is completely practical oriented & you can develop applications on your own after training.
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
              <h2> IOT Training:</h2>
            </div>

            {/* <hr /> */}
            <p>
              Technoscripts is top rated & reputed IOT training institute in Pune. We are introducing first of its kind “ Internet of Thing ” training and workshop in India. Our endeavour is to impart skills those are highly in demand and will become Industry’s new big thing in the coming years. So in this pursuit, we are offering this program which is the result of extensive research as well as high level consulting work done by our team in the past. This course gives initial practical and strategic understanding of vast world of “Internet of Things“ which has already captured the imagination of all fortune 500 companies. So future belongs to a technology like “Internet of Things” as all research houses have term “Internet of Things” as a game changer.
            </p>

            <p>
              This IOT course is meant to be an exhaustive introduction to the fascinating world of devices connected to each other through internet commonly referred to as Internet of Things. Separating the hype and reality, this course is designed to be a common practical meeting point for both manufacturing industry personnel as end users, as well as IT professionals, who are responsible for delivering innovative IT solutions.
              After completion of this training, you will have learnt key skills to implement your IoT ideas in hardware as well as software part and IOT application.
              This training is completely practical oriented & you can develop applications on your own after training.
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
                  <h3> Introduction to IoT </h3>
                  <p> <FaRegHandPointRight className='hand-icon' /> IOT basics concepts </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> What is Internet of Things? </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Why IOT is important? </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Architecture of IOT </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> How is IoT changing the world </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> & Impact of IOT </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Applications and industry verticals </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> IoT: Characteristics, Enabling Technologies, Technical Scope </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Raspberry Pi </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Raspberry Pi 3 – The “Rocket-In-A-Pocket” Board for IoT </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Board Features – History and Reception </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Hardware Description </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Functional Schematics </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Software and OS Options </p>

                </div>

                <div>
                  <h3>Linux:</h3>
                  <p> <FaRegHandPointRight className='hand-icon' /> Introduction to Linux OS </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Linux Concepts </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> OS Fundamental </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Security of linux environments </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Linux Command line/Shell </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> installing Raspbian Stretch Linux </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> linux autostart scripts </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Accessing and using manual pages </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Working with the command line and the shell </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Piping and redirection </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Linux Commands </p>

                </div>

                <div>
                  <h3> Python </h3>
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
                  <h3> Hardware Platforms: </h3>
                  <p> <FaRegHandPointRight className='hand-icon' /> Arduino/ Nodemcu Kit </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> ESP 8266 wi-fi Module </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Raspberry Pi 3 – The Board for IoT </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Board Features – History and Reception </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Hardware Description </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Functional Schematics </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Wireless modules </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Sensor interfacing </p>

                </div>




              </div>

              <div className='section2'>

                <div>
                  <h3> Practicals: </h3>
                  <p> <FaRegHandPointRight className='hand-icon' /> Porting Raspbian Wheezy Linux </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Accessing the command line (terminal and desktop) </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> GPIO Interfacing </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> GPIO’s and Hardware Bus </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Interfacing input Switches </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> ADC Interfacing </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Digital Sensor Interfacing </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Sensor Interfacing : IR sensors, Ultrasonic Sensor </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Temperature  Sensor, Humidity Sensor </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Configuring & Using Wifi over Raspberry Pi </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Bluetooth Interfacing </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Creating Web server </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Configuring a USB webcam </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Hosting Web Page on Raspberry Pi </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Controlling Motor through Web Server </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Collecting, communicating and leveraging the data from connected devices </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Use of Serial Communication in Raspberry Pi </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Wireless Communication </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Use of Bluetooth or Bluetooth Low Energy </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Message & Mail communication through Rpi </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> GSM Interfacing ans its use  </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Thinger IOT platform </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> connecting device to thinger </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Creating IOT Dashboard in thinger </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Use of buckets and endpoint in thinger </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Mobile application connectivity for IOT </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> MQTT Protocol in IOT </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Introduction to MQTT protocol </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Why we need MQTT </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> MQTT Quality of service </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Publish/ subscribe model in MQTT </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> MQTT Broker </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> HTPP vs MQTT: an insight </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> MQTT with Raspberry Pi </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Mosquito MQTT broker on Raspberry </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Testing Publish and Subscribe on broker </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Publish Subscribe on iot.eclipse </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Use of Adafruit MQTT </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Building Local Web Server Project </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> ESP 8266 development platform </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> Uploading data on cloud using WiFi ESP8266 module </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> IBM Nodered Tool </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> End to End Project implementation on Cloud Platform </p>
                  <p> <FaRegHandPointRight className='hand-icon' /> IOT Based Application Project </p>

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

export default IotTraining