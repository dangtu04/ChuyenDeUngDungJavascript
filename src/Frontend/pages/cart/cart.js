// import product1 from "../../assets/img/product-1.jpg";
import { useSelector} from "react-redux";
import { useDispatch } from "react-redux";
// import cartReducer from "../../../redux/reducers/cartReducer";
import CartItem from "./cartItem";
import { CLEAR, TOTAL } from "../../../redux/action/cartAction";
import { Link } from "react-router-dom";


function Cart() {

    const getDataCart = useSelector(state => state.cart.carts);

    const dispatch = useDispatch();
    dispatch(TOTAL());

    const clearCart = () => {
        dispatch(CLEAR());
    }
    const totalAmount = useSelector((state) => state.cart.totalAmount);


    console.log('getDataCart', getDataCart);


  return (
    <div>
          {/* Breadcrumb Start */}
          <div className="breadcrumb-wrap">
             <div className="container-fluid">
                 <ul className="breadcrumb">
                     <li className="breadcrumb-item"><a href="/">Home</a></li>
                     <li className="breadcrumb-item"><a href="/products">Products</a></li>
                     <li className="breadcrumb-item active">Cart</li>
                 </ul>
             </div>
         </div>
      {/* Breadcrumb End */}

      {/* Cart Start */}
      <div className="cart-page">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="cart-page-inner">
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th>Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody className="align-middle">
                                        {
                                            getDataCart.map((e) => {
                                                return (
                                                    <CartItem item={e}/>
                                                )
                                            })
                                        }              
                                    </tbody>
                                    <tr>
                                        <th>Total Amount: </th> <th>${totalAmount}</th>
                                    </tr>
                                </table>                               
                            </div>
                        </div>
                    </div>                 
                    <div className="col-lg-4">
                    <div className="cart-page-inner">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="coupon">
                                    <input type="text" placeholder="Coupon Code"/>
                                    <button>Apply Code</button>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="cart-summary">
                                    <div className="cart-content">
                                        <h1>Cart Summary</h1>
                                        <p>Sub Total<span>$99</span></p>
                                        <p>Shipping Cost<span>$1</span></p>
                                        <h2>Grand Total<span>$100</span></h2>
                                    </div>
                                    <div className="cart-btn">
                                        <button onClick={() => clearCart()}>Clear Cart</button>                                        
                                        <button><Link to='/checkout' style={{color:'#fff'}}>Checkout</Link></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      {/* Cart End */}
    </div>
  );
}
export default Cart;




