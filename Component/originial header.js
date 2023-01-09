      {/* <Header /> */}
      <div className="navbar">

        {/* <!-- Navbar logo --> */}
        <div className='logo'>
          <img src="img/logopng.webp" alt="" />
        </div>


        {/* <!-- responsive navbar toggle button --> */}
        <input type="checkbox" id="nav-check" />
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>


        {/* <!-- Navbar items --> */}
        <div className="nav-links">
          <Link href="/"><a className={asPath === '/' ? "Active NavLink" : "NavLink"}>Home</a></Link>


          {/* <!-- Dropdown menu --> */}
          <div className="dropdown">

            <Link href="/Coursepage"><a className={asPath === '/Coursepage' ? "Active NavLink" : "NavLink dropBtn"}> Courses<RiArrowDownSFill className='down-arrow' /></a></Link>


            <div className="drop-content">
              <Link href="/AdvanceCareer" ><a className='Link'> Advance Career Track </a></Link>

              <Link href="/DiplomaEmbedded"><a className='Link'>Diploma in Embedded System </a></Link>

              <Link href="/IotTraining"><a className='Link'> IOT Training</a></Link>

              <Link href="/AdvanceIot"><a className='Link'> Advance IOT </a></Link>

              <Link href="/AutomotiveEmbedded"><a className='Link'> Automotive Embedded </a></Link>


              {/* <!-- Creating sub menu Dropdown --> */}

              <div className="dropdown2">
                <Link href="/Coursepage" ><a className='Link dropBtn2'> Modular Courses<RiArrowRightSFill className='right-arrow' /></a></Link>


                <div className="drop-content2">

                  <Link href="/EmbeddedC-training"><a className='Link'> Embedded C Training </a></Link>

                  <Link href="/Micro8051"><a className='Link'> 8051 Training </a></Link>

                  <Link href="/Raspberry"><a className='Link'> Raspberry pi Training </a></Link>

                  <Link href="/Arduino"><a className='Link'> Arduino Training </a></Link>

                  <Link href="/PIC"><a className='Link'> PIC Training </a></Link>

                  <Link href="/AVR"><a className='Link'> AVR Training </a></Link>

                  <Link href="/Arm7"><a className='Link'> ARM 7 Training </a></Link>

                  <Link href="/ArmCortex"><a className='Link'> ARM Cortex Training </a></Link>

                  <Link href="/Linux"><a className='Link'> Embedded Linux Training </a></Link>

                </div>
              </div>
            </div>
          </div>


          <Link href="/OnlineTraining"><a className={asPath === '/OnlineTraining' ? "Active NavLink" : "NavLink"}> Online Training </a></Link>

          <Link href="/PlacementPage"><a className={asPath === '/PlacementPage' ? "Active NavLink" : "NavLink"}> Placement </a></Link>

          <Link href="/Contact"><a className={asPath === '/Contact' ? "Active NavLink" : "NavLink"}> Contact Us </a></Link>

          {/* <button className="loginBtn">Login</button> */}

          {/* searchbar */}

        </div>



        {/* Search Menu */}
        <div className='search'>
          <input type="search" placeholder='Search Here...' />
          <button className='search-btn'>
            Search
          </button>


        </div>

      </div>