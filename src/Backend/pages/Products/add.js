import React, { useState, useEffect } from "react";
import apiCategory from "../../../api/apiCategory";
import apiBrand from "../../../api/apiBrand";
import axiosInstance from "../../../api/axios";
import apiProduct from "../../../api/apiProduct";
import { useNavigate } from "react-router-dom";




function ProductAdd() {

    const [productName, setProductName] = useState('');
    const [slug, setSlug] = useState('');
    const [catId, setCatId] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [isOnSale, setIsOnSale] = useState(false);
    const [salePrice, setSalePrice] = useState(0);
    const [image, setImage] = useState(null);
    const [brandId, setBrandId] = useState('');

    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        apiCategory.getAll().then(res => {
            try{
                const categoryData = res.data.map((item) => {
                    return {
                        id: item.id,
                        name: item.attributes.category_name,
                    }
                });
                setCategories(categoryData);
            }catch(e){
                console.log(e);
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


    const handleSubmit = async (e) => {
        e.preventDefault();
        const productData = {
            product_name: productName,
            slug: slug,
            cat_id: catId,
            price: price,
            description: description,
            is_on_sale: isOnSale,
            sale_price: salePrice,
            image: [],
            brand_id: brandId,
            category: catId,
            }
            // console.log('Product Data', productData);

            let file = new FormData();
            file.append("files", image);

        
            axiosInstance.enableUploadFile();
            axiosInstance.post("/upload", file)
            .then(async(res) => {
                const fileId = res.data[0].id;
                productData.image.push(fileId);
                console.log('Product Data', productData);
                axiosInstance.enableJson();
                const responseProduct = await apiProduct.createProduct({data:productData})
                console.log('Successful', responseProduct);
                alert('Thêm sản phẩm thành công!');
                navigate("/admin/products/1");
            })
            .catch((err) => {
                console.log(err);
                alert('Có lỗi xảy ra khi thêm sản phẩm.');
            });
      };
    


    return(
        <div style={{width:'90%', margin:'auto'}}>
            <h1>Add Product</h1>
           
           <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-md-7">

                    <div className="mb-3 mt-3">
                        <label  for="product_name" className="form-label" >Tên sản phẩm</label>
                        <input type="text" className="form-control" id="product_name" placeholder="Nhập tên sản phẩm" name="product_name" 
                        value={productName} onChange={(e) => setProductName(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label  for="slug" className="form-label" >Slug</label>
                        <input type="text" className="form-control" id="slug" placeholder="Nhập slug" name='slug'
                         value={slug} onChange={(e) => setSlug(e.target.value)}  />
                    </div>

                    <div className="form-group">
                        <label  htmlFor="parent_id">Danh mục cha</label>
                        <select className="form-control" name="parent_id"
                         value={catId} onChange={(e) => setCatId(e.target.value)}>     
                         {
                            categories.map((category, index) => {
                                return <option key={index} value={category.id}>{category.name}</option>
                              })                              
                         }               
                        </select>
                    </div>

                    <div className="mb-3">
                        <label  for="parent_id" className="form-label" >Đơn giá</label>
                        <input type="text" className="form-control" id="cat_id"
                        placeholder="Nhập đơn giá" name="cat_id"
                        value={price} onChange={(e) => setPrice(e.target.value)}  />
                    </div>

                    <div className="mb-3">
                        <label  for="parent_id" className="form-label" >Mô tả sản phẩm</label>
                        <textarea className="form-control" id="cat_id" placeholder="Nhập mô tả sản phẩm" name="cat_id"
                         value={description} onChange={(e) => setDescription(e.target.value)}  />
                    </div>
                
                </div>

                <div className="col-md-5 mt-5">
                    <div className="mb-3">
                        <label  for="sale" className="form-label"  style={{marginRight: "20px"}}>
                        Giảm giá: </label>
                        <input type="checkbox" className="form-check-input" id="is_on_sale"
                        name="is_on_sale"  value={isOnSale} onChange={(e) =>setIsOnSale(e.target.value)}  />
                    </div>
                    <div className="mb-3">
                        <label  for="sale_price" className="form-label" >Giá khuyến mãi</label>
                        <input type="text" className="form-control" id="sale_price"
                        placeholder="Nhập giá khuyến mãi" name="sale_price" 
                        value={salePrice} onChange={(e) => setSalePrice(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label  for="image" className="form-label">Hình ảnh </label>
                        <input type="file" className="form-control" id="image" name="image" onChange={(e) => setImage(e.target.files[0])}  />

                    </div>
                    <div className="mb-3">
                    <label  for="image" className="form-label">Thương hiệu </label>
                        <select className="form-control" name="parent_id"
                         value={brandId} onChange={(e) => setBrandId(e.target.value)} >
                             {
                            brands.map((brand, index) => {
                                return <option key={index} value={brand.id}>{brand.name}</option>
                              })                              
                         }      
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary text-white bg-primary border-0">Submit</button>
                </div>
            </div>
           </form>
        </div>
    );  
}
export default ProductAdd;