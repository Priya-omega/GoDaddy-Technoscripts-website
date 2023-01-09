import React from 'react'
import Head from 'next/head'
import Topbar from '../Component/Topbar'
import Navbar from '../Component/Navbar'
import Poster from '../Component/Poster'
import Stickybar from '../Component/Stickybar'
import Placement from '../Component/Placement'
import Footer from '../Component/Footer'
import { RiArrowRightSFill, RiArrowDownSFill } from 'react-icons/ri'
import { FaRegHandshake, FaProjectDiagram } from 'react-icons/fa'
import { AiTwotoneCalendar, AiOutlineSetting } from 'react-icons/ai'
import { useRouter } from 'next/router';
import Link from 'next/link'



function PlacementPage() {
    const { asPath } = useRouter();


    return (
        <>

            <Head>
                <title>embedded courses in pune with placement 100% JOB - Technoscripts</title>
                <meta name="description" content="Best Embedded Course in pune with 100% placement offered by technoscripts. we are one of the best training institute for embedded system training & Placement" />
            
                {/* ---------------font----------------------------> */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Charis+SIL:wght@700&family=Roboto:wght@300&family=Source+Sans+Pro&display=swap" rel="stylesheet" />
            </Head>

            <Topbar />

            <Navbar />


<div className="home-container">
<div className="overflow">
                    <Placement />
                </div>
    
</div>




            {/* <Poster /> */}

            {/* <Stickybar /> */}

            {/* ======================================================= */}
            <div className='home-container'>
                <div className='heading'>
                    <h3>Placement</h3>
                </div>

                <p>
                    Technoscripts is the best institute when it comes to giving its student best placement as its track record shows that it has been consistent since its beginning.
                </p>

                <p>
                    100% placement support is provided to every student who enrolls for the job oriented courses. Our placement team regularly guide every student and gives 100% placement support for interviews. We welcomes the top companies for campus interview & also arrange interviews for the student at the company campus too.
                    We assist student to develop their soft skills and personality development session to achieve success in their career. We Conduct mock interviews, technical Preparation sessions  and lots of other stuff related to placement like group discussion and personal interview session are also conducted.
                </p>

                <p>
                    Embedded is one of the very rapidly & successfully growing fields in Pune & all over India with lots of big MNC Companies & Middle-level companies investing in this particular domain. The Job opportunities in both Embedded Hardware & software field are definitely going to increase in the future.
                </p>

                <p>
                    We prepare the student for technical as well as the non technical part of the interviews. The placement team ensures that the students who have completed the course they shall upload their updated resume in the specified format. Resumes will be forwarded to the number of companies based on their requirements, with whom we have a tie-up for placements.
                </p>

                <p>
                    The candidate will be informed about the interview details by the placement coordinator & candidate should prepare accordingly.
                </p>

                <p>
                    Mock interviews will be conducted periodically by a panel consisting of a trainer & HR present at the center.
                </p>

           

            </div>


            <div className='home-container'>
                <div className='heading' >
                    <h2>Our Recently Placed Candidates list:</h2>
                </div>


                <div className="batchtable">

                    <table className='table'>
                        <tr>
                            <th>Candidate Name </th>
                            <th>Designation</th>
                            <th>Company Name</th>
                        </tr>

                        <tbody>

                            <tr>
                                <td> Priyanka Mane  </td>
                                <td> Embedded Engineer  </td>
                                <td> Onword Technologies </td>
                            </tr>

                            <tr>
                                <td> Ravina kamthe  </td>
                                <td> Embedded Engineer  </td>
                                <td> HCL Technologies  </td>
                            </tr>

                            <tr>
                                <td> Revati Gaikwad  </td>
                                <td> Embedded Engineer  </td>
                                <td> Onword Technologies </td>

                            </tr>

                            <tr>
                                <td> Prasad Deshmukh  </td>
                                <td> Embedded Engineer  </td>
                                <td> KPIT  </td>
                            </tr>

                            <tr>
                                <td> Amit Shinde   </td>
                                <td> Junior Design Engineer  </td>
                                <td> Forbes marshal  </td>
                            </tr>

                            <tr>
                                <td> Priyanka Shinde   </td>
                                <td> Trainee Engineer   </td>
                                <td> KPIT  </td>
                            </tr>

                            <tr>
                                <td> Nitish chankar  </td>
                                <td> Embedded Engineer   </td>
                                <td> Onword Technologies  </td>
                            </tr>

                            <tr>
                                <td> Devendra Desale   </td>
                                <td> Embedded Engineer  </td>
                                <td> Onword Technologies  </td>
                            </tr>

                            <tr>
                                <td> Deepika Shahane  </td>
                                <td> Embedded Engineer  </td>
                                <td> Onword Technologies  </td>
                            </tr>

                            <tr>
                                <td> Rahul Adhaye  </td>
                                <td> Embedded Developer </td>
                                <td> John Deere  </td>
                            </tr>

                            <tr>
                                <td> Prashant Patil  </td>
                                <td> Trainee Engineer </td>
                                <td> E infochips  </td>
                            </tr>
                            <tr>
                                <td> Monali Suryarao   </td>
                                <td> Embedded Developer  </td>
                                <td> Samsung  </td>
                            </tr>

                            <tr>
                                <td> Aditya Chauhan  </td>
                                <td> Trainee Engineer  </td>
                                <td> KPIT Technologies  </td>
                            </tr>

                            <tr>
                                <td> Priyanka Chaturvedi </td>
                                <td> Trainee Engineer   </td>
                                <td> TCS </td>
                            </tr>

                            <tr>
                                <td> Anuya Bhosle </td>
                                <td> Trainee Engineer </td>
                                <td> Atos India  </td>
                            </tr>

                            <tr>
                                <td> Khushboo Kania  </td>
                                <td> Embedded Developer </td>
                                <td> SEDEMAC Mechatronics Pvt Ltd.  </td>
                            </tr>

                            <tr>
                                <td> Kiran Ghorpade  </td>
                                <td> Junior Design Engineer  </td>
                                <td> Innovita Technologies Pvt Ltd.  </td>
                            </tr>

                            <tr>
                                <td> Snehal Shirgave </td>
                                <td> Embedded Developer  </td>
                                <td> American Megatrends (AMI) </td>
                            </tr>

                            <tr>
                                <td> Sumit Sirmewar </td>
                                <td> Design Engineer  </td>
                                <td> IIT Mumbai </td>
                            </tr>

                            <tr>
                                <td> Kaustubh Kulkarni </td>
                                <td> Design Engineer  </td>
                                <td> IIT Mumbai </td>
                            </tr>

                            <tr>
                                <td> Vinayak Potadar </td>
                                <td> Design Engineer  </td>
                                <td> IIT Mumbai </td>
                            </tr>

                            <tr>
                                <td> Pralay Panchwate </td>
                                <td> Design Engineer  </td>
                                <td> IIT Mumbai </td>
                            </tr>

                            <tr>
                                <td> Pralay Panchwate </td>
                                <td> Design Engineer  </td>
                                <td> IIT Mumbai </td>
                            </tr>

                            <tr>
                                <td> Prakash Matkar </td>
                                <td> Design Engineer  </td>
                                <td> IIT Mumbai </td>
                            </tr>

                            <tr>
                                <td> Sachin Shinde </td>
                                <td> R&D Engineer  </td>
                                <td> BHTC  </td>
                            </tr>
                            <tr>
                                <td> gayatri pawar  </td>
                                <td> Electronics Engineer  </td>
                                <td> Minda  </td>
                            </tr>

                            <tr>
                                <td> Pradip  Gupta </td>
                                <td> Embedded Developer </td>
                                <td> Minda  </td>
                            </tr>

                            <tr>
                                <td> Hardik Mehta  </td>
                                <td> Trainee Engineer </td>
                                <td> KPIT Technologies  </td>
                            </tr>

                            <tr>
                                <td> Ravindra More  </td>
                                <td> Embedded Developer </td>
                                <td> Chetas Controls </td>
                            </tr>

                            <tr>
                                <td> Priyanka somavanshi  </td>
                                <td> Junior Design Engineer  </td>
                                <td> Persistance  </td>
                            </tr>

                            <tr>
                                <td> Vaibhav Mahajan </td>
                                <td> Embedded Develope </td>
                                <td> chetas  </td>
                            </tr>

                            <tr>
                                <td> Devesh Jain </td>
                                <td> R&D Engineer  </td>
                                <td> Bosch </td>
                            </tr>

                            <tr>
                                <td> Mohammad Afaque  </td>
                                <td> Embedded  </td>
                                <td> Whirlpool  Developer  </td>
                            </tr>

                            <tr>
                                <td> Kasthuri Rao  </td>
                                <td> Electronics Engineer  </td>
                                <td> Minda  </td>
                            </tr>

                            <tr>
                                <td> Sumit kadam  </td>
                                <td> Embedded  </td>
                                <td> Semiconductors  </td>
                            </tr>

                            <tr>
                                <td> Amrut Kumar  </td>
                                <td> Design Enginee </td>
                                <td> Adore Systems  </td>
                            </tr>

                            <tr>
                                <td> Kumar Atharv   </td>
                                <td> Trainee Engineer   </td>
                                <td> Wipro Technologies  </td>
                            </tr>
                            <tr>
                                <td> Anagha Gawas  </td>
                                <td> Embedded Developer  </td>
                                <td> Pointer India  </td>
                            </tr>
                            <tr>
                                <td> Altaf Shaikh </td>
                                <td> Trainee Engineer   </td>
                                <td> Tech Mahindra </td>
                            </tr>

                            <tr>
                                <td> Akshay Rode  </td>
                                <td> Embedded Developer  </td>
                                <td> Dhoot Transmission  </td>
                            </tr>
                            <tr>
                                <td> Abhilash Bodile </td>
                                <td> Embedded Developer  </td>
                                <td> Eram Magnaflux System Pvt ltd </td>
                            </tr>
                            <tr>
                                <td> Murtuza jani </td>
                                <td> Embedded Developer  </td>
                                <td> Eram Magnaflux System Pvt ltd </td>
                            </tr>

                            <tr>
                                <td> Srujan Kumar </td>
                                <td> Embedded Developer  </td>
                                <td> Tech Mahindra </td>
                            </tr>
                            <tr>
                                <td> Jasmine Shaikh  </td>
                                <td> Embedded Developer  </td>
                                <td> Rajdeep Infotech  </td>
                            </tr>
                            <tr>
                                <td> Abhijit Sonule  </td>
                                <td> Embedded Developer  </td>
                                <td> Signal Cororation  </td>
                            </tr>

                            <tr>
                                <td> Nilesh Jaiswal  </td>
                                <td> Junior Design Engineer  </td>
                                <td> Device Electronics Pvt Ltd  </td>
                            </tr>
                            <tr>
                                <td> Madhav Naiknavare </td>
                                <td> R&D Engineer  </td>
                                <td> Dzine Masters  </td>
                            </tr>
                            <tr>
                                <td> Anajali Nikam  </td>
                                <td> Embedded Developer  </td>
                                <td> Microsys Electronics  </td>
                            </tr>

                            <tr>
                                <td> Priti Nalawade  </td>
                                <td> R&D Engineer  </td>
                                <td> Microsys Electronics  </td>
                            </tr>
                            <tr>
                                <td> Omprakash Katare </td>
                                <td> Junior Engineer  </td>
                                <td> Signal Corporation  </td>
                            </tr>
                            <tr>
                                <td> Nandini Sultanpure  </td>
                                <td> R&D Engineer  </td>
                                <td> Singnal Corporation  </td>
                            </tr>

                            <tr>
                                <td> Chaitanya Kulkarni  </td>
                                <td> R&D Engineer  </td>
                                <td> Staysee Healthcare  </td>
                            </tr>
                            <tr>
                                <td> Akshay Bhatewara  </td>
                                <td> R&D Engineer  </td>
                                <td> Staysee Healthcare  </td>
                            </tr>
                            <tr>
                                <td> Ravishankar Nale  </td>
                                <td> Embedded Developer </td>
                                <td> Unisoul Technologies LLP  </td>
                            </tr>

                            <tr>
                                <td> Shital Chavhan  </td>
                                <td> Embedded Developer </td>
                                <td> Orno Automations  </td>
                            </tr>
                            <tr>
                                <td> Shrikant Fulzele  </td>
                                <td> Embedded Developer </td>
                                <td> Jhaveri Labs  </td>
                            </tr>
                            <tr>
                                <td> Umesh Tabake   </td>
                                <td> Embedded Engineer </td>
                                <td> Lektrotech  </td>
                            </tr>

                            <tr>
                                <td> Mahesh Khule  </td>
                                <td> Embedded Developer </td>
                                <td> Kolhe Technologies  </td>
                            </tr>
                            <tr>
                                <td> Nikita Patel  </td>
                                <td> Embedded Engineer  </td>
                                <td> senapar  </td>
                            </tr>

                            <tr>
                                <td> Varadraj Grampopadhy </td>
                                <td> R&D Engineer  </td>
                                <td> Tech Buzz  </td>
                            </tr>


                            <tr>
                                <td> Piyush Redgaonkar  </td>
                                <td> Embedded Developer  </td>
                                <td> Precisio Company  </td>
                            </tr>

                            <tr>
                                <td> Shubham Dhirdekar  </td>
                                <td> Embedded Developer  </td>
                                <td> Precisio Company  </td>
                            </tr>

                            <tr>
                                <td> Barnali Biswas  </td>
                                <td> Raspberry Pi Developer  </td>
                                <td> Akshay Electronics   </td>
                            </tr>

                            <tr>
                                <td> Bhagyashri More   </td>
                                <td> Embedded Engineer  </td>
                                <td>  Pheonix Pune  </td>
                            </tr>

                            <tr>
                                <td> Sneha Madake   </td>
                                <td> Embedded Engineer  </td>
                                <td>  Pheonix Pune  </td>
                            </tr>

                            <tr>
                                <td>  Sushma Kamte  </td>
                                <td> Embedded Engineer  </td>
                                <td>  Pheonix Pune  </td>
                            </tr>

                            <tr>
                                <td> Pooja Pawar   </td>
                                <td> Embedded Engineer  </td>
                                <td>  Pheonix Pune  </td>
                            </tr>

                            <tr>
                                <td> Reshma Deshpamde   </td>
                                <td> Embedded Engineer  </td>
                                <td>  Pheonix Pune  </td>
                            </tr>

                            <tr>
                                <td> Ankita Ashok Jadhav   </td>
                                <td> Embedded Engineer  </td>
                                <td>  Pheonix Pune  </td>
                            </tr>

                            <tr>
                                <td> Pallavi Brahmankar  </td>
                                <td> Trainee Engineer   </td>
                                <td> JSM Infotech  </td>
                            </tr>

                            <tr>
                                <td> Ramiz Mulla  </td>
                                <td> R&D Engineer   </td>
                                <td> Setam Tech Controls  </td>
                            </tr>

                            <tr>
                                <td> Rita Chavla  </td>
                                <td> Trainee Engineer   </td>
                                <td> Realty Automation  </td>
                            </tr>

                            <tr>
                                <td> Mayur swami   </td>
                                <td> Embedded Developer  </td>
                                <td> MNGL  </td>
                            </tr>

                            <tr>
                                <td> Jayshree Shinde   </td>
                                <td> Embedded Developer  </td>
                                <td> Santronics Pvt Ltd.   </td>
                            </tr>

                            <tr>
                                <td>  Sonali Patankar  </td>
                                <td> Embedded Developer  </td>
                                <td> Innovita Technologies Pvt Ltd.   </td>
                            </tr>

                            <tr>
                                <td> Abhay Sonawane   </td>
                                <td> Embedded Developer  </td>
                                <td> SCPL Ltd   </td>
                            </tr>

                            <tr>
                                <td> Padmanabh kulkarni   </td>
                                <td> Embedded Developer  </td>
                                <td> Manik Engineers   </td>
                            </tr>

                            <tr>
                                <td>  Abhijit Naik  </td>
                                <td> Embedded Developer  </td>
                                <td>  Suntele Group  </td>
                            </tr>

<tr>
    <td> Rohan Moze   </td>
    <td> R&D Engineer  </td>
    <td> Raj Electricals   </td>
</tr>

<tr>
    <td> Dhanashri   </td>
    <td> Embedded Developer   </td>
    <td> Hi Tech Transducers & Devices pvt ltd   </td>
</tr>

<tr>
    <td> Arbaz sundae   </td>
    <td> Junior Design Engineer   </td>
    <td> Tech Buzz   </td>
</tr>

<tr>
    <td> Kedar Bhagwat   </td>
    <td> Embedded Developer  </td>
    <td> Unisoul Technologies LLP   </td>
</tr>

<tr>
    <td> Ambarnath Teli   </td>
    <td> Embedded Developer  </td>
    <td> Unisoul Technologies LLP   </td>
</tr>

<tr>
    <td> Varun Sahni  </td>
    <td> Embedded Developer </td>
    <td> senapar  </td>
</tr>

<tr>
    <td> Rajat Sonawane   </td>
    <td> IOT Developer  </td>
    <td> Smarttech Labs   </td>
</tr>

<tr>
    <td> Shivaji Jagtap   </td>
    <td> Design Engineer   </td>
    <td> Access Healthcare service pvt ltd   </td>
</tr>

<tr>
    <td> Mayur Pacharne   </td>
    <td> Embedded Developer  </td>
    <td> Tech Buzz   </td>
</tr>

<tr>
    <td> Aniruddha Togar   </td>
    <td> Design Engineer  </td>
    <td> Flexotronics    </td>
</tr>

<tr>
    <td> Mahesh </td>
    <td> Embedded Developer  </td>
    <td> Akshay Electonics  </td>
</tr>

<tr>
    <td> Kanchan pawar   </td>
    <td> Embedded Developer  </td>
    <td> Manas Automotive   </td>
</tr>

<tr>
    <td> Amar Kulkarni  </td>
    <td> Embedded Developer  </td>
    <td> Ken Integrated Technologies   </td>
</tr>

<tr>
    <td> Sayali Bhende   </td>
    <td> Trainee Engineer  </td>
    <td> MT Pune   </td>
</tr>

<tr>
    <td> Puja Chandgude   </td>
    <td> Trainee Engineer  </td>
    <td> MT Pune   </td>
</tr>

<tr>
    <td> Shubhangi Khandagale   </td>
    <td> Trainee Engineer  </td>
    <td> MT Pune   </td>
</tr>

<tr>
    <td> Snehal Shivarkar  </td>
    <td> Trainee Engineer  </td>
    <td> Ken IT  </td>
</tr>

<tr>
    <td> Ved Pande </td>
    <td> Trainee Engineer  </td>
    <td> Media Oak IOT Solutions </td>
  
</tr>

<tr>
    <td> Sunil Nirmal </td>
    <td> Trainee Engineer  </td>
    <td> Ken IT  </td>
</tr>

<tr>
    <td> Sayali Gawande  </td>
    <td> Embedded Engineer  </td>
    <td> Emprotek Software Solutions  </td>
</tr>

<tr>
    <td> Aniket Baviskar  </td>
    <td> R&D Engineer  </td>
    <td> Topographix solutions </td>
</tr>

<tr>
    <td> Kaustubh Dhane  </td>
    <td> Embedded Engineer   </td>
    <td> Jet Net Telematrix  </td>
</tr>

<tr>
    <td> Santosh Bhandarakawathe  </td>
    <td> Embedded Developer  </td>
    <td> Svil Automation  </td>
</tr>

<tr>
    <td> Sneha Volvoikar  </td>
    <td> Embedded Developer  </td>
    <td> Svil Automation  </td>
</tr>

<tr>
    <td> Aditya Kaushal  </td>
    <td> Embedded Developer  </td>
    <td> Svil Automation  </td>
</tr>

<tr>
    <td> Tausif Tamboli  </td>
    <td> Embedded Engineer   </td>
    <td> JSM Infotech  </td>
</tr>

<tr>
    <td> Rohit Agarkar  </td>
    <td> R&D Engineer   </td>
    <td> Sudarshan Infotech  </td>
</tr>

<tr>
    <td> Prasad Naphade  </td>
    <td> R&D Engineer   </td>
    <td> Falcon Emotors  </td>
</tr>

<tr>
    <td> Varsha Nagmode  </td>
    <td> Embedded Engineer   </td>
    <td> Falcon Emotors </td>
</tr>

<tr>
    <td> Amol More  </td>
    <td> R&D Engineer  </td>
    <td> Topographix solutions  </td>
</tr>

<tr>
    <td> Dipali Ingale  </td>
    <td> Trainee Engineer   </td>
    <td> Renu Electronics  </td>
</tr>

<tr>
    <td> Namdev Jadhav  </td>
    <td> Trainee Engineer   </td>
    <td> Ujjvala Electronics </td>
</tr>

<tr>
    <td> Darshan Mankar  </td>
    <td> Embedded Engineer  </td>
    <td> McCrown Technologies  </td>
</tr>

<tr>
    <td> Aniket Alure  </td>
    <td> Embedded Engineer  </td>
    <td> McCrown Technologies  </td>
</tr>

<tr>
    <td> Neha Gaikwad  </td>
    <td> Embedded Engineer  </td>
    <td> McCrown Technologies  </td>
</tr>

<tr>
    <td> Premchand Chaudhari </td>
    <td> Embedded Engineer  </td>
    <td> Electropniematics & Hydraulics  </td>
</tr>

<tr>
    <td> Ankita Deshmane  </td>
    <td> R&D Engineer   </td>
    <td> Scarlet Enterprises  </td>
</tr>

<tr>
    <td> Tejashwini Jhope   </td>
    <td> Trainee Engineer  </td>
    <td> Device Electronics Pvt Ltd  </td>
</tr>

<tr>
    <td> Hibitha Raj  </td>
    <td> R&D Engineer  </td>
    <td> Intecore  </td>
</tr>

<tr>
    <td> Vinod Badiger  </td>
    <td> Trainee Engineer   </td>
    <td> Cloud Clickers  </td>
</tr>

<tr>
    <td> Prashant Pustake  </td>
    <td> Trainee Engineer  </td>
    <td> Automatic Infotech  </td>
</tr>

<tr>
    <td> Akshata Arjunwadkar  </td>
    <td> Embedded Engineer   </td>
    <td> Skanray Technologies Pvt Ltd  </td>
</tr>

<tr>
    <td> Shantesh Sonad  </td>
    <td> Embedded Engineer   </td>
    <td> Skanray Technologies Pvt Ltd  </td>
</tr>

<tr>
    <td> Amol Chalware </td>
    <td> Embedded Engineer   </td>
    <td> Topographix solutions   </td>
</tr>

<tr>
    <td> Bhushal Sawale  </td>
    <td> Embedded Engineer   </td>
    <td> Topographix solutions   </td>
</tr>

<tr>
    <td> Omkar Bakare  </td>
    <td> Embedded Engineer   </td>
    <td> Ken IT  </td>
</tr>

<tr>
    <td> Shyam Deshmukh  </td>
    <td> Trainee Engineer   </td>
    <td> Intecore  </td>
</tr>

<tr>
    <td> Sayali Gawande	  </td>
    <td> R&D Engineer   </td>
    <td> Emprotek Software Solution Pvt Ltd  </td>
</tr>

<tr>
    <td> Rahul Sharma  </td>
    <td> Trainee Engineer   </td>
    <td> San Telequip Pvt ltd  </td>
</tr>
<tr>
    <td> kishor Shinde  </td>
    <td> Embedded Developer  </td>
    <td> TCS  </td>
</tr>

<tr>
    <td> Harshal Morute  </td>
    <td> Embedded Develope  </td>
    <td> John Deere  </td>
</tr>

<tr>
    <td> Nikhil Naik  </td>
    <td> Trainee Embedded Engineer  </td>
    <td> Integrated Active Monitoring  </td>
</tr>

<tr>
    <td> Komal Dixit  </td>
    <td> Trainee Embedded Engineer  </td>
    <td> Integrated Active Monitoring  </td>
</tr>

<tr>
    <td> Ankita Petekar  </td>
    <td> Trainee Engineer  </td>
    <td> SuryaLogix Technologies  </td>
</tr>

<tr>
    <td> Shweta Jadhav  </td>
    <td> Trainee Engineer  </td>
    <td> SuryaLogix Technologies  </td>
</tr>

<tr>
    <td> Sheetal More </td>
    <td> IOT Developer  </td>
    <td> Radix Technologies  </td>

</tr>



<tr>
    <td> Manoj Girhe  </td>
    <td> Embedded Trainee  </td>
    <td>  Ankur Technologies </td>
</tr>

<tr>
    <td>  Amol Takne </td>
    <td> Embedded Trainee  </td>
    <td> SN Technologies  </td>
</tr>

<tr>
    <td> Neeraj Bharadwaj  </td>
    <td>  Embedded Trainee </td>
    <td> Ankur Technologies  </td>
</tr>

<tr>
    <td> Snehal Waghole  </td>
    <td>  Embedded Programmer </td>
    <td> Ken IT  </td>
</tr>

<tr>
    <td> Vishal Pawar  </td>
    <td> Embedded Design Engineer  </td>
    <td> SmartCard World  </td>
</tr>

<tr>
    <td> Asmita Navle  </td>
    <td>  Embedded Engineer </td>
    <td>  Radix Technologies </td>
</tr>

<tr>
    <td> Snehal Jadhav  </td>
    <td> Embedded Engineer  </td>
    <td> Radix Technologies  </td>
</tr>

<tr>
    <td> Ravindra Eshi  </td>
    <td> Design Engineer  </td>
    <td> MITRA  </td>
</tr>

<tr>
    <td> Mayur Chaudhary  </td>
    <td> Embedded Engineer  </td>
    <td> Ken IT  </td>
</tr>

<tr>
    <td> Ajay Shokal  </td>
    <td> Embedded Engineer  </td>
    <td> VT Systems  </td>
</tr>

<tr>
    <td> Aniket Shinde  </td>
    <td> Embedded Engineer  </td>
    <td> Exa Technologies  </td>
</tr>

<tr>
    <td> Sheetal Dabi  </td>
    <td> Embedded Engineer  </td>
    <td>  Eram Technologies </td>
</tr>

<tr>
    <td>  Ravina Kamthe </td>
    <td> Embedded Engineer  </td>
    <td>  Eram Technologies </td>
</tr>

<tr>
    <td>  Soumya Tamhankar </td>
    <td> Trainee Engineer  </td>
    <td> Nuedeep Technologies  </td>
</tr>

<tr>
    <td> Sneha Bidkar  </td>
    <td> Trainee Engineer  </td>
    <td> Nuedeep Technologies  </td>
</tr>

<tr>
    <td> Ujjvala Hiremath  </td>
    <td> System Engineer  </td>
    <td> Trinamix Technologies  </td>
</tr>

<tr>
    <td> Komal Rode  </td>
    <td> Trainee Engineer  </td>
    <td> DevTech M2M  </td>
</tr>

<tr>
    <td> Nikhil Folane  </td>
    <td> Trainee Engineer  </td>
    <td> DevTech M2M  </td>
</tr>

<tr>
    <td> Yogendra Joshi  </td>
    <td> Embedded Developer  </td>
    <td> Svil Automation  </td>
</tr>

<tr>
    <td> Monika Jadhav  </td>
    <td> IOT Intern  </td>
    <td> GBPS  </td>
</tr>

<tr>
    <td> Pooja Band  </td>
    <td> Embedded Developer  </td>
    <td> MT Technologies  </td>
</tr>

<tr>
    <td> Chirag Rathod  </td>
    <td> Embedded Engineer  </td>
    <td> Ankur Technologies  </td>
</tr>

<tr>
    <td>  Pranali Jawanjal </td>
    <td>  Embedded Engineer </td>
    <td>  Softtech Solutions </td>
</tr>

<tr>
    <td> Deeksha Meshram  </td>
    <td>  Embedded Engineer </td>
    <td>  Softtech Solutions </td>
</tr>

<tr>
    <td> Bhushan Sawale  </td>
    <td>  Embedded Engineer </td>
    <td> Topographix Technologies  </td>
</tr>

<tr>
    <td> Trupti Pawar  </td>
    <td> Embedded Intern  </td>
    <td> Kalyani Systems  </td>
</tr>

<tr>
    <td> Nilima Shinde  </td>
    <td> Embedded Intern  </td>
    <td> Kalyani Systems  </td>
</tr>

<tr>
    <td> Jagruti Kumar  </td>
    <td> Embedded Developer  </td>
    <td> Onword Technologies  </td>
</tr>

<tr>
    <td> Shariq Shaikh  </td>
    <td> Embedded Developer  </td>
    <td> Onword Technologies  </td>
</tr>




                        </tbody>




                    </table>

                </div>

            </div>

            <Footer />

        </>

    )
}

export default PlacementPage