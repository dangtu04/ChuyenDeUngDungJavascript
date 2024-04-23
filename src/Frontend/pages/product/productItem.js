import React from "react";
import { Link } from "react-router-dom";
import { imageURL } from "../../../api/config";

function ProductItem(props) {
  return (
    <div className="col-md-3 mb-3">
      <div className="product-item" key={props.key}>
        <Link to={`/product-detail/${props.product.slug}`} key={props.key}>
          <div className="product-title">
            <a href="#">{props.product.name}</a>
            <div className="ratting">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
          </div>
          <div className="product-image">
            <a href="product-detail.html">
              <img src={imageURL + props.product.image}
                  alt={props.product.name} style={{height: '350px'}} />
            </a>
            <div className="product-action">
              <a href="#">
                <i className="fa fa-cart-plus"></i>
              </a>
              <a href="#">
                <i className="fa fa-heart"></i>
              </a>
              <a href="#">
                <i className="fa fa-search"></i>
              </a>
            </div>
          </div>
          <div className="product-price">
            <h3 key={props.key}>
              {props.product.sale_price ? (
                <>
                 <span> <del><span>$</span>{props.product.price}</del></span>
             <span style={{marginLeft:'10px'}}>$</span>{props.product.sale_price}
                </>
              ) : (
                <><span>$</span>{props.product.price}</>
              )}
            </h3>
            <a className="btn" href="">
              <i className="fa fa-shopping-cart"></i>Buy Now
            </a>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ProductItem;

