import React, { useEffect, useState } from "react";
import apiProduct from "../../../api/apiProduct";
import ProductItem from "../product/productItem";

import Slider from "../../partial/slider";
import Brand from "../../partial/brand";
import Feature from "../../partial/feature";
import Category from "../../partial/category";
import Product from "../../partial/product";

function Home() {
  const [products, setProducts] = useState([]);
  const [promotionProducts, setPromotionProducts] = useState([]);

  useEffect(() => {
    apiProduct.getNewest().then((res) => {
      try {
        const newProducts = res.data.map((product) => {
          return {
            id: product.id,
            name: product.attributes.product_name,
            price: product.attributes.price,
            slug: product.attributes.slug,
            image: product.attributes.image.data.attributes.url,
          };
        });

        setProducts(newProducts);
      } catch (err) {
        console.log(err);
      }
    });
  }, []);

  // lấy 6 sản phẩm khuyến mãi
  useEffect(() => {
    apiProduct.getPromotion().then((res) => {
      try {
        const promotionProductData = res.data.map((product) => {
          return {
            id: product.id,
            name: product.attributes.product_name,
            price: product.attributes.price,
            sale_price: product.attributes.sale_price,
            slug: product.attributes.slug,
            image: product.attributes.image.data.attributes.url,
          };
        });

        setPromotionProducts(promotionProductData);
      } catch (err) {
        console.log(err);
      }
    });
  }, []);

  return (
    <div>
      <Slider />
      {/* <Brand />  */}
      <Feature />

      <Category />
      {/* <Product />  */}

      
      {/* Recent Product Start */}
      <div className="recent-product product">
        <div className="container-fluid">
          <div className="section-header">
            <h1>Promotional Products</h1>
          </div>
          <div className="row align-items-center product-slider product-slider-4">
            {promotionProducts.map((product, index) => {
              return <ProductItem key={index} product={product} />;
            })}
          </div>
        </div>
      </div>
      {/* Recent Product End */}

      {/* Featured Product Start */}
      <div className="featured-product product">
        <div className="container-fluid">
          <div className="section-header">
            <h1>New Products</h1>
          </div>
          <div className="row align-items-center product-slider product-slider-4">
            {products.map((product, index) => {
              return <ProductItem key={index} product={product} />;
            })}
          </div>
        </div>
      </div>
      {/* Featured Product End */}

    </div>
  );
}
export default Home;
