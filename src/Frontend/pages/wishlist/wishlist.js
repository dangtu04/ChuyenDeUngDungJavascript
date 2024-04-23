import product6 from '../../assets/img/product-6.jpg';
import product7 from '../../assets/img/product-7.jpg';
import product8 from '../../assets/img/product-8.jpg';
import product9 from '../../assets/img/product-9.jpg';
import product10 from '../../assets/img/product-10.jpg';


function Wishlist() {
    return (
        <div>
                    {/* Breadcrumb Start */}
        <div className="breadcrumb-wrap">
            <div className="container-fluid">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item"><a href="/products">Products</a></li>
                    <li className="breadcrumb-item active">Wishlist</li>
                </ul>
            </div>
        </div>
        {/* Breadcrumb End */}
        
        {/* Wishlist Start */}
        <div className="wishlist-page">
            <div className="container-fluid">
                <div className="wishlist-page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Add to Cart</th>
                                            <th>Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody className="align-middle">
                                        <tr>
                                            <td>
                                                <div className="img">
                                                    <a href="#"><img src={product6} alt="Image"/></a>
                                                    <p>Product Name</p>
                                                </div>
                                            </td>
                                            <td>$99</td>
                                            <td>
                                                <div className="qty">
                                                    <button className="btn-minus"><i className="fa fa-minus"></i></button>
                                                    <input type="text" value="1"/>
                                                    <button className="btn-plus"><i className="fa fa-plus"></i></button>
                                                </div>
                                            </td>
                                            <td><button className="btn-cart">Add to Cart</button></td>
                                            <td><button><i className="fa fa-trash"></i></button></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="img">
                                                    <a href="#"><img src={product7} alt="Image"/></a>
                                                    <p>Product Name</p>
                                                </div>
                                            </td>
                                            <td>$99</td>
                                            <td>
                                                <div className="qty">
                                                    <button className="btn-minus"><i className="fa fa-minus"></i></button>
                                                    <input type="text" value="1"/>
                                                    <button className="btn-plus"><i className="fa fa-plus"></i></button>
                                                </div>
                                            </td>
                                            <td><button className="btn-cart">Add to Cart</button></td>
                                            <td><button><i className="fa fa-trash"></i></button></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="img">
                                                    <a href="#"><img src={product8} alt="Image"/></a>
                                                    <p>Product Name</p>
                                                </div>
                                            </td>
                                            <td>$99</td>
                                            <td>
                                                <div className="qty">
                                                    <button className="btn-minus"><i className="fa fa-minus"></i></button>
                                                    <input type="text" value="1"/>
                                                    <button className="btn-plus"><i className="fa fa-plus"></i></button>
                                                </div>
                                            </td>
                                            <td><button className="btn-cart">Add to Cart</button></td>
                                            <td><button><i className="fa fa-trash"></i></button></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="img">
                                                    <a href="#"><img src={product9} alt="Image"/></a>
                                                    <p>Product Name</p>
                                                </div>
                                            </td>
                                            <td>$99</td>
                                            <td>
                                                <div className="qty">
                                                    <button className="btn-minus"><i className="fa fa-minus"></i></button>
                                                    <input type="text" value="1"/>
                                                    <button className="btn-plus"><i className="fa fa-plus"></i></button>
                                                </div>
                                            </td>
                                            <td><button className="btn-cart">Add to Cart</button></td>
                                            <td><button><i className="fa fa-trash"></i></button></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="img">
                                                    <a href="#"><img src={product10} alt="Image"/></a>
                                                    <p>Product Name</p>
                                                </div>
                                            </td>
                                            <td>$99</td>
                                            <td>
                                                <div className="qty">
                                                    <button className="btn-minus"><i className="fa fa-minus"></i></button>
                                                    <input type="text" value="1"/>
                                                    <button className="btn-plus"><i className="fa fa-plus"></i></button>
                                                </div>
                                            </td>
                                            <td><button className="btn-cart">Add to Cart</button></td>
                                            <td><button><i className="fa fa-trash"></i></button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Wishlist End */}
        </div>
    );
}
export default Wishlist;