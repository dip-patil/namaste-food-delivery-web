import './Cart.css'
import cart from "../assets/cart.png";

const Cart = () => {
  const cartItems=[];

  return (
    <div>
      <div className="container-cart">
        <div className="header-cart">
          <p className="shopping">Shopping Cart</p>
          <p className="itemCount">
            You have {cartItems.length} items in your cart.
          </p>
          
          
        </div>

        
      </div>
      {cartItems.length == 0 && (
        <div className="cart">
          <img src={cart} alt="" style={{width: "24rem"}} />
        </div>
      )}
    </div>
  );
};

export default Cart;
