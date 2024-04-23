import React, { useEffect, useState } from "react";
import apiProduct from "../../../api/apiProduct";
import ProductItem from "./productItem";
import apiBrand from "../../../api/apiBrand";

function ProductList() {
    const [brands, setBrands] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState(null);

    useEffect(() => {
      apiProduct.getAll().then((res) => {
        try {
          const productData = res.data.map((product) => {
            return {
              id: product.id,
              name: product.attributes.product_name,
              price: product.attributes.price,
              slug: product.attributes.slug,
              description: product.attributes.description,
              image: product.attributes.image.data.attributes.url,
              brand: product.attributes.brand_id, 
            };
          });
          console.log('productData: ', productData);
          setProducts(productData);
          console.log("Products: ", productData);

        } catch (err) {
          console.log("Error: ", err.message);
        }
      });
    }, []);

    useEffect(() => {
        apiBrand.getAll().then(res => {
          try{
            const brandData = res.data.map((item) => {
              return {
                id: item.id,
                name: item.attributes.brand_name,
              }
            });
            setBrands(brandData);
          }catch(e){
            console.log(e);
          }
        });
      }, []);


    const handleBrandSelect = (brandId) => {
      setSelectedBrand(brandId);
      console.log(selectedBrand);
    }

    const filteredProducts = selectedBrand ? products.filter(product => product.brand === selectedBrand) : products;

   
    return (
        <div>
                   {/* Breadcrumb Start */}
        <div className="breadcrumb-wrap">
            <div className="container-fluid">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Products</a></li>
                    <li className="breadcrumb-item active">Product List</li>
                </ul>
            </div>
        </div>
       {/* Breadcrumb End */}
        
       {/* Product List Start */}
        <div className="product-view">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="product-view-top">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="product-search">
                                                <input type="email" value="Search"/>
                                                <button><i className="fa fa-search"></i></button>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="product-short">
                                                <div className="dropdown">
                                                    <div className="dropdown-toggle" data-toggle="dropdown">Products by brand</div>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                    {
                                                        brands.map((brand, index) => {
                                                            return <a style={{display:'block', paddingInlineEnd:'250px', paddingInlineStart:'5%', cursor:'pointer'}} key={index} value={brand.id} onClick={() => handleBrandSelect(brand.id)}>{brand.name}</a>
                                                        })                              
                                                    }                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                       {/*thêm*/}
                                    </div>
                                </div>
                            </div>
                            {filteredProducts.map((product, index) => ( 
                                <ProductItem key={index} product={product} />
                            ))}
                            
                        </div>
                        
                       {/* Pagination Start */}
                        <div className="col-md-12">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination justify-content-center">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="#" tabindex="-1">Previous</a>
                                    </li>
                                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">Next</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                       {/* Pagination Start */}
                    </div>           
                    
                
                   {/* Side Bar End */}
                </div>
            </div>
        </div>
       {/* Product List End */}  
        </div>
    );
}
export default ProductList;
