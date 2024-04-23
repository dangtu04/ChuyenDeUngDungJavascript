import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import apiProduct from "../../../api/apiProduct";
import { imageURL } from "../../../api/config";
import { useDispatch } from "react-redux";

import { ADD } from "../../../redux/action/cartAction";

function ProductDetail() {
  const { slug } = useParams();
  const [ProductDetail, setProductDetail] = useState([]);
  const [amountItem, setAmountItem] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    apiProduct.getDetailProductBySlug(slug).then((res) => {
      try {
        const productAttributes = res.data[0].attributes;
        const product = {
          id: res.data[0].id,
          name: productAttributes.product_name,
          price: productAttributes.price,
          slug: productAttributes.slug,
          image: productAttributes.image.data.attributes.url,
          description: productAttributes.description,
        };

        setProductDetail(product);
        console.log("product: ", product);
      } catch (err) {
        console.log("Error: ", err.message);
      }
    });
  }, []);

  const handleAddToCart = (amountItem) => {
    const product = {
      ...ProductDetail,
      amount: amountItem,
    };
    dispatch(ADD(product));
  };

  const decreaseItemCart = () => {
    setAmountItem(amountItem + 1);
  };

  const increaseItemCart = () => {
    if (amountItem > 1) {
      setAmountItem(amountItem - 1);
    }
  };

  return (
    <div>
      {/* Breadcrumb Start */}
      <div className="breadcrumb-wrap">
        <div className="container-fluid">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/products">Products</a>
            </li>
            <li className="breadcrumb-item active">Product Detail</li>
          </ul>
        </div>
      </div>
      {/* Breadcrumb End */}

      {/* Product Detail Start */}
      <div className="product-detail">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8">
              <div className="product-detail-top">
                <div className="row align-items-center">
                  <div className="col-md-5">
                    <div className="product-slider-single normal-slider">
                      <img
                        src={imageURL + ProductDetail.image}
                        alt={ProductDetail.name}
                      />
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="product-content">
                      <div className="title">
                        <h2>{ProductDetail.name}</h2>
                      </div>
                      <div className="ratting">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <div className="price">
                        <h4>Price:</h4>
                        <p>${ProductDetail.price}</p>
                      </div>
                      <div className="quantity">
                        <h4>Quantity:</h4>
                        <div className="qty">
                          <button
                            className="btn-minus"
                            onClick={() => increaseItemCart()}
                          >
                            <i className="fa fa-minus"></i>
                          </button>
                          <input
                            type="text"
                            value={amountItem}
                            onChange={(e) => setAmountItem(e.target.value)}
                          />
                          <button
                            className="btn-plus"
                            onClick={() => decreaseItemCart()}
                          >
                            <i className="fa fa-plus"></i>
                          </button>
                        </div>
                      </div>
                      <div className="p-size">
                        <h4>Size:</h4>
                        <div className="btn-group btn-group-sm">
                          <button type="button" className="btn">
                            S
                          </button>
                          <button type="button" className="btn">
                            M
                          </button>
                          <button type="button" className="btn">
                            L
                          </button>
                          <button type="button" className="btn">
                            XL
                          </button>
                        </div>
                      </div>
                      <div className="p-color">
                        <h4>Color:</h4>
                        <div className="btn-group btn-group-sm">
                          <button type="button" className="btn">
                            White
                          </button>
                          <button type="button" className="btn">
                            Black
                          </button>
                          <button type="button" className="btn">
                            Blue
                          </button>
                        </div>
                      </div>
                      <div className="action">
                        <button
                          className="btn" onClick={()=> handleAddToCart(amountItem)}>
                          <i className="fa fa-shopping-cart"></i>Add to Cart
                        </button>
                      
                        <button className="btn">
                         <Link to='/checkout'> <i className="fa fa-shopping-bag"></i>Buy Now</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row product-detail-bottom">
                <div className="col-lg-12">
                  <ul className="nav nav-pills nav-justified">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-toggle="pill"
                        href="#description"
                      >
                        Description
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="pill"
                        href="#specification"
                      >
                        Specification
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-toggle="pill"
                        href="#reviews"
                      >
                        Reviews (1)
                      </a>
                    </li>
                  </ul>

                  <div className="tab-content">
                    <div id="description" className="container tab-pane active">
                      <h4>Product description</h4>
                      <p>{ProductDetail.description}</p>
                    </div>
                    <div id="specification" className="container tab-pane fade">
                      <h4>Product specification</h4>
                      <ul>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Lorem ipsum dolor sit amet</li>
                      </ul>
                    </div>
                    <div id="reviews" className="container tab-pane fade">
                      <div className="reviews-submitted">
                        <div className="reviewer">
                          Phasellus Gravida - <span>01 Jan 2020</span>
                        </div>
                        <div className="ratting">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam.
                        </p>
                      </div>
                      <div className="reviews-submit">
                        <h4>Give your Review:</h4>
                        <div className="ratting">
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                        <div className="row form">
                          <div className="col-sm-6">
                            <input type="text" placeholder="Name" />
                          </div>
                          <div className="col-sm-6">
                            <input type="email" placeholder="Email" />
                          </div>
                          <div className="col-sm-12">
                            <textarea placeholder="Review"></textarea>
                          </div>
                          <div className="col-sm-12">
                            <button>Submit</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Bar Start */}
            <div className="col-lg-4 sidebar">
              <div className="sidebar-widget category">
                <h2 className="title">Category</h2>
                <nav className="navbar bg-light">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <i className="fa fa-female"></i>Fashion & Beauty
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <i className="fa fa-child"></i>Kids & Babies Clothes
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <i className="fa fa-tshirt"></i>Men & Women Clothes
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <i className="fa fa-mobile-alt"></i>Gadgets &
                        Accessories
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <i className="fa fa-microchip"></i>Electronics &
                        Accessories
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="sidebar-widget brands">
                <h2 className="title">Our Brands</h2>
                <ul>
                  <li>
                    <a href="#">Nulla </a>
                    <span>(45)</span>
                  </li>
                  <li>
                    <a href="#">Curabitur </a>
                    <span>(34)</span>
                  </li>
                  <li>
                    <a href="#">Nunc </a>
                    <span>(67)</span>
                  </li>
                </ul>
              </div>

              <div className="sidebar-widget tag">
                <h2 className="title">Tags Cloud</h2>
                <a href="#">Lorem ipsum</a>
                <a href="#">Vivamus</a>
                <a href="#">Phasellus</a>
                <a href="#">pulvinar</a>
                <a href="#">Curabitur</a>
                <a href="#">Fusce</a>
                <a href="#">Sem quis</a>
                <a href="#">Mollis metus</a>
                <a href="#">Sit amet</a>
                <a href="#">Vel posuere</a>
                <a href="#">orci luctus</a>
                <a href="#">Nam lorem</a>
              </div>
            </div>
            {/* Side Bar End */}
          </div>
        </div>
      </div>
      {/* Product Detail End */}
    </div>
  );
}

export default ProductDetail;
