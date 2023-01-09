import React from 'react'
import styles from '../styles/Review.module.scss'
import { AiFillStar } from 'react-icons/ai'
import { HiUserCircle } from 'react-icons/hi'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import Head from "next/head";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Review() {

    var settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 1,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>

            <Head>
                <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            </Head>

            <div className={styles.review}>
                <Slider {...settings}>

                    <div className={styles.reviewbox}>
                        <div className={styles.reviewcontainer1}>

                            <div className={styles.box}>
                                <div className={styles.reviewmainbox}>
                                    <div className={styles.section1}>
                                        <div className={styles.img}>
                                            <HiUserCircle className={styles.usericon} />
                                        </div>


                                        <div className={styles.head}>
                                            <h5>Nikhil Kulkarni</h5>
                                            <p> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> </p>
                                        </div>

                                    </div>
                                    <div className={styles.google}>
                                        <img src="img/Google.webp" alt="Google" />
                                    </div>
                                </div>


                                <div className={styles.section2}>
                                    <p>
                                        <FaQuoteLeft className={styles.leftquote} />TechnoScripts is having good syllabus content, I have done Advance embedded course from here which helped me in industrial work. They provide good training with practical. we got good hands on training and practice on hardware which helped us very much.<FaQuoteRight className={styles.rightquote} />
                                    </p>
                                </div>



                            </div>

                            <div className={styles.box}>
                                <div className={styles.reviewmainbox}>
                                    <div className={styles.section1}>
                                        <div className={styles.img}>
                                            <HiUserCircle className={styles.usericon} />
                                        </div>


                                        <div className={styles.head}>
                                            <h5>Mayur Joshi</h5>
                                            <p> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> </p>
                                        </div>

                                    </div>
                                    <div className={styles.google}>
                                        <img src="img/Google.webp" alt="Google" />
                                    </div>
                                </div>


                                <div className={styles.section2}>

                                    <p>
                                        <FaQuoteLeft className={styles.leftquote} />
                                        I am Employed person took weekend batch for advance embedded. I am very thankful to TechnoScripts for clearing all my doubts and also they took hands on practice on kits, of every micro-controller . I also made project here.
                                        overall, Good Experience
                                        <FaQuoteRight className={styles.rightquote} />
                                    </p>


                                </div>



                            </div>

                            <div className={styles.box}>
                                <div className={styles.reviewmainbox}>
                                    <div className={styles.section1}>
                                        <div className={styles.img}>
                                            <HiUserCircle className={styles.usericon} />
                                        </div>


                                        <div className={styles.head}>
                                            <h5>Swapnil Marathe</h5>
                                            <p> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> </p>
                                        </div>

                                    </div>
                                    <div className={styles.google}>
                                        <img src="img/Google.webp" alt="Google" />
                                    </div>
                                </div>


                                <div className={styles.section2}>


                                    <p>
                                        <FaQuoteLeft className={styles.leftquote} />
                                        Technoscripts is the best institute in pune for Embedded career oriented course. They have faculties having expertise in development so I got good knowledge. They encourage students to take work on kits to gain in practical knowledge.
                                        <FaQuoteRight className={styles.rightquote} />
                                    </p>


                                </div>



                            </div>


                        </div>
                    </div>

                    <div className={styles.reviewbox}>
                        <div className={styles.reviewcontainer1}>


                            <div className={styles.box}>
                                <div className={styles.reviewmainbox}>
                                    <div className={styles.section1}>
                                        <div className={styles.img}>
                                            <HiUserCircle className={styles.usericon} />
                                        </div>


                                        <div className={styles.head}>
                                            <h5>Kasthuri Srinivasan</h5>
                                            <p> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> </p>
                                        </div>

                                    </div>
                                    <div className={styles.google}>
                                        <img src="img/Google.webp" alt="Google" />
                                    </div>
                                </div>


                                <div className={styles.section2}>


                                    <p>
                                        <FaQuoteLeft className={styles.leftquote} />
                                        TechnoScripts is having good syllabus content, I have done Advance embedded course from here which helped me in industrial work. They provide good training with practical. we got good hands on training and practice on hardware which helped us very much.
                                        <FaQuoteRight className={styles.rightquote} />
                                    </p>


                                </div>



                            </div>

                            <div className={styles.box}>
                                <div className={styles.reviewmainbox}>
                                    <div className={styles.section1}>
                                        <div className="img">
                                            <HiUserCircle className={styles.usericon} />
                                        </div>


                                        <div className={styles.head}>
                                         <h5>Sameer Shinde</h5>
                                            <p> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> </p>
                                        </div>

                                    </div>
                                    <div className={styles.google}>
                                        <img src="img/Google.webp" alt="Google" />
                                    </div>
                                </div>


                                <div className={styles.section2}>

                                    <p>
                                        <FaQuoteLeft className={styles.leftquote} />
                                        I Joined Technoscripts as I got reference from my colleague who were also doing course from institute. They referred me to join as training was really great & even they provided good placement support. We enjoyed learning latest technologies & gain knowledge.
                                        <FaQuoteRight className={styles.rightquote} />
                                    </p>


                                </div>



                            </div>

                            <div className={styles.box}>
                                <div className={styles.reviewmainbox}>
                                    <div className={styles.section1}>
                                        <div className={styles.img}>
                                            <HiUserCircle className={styles.usericon} />
                                        </div>


                                        <div className={styles.head}>
                                            <h5>Rohit Dhareppa Hadapa</h5>
                                            <p> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> </p>
                                        </div>

                                    </div>
                                    <div className={styles.google}>
                                        <img src="img/Google.webp" alt="Google" />
                                    </div>
                                </div>


                                <div className={styles.section2}>


                                    <p>
                                        <FaQuoteLeft className={styles.leftquote} />
                                        Syllabus content is very good in this institute. New Scripting is taught here like PYTHON. Good placement assistance is provided. Madam had a good knowledge of languages. Explains every problem which I have faced during the course period.
                                        <FaQuoteRight className={styles.rightquote} />
                                    </p>

                                </div>



                            </div>

                        </div>
                    </div>

                    <div className={styles.reviewbox}>
                        <div className={styles.reviewcontainer1}>

                            <div className={styles.box}>
                                <div className={styles.reviewmainbox}>
                                    <div className={styles.section1}>
                                        <div className={styles.img}>
                                            <HiUserCircle className={styles.usericon} />
                                        </div>


                                        <div className={styles.head}>
                                            <h5>Swapnil Marathe</h5>
                                            <p> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> </p>
                                        </div>

                                    </div>
                                    <div className={styles.google}>
                                        <img src="img/Google.webp" alt="Google" />
                                    </div>
                                </div>


                                <div className={styles.section2}>

                                    <p>
                                        <FaQuoteLeft className={styles.leftquote} />
                                        TechnoScripts is having good syllabus content, I have done Advance embedded course from here which helped me in industrial work. They provide good training with practical. we got good hands on training and practice on hardware which helped us very much.
                                        <FaQuoteRight className={styles.rightquote} />
                                    </p>


                                </div>



                            </div>

                            <div className={styles.box}>
                                <div className={styles.reviewmainbox}>
                                    <div className={styles.section1}>
                                        <div className={styles.img}>
                                            <HiUserCircle className={styles.usericon} />
                                        </div>


                                        <div className={styles.head}>
                                            <h5>Pranav Shrivastav</h5>
                                            <p> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> </p>
                                        </div>

                                    </div>
                                    <div className={styles.google}>
                                        <img src="img/Google.webp" alt="Google" />
                                    </div>
                                </div>


                                <div className={styles.section2}>


                                    <p>
                                        <FaQuoteLeft className={styles.leftquote} />
                                        I had joined training for RTOS & Embedded Linux. The trainer was experienced & delivered quality training. Very good institute for advance training.
                                        overall, I am having good experience with TechnoScripts.Teaching faculty is very experienced & talented.
                                        <FaQuoteRight className={styles.rightquote} />
                                    </p>
                                </div>



                            </div>

                            <div className={styles.box}>
                                <div className={styles.reviewmainbox}>
                                    <div className={styles.section1}>
                                        <div className={styles.img}>
                                            <HiUserCircle className={styles.usericon} />
                                        </div>


                                        <div className={styles.head}>
                                            <h5>Satyam Abhijeet verma</h5>
                                            <p> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> </p>
                                        </div>

                                    </div>
                                    <div className={styles.google}>
                                        <img src="img/Google.webp" alt="Google" />
                                    </div>
                                </div>


                                <div className={styles.section2}>

                                    <p>
                                        <FaQuoteLeft className={styles.leftquote}/>
                                        I have joined the course for a month of Embedded systems. The faculty staff and everything is good. They provide us with got software knowledge as well as with the practical knowledge. They train us well for any core company we want to go in. overall good experience.
                                        <FaQuoteRight className={styles.rightquote} />
                                    </p>
                                </div>



                            </div>

                        </div>
                    </div>

                    <div className={styles.reviewbox}>
                        <div className={styles.reviewcontainer1}>



                            <div className={styles.box}>
                                <div className={styles.reviewmainbox}>
                                    <div className={styles.section1}>
                                        <div className={styles.img}>
                                            <HiUserCircle className={styles.usericon}/>
                                        </div>


                                        <div className={styles.head}>
                                            <h5>Trupti Kulkarni</h5>
                                            <p> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> </p>
                                        </div>

                                    </div>
                                    <div className={styles.google}>
                                        <img src="img/Google.webp" alt="Google" />
                                    </div>
                                </div>


                                <div className={styles.section2}>


                                    <p>
                                        <FaQuoteLeft className={styles.leftquote} />
                                        I got good knowledge of microcontrollers Embedded C, My aim was to switch job so I learned protocols & Linux also. It really helped me in getting better job. I am thankful to Technoscripts & specially patel sir for providing me proper guidance.
                                        <FaQuoteRight className={styles.rightquote} />
                                    </p>

                                </div>



                            </div>


                            <div className={styles.box}>
                                <div className={styles.reviewmainbox}>
                                    <div className={styles.section1}>
                                        <div className={styles.img}>
                                            <HiUserCircle className={styles.usericon} />
                                        </div>


                                        <div className={styles.head}>
                                            <h5>Swapnil Marathe</h5>
                                            <p> <AiFillStar className={styles.staricon}/> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> </p>
                                        </div>

                                    </div>
                                    <div className={styles.google}>
                                        <img src="img/Google.webp" alt="Google" />
                                    </div>
                                </div>


                                <div className={styles.section2}>


                                    <p>
                                        <FaQuoteLeft className={styles.leftquote} />
                                        TechnoScripts is having good syllabus content, I have done Advance embedded course from here which helped me in industrial work. They provide good training with practical. we got good hands on training and practice on hardware which helped us very much.
                                        <FaQuoteRight className={styles.rightquote} />
                                    </p>
                                </div>



                            </div>

                            <div className={styles.box}>
                                <div className={styles.reviewmainbox}>
                                    <div className={styles.section1}>
                                        <div className={styles.img}>
                                            <HiUserCircle className={styles.usericon} />
                                        </div>


                                        <div className={styles.head}>
                                            <h5>Kasthuri Srinivasan</h5>
                                            <p> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> </p>
                                        </div>

                                    </div>
                                    <div className={styles.google}>
                                        <img src="img/Google.webp" alt="Google" />
                                    </div>
                                </div>


                                <div className={styles.section2}>


                                    <p>
                                        <FaQuoteLeft className={styles.leftquote} />
                                        TechnoScripts is having good syllabus content, I have done Advance embedded course from here which helped me in industrial work. They provide good training with practical. we got good hands on training and practice on hardware which helped us very much.
                                        <FaQuoteRight className={styles.rightquote} />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className={styles.reviewbox}>
                        <div className={styles.reviewcontainer1}>

                            <div className={styles.box}>
                                <div className={styles.reviewmainbox}>
                                    <div className={styles.section1}>
                                        <div className={styles.img}>
                                            <HiUserCircle className={styles.usericon} />
                                        </div>


                                        <div className={styles.head}>
                                            <h5>Vishakha Kadam</h5>
                                            <p> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> </p>
                                        </div>

                                    </div>
                                    <div className={styles.google}>
                                        <img src="img/Google.webp" alt="Google" />
                                    </div>
                                </div>


                                <div className={styles.section2}>

                                    <p>
                                        <FaQuoteLeft className={styles.leftquote} />
                                        I am really very very grateful to the Technoscripts for giving my career wings. The atmosphere at the institute is very healthy. Webinars, live projects & other extracurricular activities are also organised timely. The trainers in the institute are very talented and experienced.
                                        <FaQuoteRight className={styles.rightquote} />
                                    </p>


                                </div>



                            </div>

                            <div className={styles.box}>
                                <div className={styles.reviewmainbox}>
                                    <div className={styles.section1}>
                                        <div className={styles.img}>
                                            <HiUserCircle className={styles.usericon} />
                                        </div>


                                        <div className={styles.head}>
                                            <h5>Ankur Gupta</h5>
                                            <p> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> </p>
                                        </div>

                                    </div>
                                    <div className={styles.google}>
                                        <img src="img/Google.webp" alt="Google" />
                                    </div>
                                </div>


                                <div className={styles.section2}>


                                    <p>
                                        <FaQuoteLeft className={styles.leftquote} />
                                        Myself Ankur. I am very much obliged by the faculty members of the institute. They are really very helpful & down to earth. The whole atmosphere of the institute is very friendly & the placement guidance provided is just fantastic.
                                        Teaching faculty is very talented.
                                        <FaQuoteRight className={styles.rightquote} />
                                    </p>

                                </div>



                            </div>


                            <div className={styles.box}>
                                <div className={styles.reviewmainbox}>
                                    <div className={styles.section1}>
                                        <div className={styles.img}>
                                            <HiUserCircle className={styles.usericon} />
                                        </div>


                                        <div className={styles.head}>
                                            <h5>Harshwardhan Kshirsagar</h5>
                                            <p> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> <AiFillStar className={styles.staricon} /> </p>
                                        </div>

                                    </div>
                                    <div className={styles.google}>
                                        <img src="img/Google.webp" alt="Google" />
                                    </div>
                                </div>


                                <div className={styles.section2}>

                                    <p>
                                        <FaQuoteLeft className={styles.leftquote} />
                                        I am happy to post this review because I enjoy
                                        Learning in this institute very much. I was placed under Santosh Yadav sir, who himself is very talented in embedded systems. This gave me enough knowledge to handle any project.faculty is very experienced.
                                        <FaQuoteRight className={styles.rightquote} />
                                    </p>

                                </div>



                            </div>


                        </div>
                    </div>



                </Slider>
            </div>

        </>
    )
}

export default Review