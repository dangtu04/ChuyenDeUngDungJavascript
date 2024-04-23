import React, {useContext} from "react";
import UserContext from "../../context/userContext";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Checkout() {
    const {user} = useContext(UserContext);
    const getDataCart = useSelector((state) => state.cart.carts);
    const totalAmount = useSelector((state) => state.cart.totalAmount);



    

    return (
    user ?     
    <div>
        <div className="breadcrumb-wrap">
            <div className="container-fluid">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item"><a href="/products">Products</a></li>
                    <li className="breadcrumb-item active">Checkout</li>
                </ul>
            </div>
        </div>   

        <div className="checkout">
            <div className="container-fluid"> 
                <div className="row">
                    <div className="col-lg-8">
                        <div className="checkout-inner">
                            <div className="billing-address">
                                <h2>Billing Address</h2>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Name</label>
                                        <input className="form-control" type="text" placeholder="Name"
                                        value={user.username}  />
                                    </div>                                 
                                    <div className="col-md-6">
                                        <label>E-mail</label>
                                        <input className="form-control" type="text" placeholder="E-mail"
                                        value={user.email}   />
                                    </div>
                                    <div className="col-md-6">
                                        <label>Mobile No</label>
                                        <input className="form-control" type="text" placeholder="Mobile No"
                                          value={user.phone}/>
                                    </div>
                                    <div className="col-md-12">
                                        <label>Address</label>
                                        <input className="form-control" type="text" placeholder="Address"
                                        value={user.address}   />
                                    </div>                                   
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="checkout-inner">
                            {/* <div className="checkout-summary">
                                <h1>Cart Total</h1>
                                <p>Product Name<span>$99</span></p>
                                <p className="sub-total">Sub Total<span>$99</span></p>
                                <p className="ship-cost">Shipping Cost<span>$1</span></p>
                                <h2>Grand Total<span>$100</span></h2>
                            </div> */}

                            <div className="checkout-summary">
                                <h1>Cart Total</h1>
                                {
                                    getDataCart.map((e) => {
                                        return(
                                            <div>
                                                <p>Tên sản phẩm: {e.name}</p>
                                                <p>Đơn giá: ${e.price}</p>
                                                <p>Số lượng: {e.quantity}</p>
                                                <p>Thành tiền: ${e.price * e.quantity}</p>
                                            </div>
                                        )
                                    })
                                }
                                <h2>Tổng tiền:${totalAmount}</h2>
                            </div>

                            <div className="checkout-payment">
                                <div className="payment-methods">
                                    <h1>Payment Methods</h1>
                                    <div className="payment-method">
                                        <div className="custom-control custom-radio">
                                            <input type="radio" className="custom-control-input" id="payment-1" name="payment"/>
                                            <label className="custom-control-label" for="payment-1">Paypal</label>
                                        </div>
                                    </div>
                                    <div className="payment-method">
                                        <div className="custom-control custom-radio">
                                            <input type="radio" className="custom-control-input" id="payment-2" name="payment"/>
                                            <label className="custom-control-label" for="payment-2">Payoneer</label>
                                        </div>
                                    </div>
                                    <div className="payment-method">
                                        <div className="custom-control custom-radio">
                                            <input type="radio" className="custom-control-input" id="payment-3" name="payment"/>
                                            <label className="custom-control-label" for="payment-3">Check Payment</label>
                                        </div>
                                    </div>
                                    <div className="payment-method">
                                        <div className="custom-control custom-radio">
                                            <input type="radio" className="custom-control-input" id="payment-4" name="payment"/>
                                            <label className="custom-control-label" for="payment-4">Direct Bank Transfer</label>
                                        </div>
                                    </div>
                                    <div className="payment-method">
                                        <div className="custom-control custom-radio">
                                            <input type="radio" className="custom-control-input" id="payment-5" name="payment"/>
                                            <label className="custom-control-label" for="payment-5">Cash on Delivery</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="checkout-btn">
                                    <button>Place Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>:
    <div className="mx-5">
        <h1>You need to login to make payment</h1>
        <div className="cart-btn">
            <button className="bg-main px-5 py-2"><Link to='/login' >Login</Link></button>
        </div>
    </div>
   
    );
}
export default Checkout;