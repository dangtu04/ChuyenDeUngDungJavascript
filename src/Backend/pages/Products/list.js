import React, {useState, useEffect} from "react";
import apiProduct from "../../../api/apiProduct";
import { Link, useParams } from "react-router-dom";

import { imageURL } from "../../../api/config";
import { FaEye } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


function ProductList() {

    const [products, setProducts] = useState([]);
    const [delProductItem, setDelProductItem] = useState(0);
    const [pages, setPages] = useState(1);
    const page = parseInt(useParams().page);
    const limit = 5;

    useEffect(() => {
        apiProduct.getProductPagination(page, limit).then((res) => {
            try {
                const numberOfPages = Math.ceil(res.meta.pagination.total / res.meta.pagination.pageSize);
                setPages(numberOfPages);
                const productsData = res.data.map((item) => {
                    return {
                        id: item.id,
                        product_name: item.attributes.product_name,
                        slug: item.attributes.slug,
                        cat_name: item.attributes.category.data.attributes.category_name,
                        description: item.attributes.description,
                        is_on_sale: item.attributes.is_on_sale,
                        price: item.attributes.price,
                        sale_price: item.attributes.sale_price,
                        image: item.attributes.image.data.attributes.url
                    }
                });
                setProducts(productsData);
               console.log('Product list: ', productsData);
            } catch (error) {
                console.log("Failed to fetch product list: ", error);
            }
            
        });
        
    },[page, delProductItem]);


    const delProduct = (id) => {
        apiProduct.delProductById(id).then((res) => {
            try{
                console.log(res);
                alert('Xóa sản phẩm thành công!');
                setDelProductItem(id);
    
            }catch(e){
                console.log(e);
            }
        });
    };
    

    return(
        <div className="row">
            <h1>Product list</h1>
            <button style={{marginBottom: '30px', marginLeft:'20px'}}>
                <Link className="btn btn-success bg-success text-white border-white" to="/admin/addproduct">Thêm sản phẩm</Link>
            </button>
            <table className="table table-striped table-bordered col-md-12">
            <tr><th>ID</th><th>Hình ảnh</th><th>Tên sản phẩm</th><th>Danh mục</th><th>Đơn giá</th><th>Hành động</th></tr>
            {products.map((product) => (
            <tr key={product.id}>
                <td>{product.id}</td>
                <td><img src={ imageURL + product.image} alt={product.product_name} style={{width: "100px"}}/></td>
                <td>{product.product_name}</td>
                <td>{product.cat_name}</td>
                <td>{product.price}</td>
                <td>
                <Link to={`/admin/detailproduct/${product.slug}`} style={{fontSize: '20px', marginLeft:'15px',}} className="text-success"><FaEye /></Link>
                <Link to={`/admin/editproduct/${product.slug}`} style={{fontSize: '20px', marginLeft:'15px',}} className="text-primary"><FaEdit /></Link>
                <Link onClick={(e) => delProduct(product.id)} style={{fontSize: '20px', marginLeft:'15px',}} className="text-danger"><MdDelete /></Link>
                </td> 
            </tr> 
            ))}

            </table>

            <ul className="pagination">
                <li className="page-item"><Link className="page-link"to={`/admin/products/${page-1}`}>Previous</Link></li>
                  {
                    Array.from(Array(pages).keys()).map((index) => (
                        <li key={index} className={`page-item ${index+1 === page ? "active" : ""}`}>
                          <Link className="page-link" to={`/admin/products/${index+1}`}>{index+1}</Link>
                        </li>
                      ))
                  }
                <li className="page-item"><Link className="page-link"to={`/admin/products/${page+1}`}>Next</Link></li>
            </ul>

        </div>
    );
}
export default ProductList;