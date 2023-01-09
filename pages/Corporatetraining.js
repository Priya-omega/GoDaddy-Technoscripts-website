import Topbar from "../Component/Topbar";
import Navbar from "../Component/Navbar";
import Poster from '../Component/Poster'
import Stickybar from '../Component/Stickybar'
import Footer from '../Component/Footer'
import Head from 'next/head'


function Corporatetraining() {
    return (
        <>

<Head>
        <title> Best Embedded System course in pune | TechnoScripts | Embedded institue</title>
        <meta name="description" content="Best Embedded Training institue in pune, embedded course pune. we are one of the best training institute for embedded system training in Pune" />
      </Head>

            <Topbar />
            <Navbar />
            <Poster />
            <Stickybar />

            <div className="page-container">

                <div className='heading'>
                    <h3>Corporate Training</h3>
                </div>

                <div className='corporatetraining'>
                    <h3> Our Vision : </h3>
                    <p>TechnoScripts aims to give India&apos;s most reputed training in the field of Embedded System.
                        We are aiming to train participants and produce skilled technocrat and equips them with all
                        the tools, techniques and methods needed for the industry. Our mentors had trained about
                        6000 students and impacted around 20000 students through our various outreach initiatives.
                        These trainings are intended to produce technocrats for the next generation. The live
                        interactive sessions and real life examples will take participants inside the minds of
                        technocrats.
                    </p>
                </div>


                <div className='corporatetraining'>
                    <h3>Key Benefit : </h3>
                    <p>
                        We will be providing the students knowledge in the field of Embedded System by giving them
                        knowledge of various advance systems and introducing them to the needs of the current
                        industrial sector. Trainings will be provided by core professionals in their fields. It will help
                        student in the development of their academic major project.
                        Industry always wants students with a proper practical knowledge along with adequate
                        knowledge of the subject. You will develop a disciplined engineering approach to and sound
                        practical skills in the specification, design and implementation of Hardware & software for
                        embedded.
                    </p>
                </div>

                <div className='corporatetraining'>
                    <h3> Training Highlights : </h3>
                    <ul>
                        <li> Each student participating in the training will get a certificate </li>
                        <li> Receive an unparalleled education from Technoscripts team with personal one-on-one
                            attention </li>
                        <li> Improve job prospects and get an edge over your counterparts. </li>
                        <li> Interactive Query sessions, Live Demos, PowerPoint Presentations, animation of open
                            circuits. </li>
                        <li> Practical explanations using stimulated models.  </li>

                        <li>
                            As an emerging market, India’s technology industry needs innovation and technologists
                            with the vision to apply fields such as Computer Science, Electronics to the wide variety
                            of problems relevant to a growing economy
                        </li>

                    </ul>
                </div>

                <div className='corporatetraining'>
                    <h3> Institutions & Colleges : </h3>
                    <ul>
                        <li> Indian navy signal school Cochin </li>
                        <li> School of communication & management studies, Cochin </li>
                        <li> VIIT, Pune  </li>
                        <li> MIT, Pune </li>
                        <li> Bharti vidyapeeth, Pune </li>
                        <li> JSPM Imperial College Pune </li>
                        <li> Sriram college engg Jabalpur </li>
                        <li> Devi polytechnic Karad </li>
                        <li> Annasaheb magar college, Pune </li>
                        <li> Eklawya Polytechnic College  </li>
                        <li> Zeal College of Engg, pune </li>
                        <li> Abhinav Polytechnic College, Bhor </li>
                        <li> yanganga Polytechnic, Pune  </li>
                        <li> S.P College, pune </li>
                    </ul>
                </div>

                <div className='corporatetraining'>
                    <h3> Corporate Clients : </h3>
                    <ul>
                        <li> Capgemini </li>
                        <li> Indian navy signal school Cochin  </li>
                        <li> Zensar karadi  </li>
                        <li> Wipro </li>
                        <li> Symentec </li>
                        <li> Synechron </li>
                    </ul>
                </div>




            </div>

<Footer/>
        </>
    )
}

export default Corporatetraining