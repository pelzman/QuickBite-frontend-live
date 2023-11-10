/* eslint-disable @typescript-eslint/no-explicit-any */
import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useCart } from "react-use-cart";
import egusiSoup from "../assets/istockphoto-1386522276-1024x1024.jpeg";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export interface Product {
  id: number;
  name?: string;
  price?: number;
  count?: number;
  image?: string;
}

export interface ShoppingCartProps {
  products?: Product[];
  onClose: () => void;
  onProductRemove?: (product: Product) => void;
  onQuantityChange?: (productId: number, newQuantity: number) => void;
}

function ShoppingCart({ onClose }: ShoppingCartProps) {
  const {
    isEmpty,
    totalUniqueItems,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
    items,
  } = useCart();

  const navigate = useNavigate();

  function toastNavigation() {
    navigate("/login");
    return toast("Please login to continue");
  }

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg w-full max-w-md the-shoppingCart">
        <div className="flex items-center justify-between mb-4 the-header">
          <h2 className="text-xl font-semibold the-text-xl">
            Quickbite Cart{" "}
            <span className="font-normal">
              ({totalItems}) Items({totalUniqueItems})
            </span>
          </h2>
          <button onClick={onClose} className="the-product-remove-btn">
            <AiFillCloseCircle size={40} />
          </button>
        </div>
        <div className="the-cart-products max-h-300 overflow-y-auto">
          {isEmpty && (
            <span className="the-empty-text">
              Your basket is currently empty
            </span>
          )}
         
          {items.map((product: any) => (
            <div key={product.id} className="the-cart-product flex items-center mb-4">
              <img
                src={egusiSoup}
                alt={product.name}
                className="w-16 h-16 object-cover mr-4 rounded"
              />
              <div className="flex-1">
                <span className="block text-gray-700 the-product-info">{product.name}</span>
                <span className="block text-gray-500 the-product-info-amt">
                  Amnt: N{product.price * product.quantity}
                </span>
              </div>
              <div className="flex items-center space-x-2 the-counter">
                <button
                  onClick={() =>
                    updateItemQuantity(product.id, product.quantity - 1)
                  }
                  disabled={product.count === 0}
                  className="the-counter-btn"
                >
                  -
                </button>
                <span className="the-product-count px-2 py-1 text-sm font-semibold">
                  {product.quantity}
                </span>
                <button
                  onClick={() =>
                    updateItemQuantity(product.id, product.quantity + 1)
                  }
                  className="the-counter-btn"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeItem(product.id)}
                className="the-remove-btn"
              >
                <RiDeleteBin6Line size={20} id="the-remove-bin" />
              </button>
            </div>
          ))}
          {!isEmpty && (
            <>
              <div className="totals flex justify-end items-center">
                <h3 className="text-lg font-semibold">Total: {cartTotal}</h3>
                <button
                  onClick={() => emptyCart()}
                  className="clear text-red-600 hover:underline"
                >
                  Clear Cart
                </button>
              </div>
              <button
                onClick={() => {
                  localStorage.getItem("user")
                    ? navigate("/checkout")
                    : toastNavigation();
                }}
                className="the-checkout-btn mt-4 px-4 py-2 bg-blue-600 text-white rounded w-full"
              >
                Proceed to checkout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;