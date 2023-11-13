import { useState } from "react";
import styles from "../styles/header.module.css";
import { Link } from "react-router-dom";
// import ProfileImg from "../assets/profile.png";
import Logo from "../assets/LogoBite.svg";
import ShoppingCart, { Product } from "../components/CartModal";
import { GiShoppingBag } from "react-icons/gi";
import { useCart } from "react-use-cart";
import "./cartmodal.css";

const initialProducts: Product[] = [
  {
    id: 1,
    name: "Product 1",
    price: 10,
    count: 2,
    image: "product1.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    price: 15,
    count: 1,
    image: "product2.jpg",
  },
];

const Header = () => {
  const [collapse, setCollapse] = useState(true);
  const { isEmpty, totalItems } = useCart();

  const toggleButton = () => setCollapse(!collapse);

  const [cartVisibility, setCartVisibility] = useState(false);
  const [products, setProducts] = useState(initialProducts);

  const handleProductRemove = (product: Product) => {
    const updatedProducts = products.filter((p) => p.id !== product.id);
    setProducts(updatedProducts);
  };

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    const updatedProducts = products.map((p) =>
      p.id === productId ? { ...p, count: newQuantity } : p
    );
    setProducts(updatedProducts);
  };

  const handleCartClose = () => {
    setCartVisibility(false);
  };

  return (
    <>
      <nav className={`${styles.navbar} `}>
        <div
          className={`flex sm:items-center md:space-x-20 md:flex items-center justify-between md:mx-20 ${"animate__animated animate__backInDown"}`}
        >
          <Link to="/">
            <div className={``}>
              <img src={Logo} alt="" className={`pr-3 p-[20px] w-[100px] h-[100px]`} />
            </div>
          </Link>

          <div className="hidden md:flex space-x-6 justify-between"></div>
          <div className={styles.flexProfile}>
            <Link to="/login">
              {" "}
              <button
                className={`${styles.SignIn} bg-veryLightGray hover:bg-deepBlue hover:text-white`}
              >
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className={`${styles.SignUp} bg-deepBlue `}>
                Register
              </button>
            </Link>

            <div className="cartf ">
              {!isEmpty && (
                <div className="item-count ">
                  <span>{totalItems}</span>
                </div>
              )}
              <GiShoppingBag
                size={35}
                className="the-shop "
                onClick={() => setCartVisibility(!cartVisibility)}
              />
            </div>
          </div>

          <button
            id="menu-btn"
            onClick={toggleButton}
            className={`${styles.hamburger}  hamburger w-20 h-14 md:hidden focus:outline-none lg:hidden mt-[-40px]`}
          >
            {collapse ? (
              <i className="fas fa-bars"></i>
            ) : (
              <i className="fas fa-times"></i>
            )}
          </button>
          <div className="cartf md:hidden">
            {!isEmpty && (
              <div className="item-count flex justify-start items-start absolute left-6">
                <span>{totalItems}</span>
              </div>
            )}
            <GiShoppingBag
              size={35}
              className="the-shop mr-[30px] mt-[-20px]"
              onClick={() => setCartVisibility(!cartVisibility)}
            />
          </div>
        </div>



        <div
          className={`${collapse ? styles.mobileView : ""
            } mt-20 md:hidden bg-deepBlue`}
        >
          <div className=" sm:hidden w-auto sm:self-center left-6 right-6 drop-shadow-md ">
            {/* <a href="#" className="mx-auto">Vendors</a> */}

            {/* <Link to="/"><button onClick={handleLogout} className={`${styles.Logout} bg-deepBlue  hover:bg-lightBlue min-w-full`}>SignUp</button> </Link>       */}
          </div>
        </div>

        <div
          className={`${collapse ? styles.mobileView : " "
            } mt-[-60px] md:hidden bg-[#FFF] w-full `}
        >
          <div className=" sm:hidden w-full px-[50px]  space-y-3 ">
            {/* <a href="#" className="mx-auto">Vendors</a> */}
            <Link to="/login">

              <button
                className={`min-w-full md:w-0 rounded-none border-none mb-[30px] mt-[20px] text-deepBlue text-[26px] font-semibold not-italic`}
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
      {cartVisibility && (
        <ShoppingCart
          products={products} // Pass the products data to the cart
          onProductRemove={handleProductRemove}
          onQuantityChange={handleQuantityChange}
          onClose={handleCartClose}
        />
      )}
    </>
  );
};

export default Header;
