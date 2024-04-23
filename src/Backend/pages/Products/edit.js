import React, {useState, useEffect} from "react";
import apiCategory from "../../../api/apiCategory";
import apiProduct from "../../../api/apiProduct";
import apiBrand from "../../../api/apiBrand";
import axiosInstance from "../../../api/axios";
import { imageURL } from "../../../api/config";
import { useParams, useNavigate } from "react-router-dom";


function ProductEdit() {
    const {slug} = useParams();
    const [productName, setProductName] = useState('');
    const [slugProduct, setSlugProduct] = useState('');
    const [catId, setCatId] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [isOnSale, setIsOnSale] = useState(false);
    const [salePrice, setSalePrice] = useState(0);
    const [image, setImage] = useState(null);
    const [brandId, setBrandId] = useState('');
    const [imageId, setImageId] = useState(0);
    const [productId, setProductId] = useState(0);


    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);

    const navigate = useNavigate();


    useEffect(() => {
        apiProduct.getDetailProductBySlug(slug).then((res) => {
            try{
                console.log('Product Detail: ', res);

                const productAttributes = res.data[0].attributes;
                setProductId(res.data[0].id);
                setProductName(productAttributes.product_name);
                setPrice(productAttributes.price);
                setSlugProduct(productAttributes.slug);
                setCatId(productAttributes.cat_id);
                setImage(productAttributes.image.data[0].attributes.url);
                setSalePrice(productAttributes.sale_price);
                setDescription(productAttributes.description);
                setIsOnSale(productAttributes.is_on_sale);
                setBrandId(productAttributes.brand_id);
                setImageId(productAttributes.image.data[0].id);


            } catch(error){
                console.log('Error: ',error.message);
            }
        });
    },[]);


    useEffect(() => {
        apiCategory.getAll().then((res) => {
            try{
                const categoryData = res.data.map((item) => {
                    return {
                      id: item.id,
                      name: item.attributes.category_name,
                    }
                  });                  
                  setCategories(categoryData);                  

            } catch(e) {
                console.log(e);
            }
        });
    },[]);

    useEffect(() => {
        apiBrand.getAll().then((res) => {
            try {
                const brandData = res.data.map((item) => {
                    return {
                        id: item.id,
                        name: item.attributes.brand_name,
                    }
                });
                setBrands(brandData);
            } catch(e){
                console.log(e);
            } 
        })
    },[]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const productData = {
          id: productId,
          product_name: productName,
          slug: slugProduct,
          cat_id: catId,
          price: price,
          description: description,
          is_on_sale: isOnSale,
          sale_price: salePrice,
          brand_id: brandId,
          category: catId,
          image: [imageId],
        }
        console.log("Product Data", productData);
        let file = new FormData();
        file.append('files', image);
        const fileObject = file.get("files");
        if(fileObject instanceof File){
            // console.log("File object name: ", fileObject.name);
            if(fileObject !==''){
                axiosInstance.enableUploadFile();
                const res = await axiosInstance.post('/upload', file);
                const fileId = res.data[0].id;
                productData.image[0] = fileId;
                console.log('File Id: ', productData.image[0]);
            }else {
                console.log('No file selected');
            }
        }else{
            console.log("File object is not a file");
        }
        axiosInstance.enableJson();
        const responseProduct = await apiProduct.updateProduct(productData.id, {data: productData});
        console.log("Response Product: ", responseProduct);

        navigate('/admin/products/1');

    };
        

    return (
        <div style={{width: '90%', margin: 'auto'}}>
            <h1>Edit product</h1>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-7">
                        <div className="mb-3 mt-3">
                            <label for="product_name" className="form-label">Tên sản phẩm</label>
                            <input type="text" className="form-control" id="product_name" placeholder="Nhập tên sản phẩm" name="product_name" 
                            value={productName} onChange={(e) => setProductName(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label for="slug" className="form-label">Slug</label>
                            <input type="text" className="form-control" id="slug" placeholder="Nhập slug" name="slug" 
                            value={slugProduct} onChange={(e) => setSlugProduct(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label for="catId" className="form-label">Danh mục cha</label>
                            <select type="text" className="form-control" id="catId" placeholder="Nhập danh mục cha" name="catId" 
                            value={catId} onChange={(e) => setCatId(e.target.value)}>
                                {
                                    categories.map((category, index) => {
                                        return <option key={index} value={category.id}>{category.name}</option>
                                    })
                                    
                                }
                            </select>
                        </div>
                        <div className="mb-3">
                            <label for="price" className="form-label">Đơn giá</label>
                            <input type="number" className="form-control" id="price" placeholder="Nhập đơn giá" name="price" 
                            value={price} onChange={(e) => setPrice(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label for="description" className="form-label">Mô tả sản phẩm</label>
                            <textarea className="form-control" id="description" placeholder="Nhập mô tả sản phẩm" name="description" 
                            value={description} onChange={(e) => setDescription(e.target.value)}/>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="mb-3">
                            <label for="isOnSale" className="form-label" style={{marginRight:'30px'}}>Giảm giá</label>
                            <input type="checkbox" className="form-check-input" id="isOnSale" name="isOnSale" checked={isOnSale} onChange={(e) => setIsOnSale(e.target.checked)}/>
                        </div>
                        <div className="mb-3">
                            <label for="salePrice" className="form-label">Giá khuyến mãi</label>
                            <input type="number" className="form-control" id="salePrice" placeholder="Nhập giá khuyến mãi" name="salePrice" 
                            value={salePrice} onChange={(e) => setSalePrice(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label for="image" className="form-label">Hình ảnh</label>
                            <input type="file" className="form-control" id="image" name="image" onChange={(e) => setImage(e.target.files[0])}/>
                        </div>
                        <div className="mb-3">
                            <label for="brandId" className="form-label">Thương hiệu</label>
                            <select type="text" className="form-control" id="brandId" placeholder="Nhập thương hiệu" name="brandId" 
                            value={brandId} onChange={(e) => setBrandId(e.target.value)}>
                                {
                                    brands.map((brand, index) => {
                                        return <option key={index} value={brand.id}>{brand.name}</option>
                                    })
                                    
                                }
                            </select>
                        </div>
                        <div className="mb-3">
                            <button type="submit" className="btn btn-success bg-success border-0 text-white px-5">Cập nhật</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ProductEdit;
