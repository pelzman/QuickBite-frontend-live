import { useState, useEffect } from "react"
import styles from "../styles/Navbar.module.css"
import VideoImg from "../assets/heroNewVideo.mp4"
import MobileImg from "../assets/newmobileHero1.jpg"
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom"
import Logo from "../assets/Logo.svg"

export const Navbar = () => {
  const [collapse, setCollapse] = useState(false)

  const toggleButton = () => setCollapse(!collapse)

  useEffect(() => {
    setCollapse(true)
  }, [])
  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.hero}>

        <video src={VideoImg} plays-inline="true" className={`${styles.backVideo} hidden lg:flex`} />
        <img src={MobileImg} alt="" className={`${styles.MobileImg} lg:hiddeen xl:hidden`} />
        <nav className={`${styles.navbar}  container mx-auto px-10 `} >
          <div className={`flex sm:items-center space-x-20 md:flex items-center justify-between mx-20 ${"animate__animated animate__backInDown"}`}>
            <img src={Logo} alt="" className={`${styles.logo} pr-3 `} />
            <Link to='/'><div className={`${styles.logoContainer}`}>


            </div>
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link to='/login'> <button className={`${styles.SignIn} bg-veryLightGray hover:bg-deepBlue hover:text-white`}>Login</button></Link>
              <Link to="/register"><button className={`${styles.SignUp} bg-deepBlue  hover:bg-lightBlue`}>Register</button></Link>
            </div>
            <button id="menu-btn" onClick={toggleButton} className={`${styles.hamburger}  hamburger w-20 h-14 md:hidden focus:outline-none lg:hidden`}>
              {collapse ? <i className='fas fa-bars'></i> : <i className='fas fa-times'></i>}
            </button>
          </div>

          <div className={`${collapse ? styles.mobileView : ""} mt-20 md:hidden bg-white`} >
            <div className=" sm:hidden w-full px-[50px]  space-y-3 ">
              {/* <a href="#" className="mx-auto">Vendors</a> */}
              <Link to="/login">

                <button
                  className={` min-w-full md:w-0 rounded-none border-none mb-[30px] mt-[20px] text-deepBlue text-[26px] font-semibold not-italic`}
                >
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button
                  className={` min-w-full md:w-0 rounded-none border-none mb-[30px]  text-deepBlue text-[26px] font-semibold not-italic`}
                >
                  Register
                </button>
              </Link>
            </div>
          </div>

        </nav>
        <div className={styles.content}>

          <div className={styles.selectBtnContainer}>

            <AnchorLink href="#newQUICK"><button className={`${styles.selectBtn} hover:bg-deepBlue hover:text-white `}>New Delicacies</button> </AnchorLink>
            <AnchorLink href="#pVendor"> <button className={`${styles.selectBtn1} hover:bg-deepBlue hover:text-white`}>Popular Resturants</button></AnchorLink>
            <AnchorLink href="#pFood"><button className={`${styles.selectBtn1} hover:bg-deepBlue hover:text-white`}>Popular Foods</button></AnchorLink>

          </div>

        </div>
      </div>

    </>

  )
}
