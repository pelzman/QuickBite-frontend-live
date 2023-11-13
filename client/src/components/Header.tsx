import { useState } from "react";
import styles from "../styles/header.module.css";
import { Link } from "react-router-dom";
import ProfileImg from "../assets/profile.png";
import Logo from "../assets/LogoBite.svg";
import ShoppingCart from "../components/CartModal";
import { GiShoppingBag } from "react-icons/gi";
// import { useAppDispatch, useAppSelector } from '../store/hooks'
// import { getSingleUser } from "../slices/getSingleUserProfileSlice"
import { toast } from "react-toastify";
//import { useAppDispatch } from "../store/hooks";
import { useCart } from "react-use-cart";
// import {logout} from "../slices/authSlice"
import "./cartmodal.css";


const Header = () => {
  const { isEmpty, totalItems } = useCart();


  const [collapse, setCollapse] = useState(true);

  const toggleButton = () => setCollapse(!collapse);

  const [cartVisibility, setCartVisibility] = useState(false);

  const handleCartClose = () => {
    setCartVisibility(false);
  };
  const menus = [
    {
      id: "Id",
      Updateprofile: "Update profile",
      Order: "Order",
      Changepassword: "Change Password",
      Dashboard: "Dashboard",
    },
  ];
  const handleLogout = () => {
    try {
      localStorage.clear();
      window.location.href = "/";
      toast.success("Logout successfully");
    } catch (error) {
      throw new Error("An error occur");
    }
  };
  const [dropdown, setDropDown] = useState(true);
  const toggle = () => setDropDown(!dropdown);
  const [dropdown1, setDropDown1] = useState(false);

  const storedUserData = localStorage.getItem('user');
  const parsedUserData = storedUserData ? JSON.parse(storedUserData) : null;


  return (
    <div>
      <nav className={`${styles.navbar}  `}>
        <div className={` justify-between items-center md:space-x-20 md:flex md:items-center md:justify-between md:mx-20 ${"animate__animated animate__backInDown"}`}>
          <Link to="/">
            <div className={``}>
              <img src={Logo} alt="" className={` pr-3 p-[20px] w-[100px] h-[100px]`} />
            </div>
          </Link>
          <div
            className={`flex sm:items-center space-x-20 md:flex items-center justify-between mx-20 ${"animate__animated animate__backInDown"}`}
          >


            <div className="hidden md:flex space-x-6 justify-between"></div>
            <div className={styles.flexProfile}>
              <div className="flex-icon">
                <img src={ProfileImg} alt="" className={styles.profileImg} />
                <p style={{ fontSize: "18px", fontWeight: "normal", marginInline: "auto" }}>{`${parsedUserData.data.firstname} ${parsedUserData.data.lastname[0]}.`}</p>
              </div>
              <button>
                <i className="fa fa-angle-down" onClick={toggle}></i>
              </button>
              <ul
                className={`${dropdown ? styles.dropdown : ""} 
         absolute  top-20 w-60 h-15 p-5  bg-brown-300 rounded`}
              >
                {menus.map((menu) => (
                  <ul className={styles.menu} key={menu.id}>
                    <li className={styles.dropdown_link}>
                      {" "}
                      <Link to="" className={styles.dropdown_link}>
                        {" "}
                        {menu.Order}{" "}
                      </Link>{" "}
                    </li>

                    <li className={styles.dropdown_link}>
                      {" "}
                      <Link
                        to="/userupdatesprofile"
                        className={styles.dropdown_link}
                      >
                        {menu.Updateprofile}{" "}
                      </Link>
                    </li>

                    <li className={styles.dropdown_link}>
                      {" "}
                      <Link
                        to="/userChangePassword"
                        className={styles.dropdown_link}
                      >
                        {menu.Changepassword}
                      </Link>{" "}
                    </li>

                    <li className={styles.dropdown_link}>
                      {" "}
                      <Link to="/userlanding" className={styles.dropdown_link}>
                        {menu.Dashboard}{" "}
                      </Link>{" "}
                    </li>
                  </ul>
                ))}
              </ul>

              <Link to="/">
                <button
                  onClick={handleLogout}
                  className={`${styles.SignUp} bg-deepBlue `}
                >
                  Logout
                </button>
              </Link>
              <div className="cartf">
                {!isEmpty && (
                  <div className="item-count">
                    <span>{totalItems}</span>
                  </div>
                )}
                <GiShoppingBag
                  size={35}
                  className="the-shop"
                  onClick={() => setCartVisibility(!cartVisibility)}
                />
              </div>
            </div>

            <div className="flex items-center mt-[-100px] pl-[45px] ">

              <div className="relative  md:hidden  flex justify-center items-center ">
                {!isEmpty && (
                  <div className="item-count flex justify-start items-start absolute left-6 ">
                    <span className="">{totalItems}</span>
                  </div>
                )}
                <GiShoppingBag
                  size={35}
                  className="the-shop   mr-[40px]"
                  onClick={() => setCartVisibility(!cartVisibility)}
                />
              </div>

              <button
                id="menu-btn"
                onClick={toggleButton}
                className={`${styles.hamburger}  hamburger w-20 h-14 md:hidden focus:outline-none lg:hidden mt-[-20px]`}
              >
                {collapse ? (
                  <i className="fas fa-bars"></i>
                ) : (
                  <i className="fas fa-times"></i>
                )}
              </button>


            </div>

          </div>
        </div>



        <div

          className={`${collapse ? styles.mobileView : ""
            } relative  mt-[-10px] md:hidden bg-[#FFF] w-full pl-[20px]`}
        >
          <div className="flex justify-start items-center gap-[20px]" >


            <p className=" text-start  mt-[10px] text-deepBlue text-[18px] font-semibold not-italic" >Settings</p>

            <button>
              <i className="fa fa-angle-down mt-[-60px]" onClick={() => setDropDown1(!dropdown1)}  ></i>
            </button>


          </div>

          <div className=" w-auto  left-6 right-6  " >




            {dropdown1 && <ul
              className={` 
         absolute  top-[50px] w-60 h-15 p-5  bg-brown-300 rounded`}
            >
              {menus.map((menu) => (
                <ul className={styles.menu} key={menu.id}>
                  <li className={styles.dropdown_link}>
                    {" "}
                    <Link to="/userorder" className={styles.dropdown_link}>
                      {" "}
                      {menu.Order}{" "}
                    </Link>{" "}
                  </li>

                  <li className={styles.dropdown_link}>
                    {" "}
                    <Link
                      to="/userupdatesprofile"
                      className={styles.dropdown_link}
                    >
                      {menu.Updateprofile}{" "}
                    </Link>
                  </li>

                  <li className={styles.dropdown_link}>
                    {" "}
                    <Link
                      to="/userChangePassword"
                      className={styles.dropdown_link}
                    >
                      {menu.Changepassword}
                    </Link>{" "}
                  </li>

                  <li className={styles.dropdown_link}>
                    {" "}
                    <Link to="/userlanding" className={styles.dropdown_link}>
                      {menu.Dashboard}{" "}
                    </Link>{" "}
                  </li>
                </ul>
              ))}
            </ul>
            }
          </div>
          <Link to="/">
            <button
              onClick={handleLogout}
              className={` text-start min-w-full md:w-0 rounded-none border-none mb-[30px] mt-[10px] text-deepBlue text-[18px] font-semibold not-italic`}
            >
              Logout
            </button>{" "}
          </Link>

        </div>

      </nav >
      {cartVisibility && <ShoppingCart onClose={handleCartClose} />}
    </div >
  );
};

export default Header;
