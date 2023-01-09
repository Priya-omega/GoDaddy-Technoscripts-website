import React from 'react'
import Link from 'next/link'
import styles from '../styles/Placement.module.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Placement() {

  // useEffect(() => {
  //     Aos.init()
  //   }, []);


  var settings = {
    // autoplay:false,   
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 5,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <div className={styles.placement}>
        <Slider {...settings}>

          <div className={styles.placementcontainer}>
            <div className={styles.placementbox}>

              <div className={styles.text}>
                <p><span className={styles.purple}>695+</span>Placement Drives in 2021</p>

                <p>In <span className={styles.purple}>Core Embedded Companies</span></p>

                <div className={styles.yelbtn}>Online Courses / Offline Courses</div>



                <p> Highest Salary Package Offered - <span className={styles.yel}>27.3 LPA</span></p>

                <button className={styles.btn}> <Link href="/Batches"><a className='link'>Click here for Batch Date</a></Link> </button>

                <button className={styles.btn}> <Link href="/RegistrationForm"><a className='link'>Register Now</a></Link></button>

              </div>

              <div className={styles.logo1}>

                <div className={styles.container1}>
                  <div className={styles.box}>
                    <img src="img/logo/1.webp" alt="CompanyLogo" />
                  </div>

                  <div className={styles.box}>
                    <img src="img/logo/2.webp" alt="CompanyLogo" />
                  </div>

                  <div className={styles.box}>
                    <img src="img/logo/3.webp" alt="CompanyLogo" />
                  </div>

                  <div className={styles.box}>
                    <img src="img/logo/4.webp" alt="CompanyLogo" />
                  </div>
                </div>

                <div className={styles.container1}>
                  <div className={styles.box}>
                    <img src="img/logo/5.webp" alt="CompanyLogo" />
                  </div>

                  <div className={styles.box}>
                    <img src="img/logo/6.webp" alt="CompanyLogo" />
                  </div>

                  <div className={styles.box}>
                    <img src="img/logo/7.webp" alt="CompanyLogo" />
                  </div>

                  <div className={styles.box}>
                    <img src="img/logo/8.webp" alt="CompanyLogo" />
                  </div>
                </div>

                <div className={styles.container1}>
                  <div className={styles.box}>
                    <img src="img/logo/9.webp" alt="CompanyLogo" />
                  </div>

                  <div className={styles.box}>
                    <img src="img/logo/10.webp" alt="CompanyLogo" />
                  </div>

                  <div className={styles.box}>
                    <img src="img/logo/11.webp" alt="CompanyLogo" />
                  </div>

                  <div className={styles.box}>
                    <img src="img/logo/12.webp" alt="CompanyLogo" />
                  </div>
                </div>

                <div className={styles.container1}>
                  <div className={styles.box}>
                    <img src="img/logo/13.webp" alt="CompanyLogo" />
                  </div>

                  <div className={styles.box}>
                    <img src="img/logo/14.webp" alt="CompanyLogo" />
                  </div>

                  <div className={styles.box}>
                    <img src="img/logo/15.webp" alt="CompanyLogo" />
                  </div>
                  <div className={styles.box}>
                    <img src="img/logo/16.webp" alt="CompanyLogo" />
                  </div>
                </div>






              </div>

            </div>


          </div>

          <div className={styles.placementcontainer}>
            <div className={styles.placementbox}>
              <div className={styles.text}>
                <p><span className={styles.purple}>695+</span>Placement Drives in 2021</p>

                <p>In <span className={styles.purple}>Core Embedded Companies</span></p>

                <div className={styles.yelbtn}>Online Courses / Offline Courses</div>

                <p> Highest Salary Package Offered - <span className={styles.yel}>27.3 LPA</span></p>

                <button className={styles.btn}> <Link href="/Batches"><a className='link'>Click here for Batch Date</a></Link> </button>

                <button className={styles.btn}> <Link href="/RegistrationForm"><a className='link'>Register Now</a></Link></button>

              </div>


              <div className={styles.logo2}>

                <div className={styles.container1}>
                  <div className={styles.box}>
                    <img src="img/logo/17.webp" alt="CompanyLogo" />
                  </div>

                  <div className={styles.box}>
                    <img src="img/logo/18.webp" alt="CompanyLogo" />
                  </div>

                  <div className={styles.box}>
                    <img src="img/logo/19.webp" alt="CompanyLogo" />
                  </div>

                  <div className={styles.box}>
                    <img src="img/logo/20.webp" alt="CompanyLogo" />
                  </div>
                </div>

                <div className={styles.container1}>
                  <div className={styles.box}>
                    <img src="img/logo/21.webp" alt="CompanyLogo" />
                  </div>

                  <div className={styles.box}>
                    <img src="img/logo/22.webp" alt="CompanyLogo" />
                  </div>

                  <div className={styles.box}>
                    <img src="img/logo/23.webp" alt="CompanyLogo" />
                  </div>

                  <div className={styles.box}>
                    <img src="img/logo/24.webp" alt="CompanyLogo" />
                  </div>
                </div>

                <div className={styles.container1}>
                  <div className={styles.box}>
                    <img src="img/logo/25.webp" alt="CompanyLogo" />

                  </div>

                  <div className={styles.box}>
                    <img src="img/logo/1.webp" alt="CompanyLogo" />

                  </div>

                  <div className={styles.box}>
                    <img src="img/logo/2.webp" alt="CompanyLogo" />

                  </div>
                  <div className={styles.box}>
                    <img src="img/logo/3.webp" alt="CompanyLogo" />

                  </div>
                </div>

                <div className={styles.container1}>
                  <div className={styles.box}>
                    <img src="img/logo/4.webp" alt="CompanyLogo" />

                  </div>

                  <div className={styles.box}>
                    <img src="img/logo/5.webp" alt="CompanyLogo" />

                  </div>

                  <div className={styles.box}>
                    <img src="img/logo/6.webp" alt="CompanyLogo" />

                  </div>
                  <div className={styles.box}>
                    <img src="img/logo/7.webp" alt="CompanyLogo" />

                  </div>
                </div>

              </div>
            </div>

          </div>


          <div className={styles.placementcontainer}>
            <div className={styles.placementbox}>
              <div className={styles.text}>
                <p><span className={styles.purple}>695+</span>Placement Drives in 2021</p>

                <p>In <span className={styles.purple}>Core Embedded Companies</span></p>

                <div className={styles.yelbtn}>Online Courses / Offline Courses</div>



                <p> Highest Salary Package Offered - <span className={styles.yel}>27.3 LPA</span></p>

                <button className={styles.btn}> <Link href="/Batches"><a className='link'>Click here for Batch Date</a></Link> </button>

                <button className={styles.btn}> <Link href="/RegistrationForm"><a className='link'>Register Now</a></Link></button>

              </div>


              <div className={styles.logo2}>

                <div className={styles.container1}>
                  <div className={styles.box}>
                    <img src="img/logo/17.webp" alt="CompanyLogo" />
                  </div>

                  <div className={styles.box}>
                    <img src="img/logo/18.webp" alt="CompanyLogo" />
                  </div>

                  <div className={styles.box}>
                    <img src="img/logo/19.webp" alt="CompanyLogo" />
                  </div>

                  <div className={styles.box}>
                    <img src="img/logo/20.webp" alt="CompanyLogo" />
                  </div>
                </div>

                <div className={styles.container1}>
                  <div className={styles.box}>
                    <img src="img/logo/21.webp" alt="CompanyLogo" />
                  </div>

                  <div className={styles.box}>
                    <img src="img/logo/22.webp" alt="CompanyLogo" />
                  </div>

                  <div className={styles.box}>
                    <img src="img/logo/23.webp" alt="CompanyLogo" />
                  </div>

                  <div className={styles.box}>
                    <img src="img/logo/24.webp" alt="CompanyLogo" />
                  </div>
                </div>

                <div className={styles.container1}>
                  <div className={styles.box}>
                    <img src="img/logo/25.webp" alt="CompanyLogo" />

                  </div>

                  <div className={styles.box}>
                    <img src="img/logo/1.webp" alt="CompanyLogo" />

                  </div>

                  <div className={styles.box}>
                    <img src="img/logo/2.webp" alt="CompanyLogo" />

                  </div>
                  <div className={styles.box}>
                    <img src="img/logo/3.webp" alt="CompanyLogo" />

                  </div>
                </div>

                <div className={styles.container1}>
                  <div className={styles.box}>
                    <img src="img/logo/4.webp" alt="CompanyLogo" />

                  </div>

                  <div className={styles.box}>
                    <img src="img/logo/5.webp" alt="CompanyLogo" />

                  </div>

                  <div className={styles.box}>
                    <img src="img/logo/6.webp" alt="CompanyLogo" />

                  </div>
                  <div className={styles.box}>
                    <img src="img/logo/7.webp" alt="CompanyLogo" />

                  </div>
                </div>






              </div>



            </div>

          </div>

        </Slider>
      </div>

    </>
  )
}

export default Placement