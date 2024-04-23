import React, { useState } from "react";
import axiosInstance from "../../../api/axios";
import apiBrand from "../../../api/apiBrand";
import { useNavigate } from "react-router-dom";

function BrandAdd() {
    const [brandName, setBrandName] = useState('');
    const [slug, setSlug] = useState('');
    const [address, setAddress] = useState('');
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const brandData = {
            brand_name: brandName,
            slug: slug,
            address: address,
            image: [],
        }
            //    console.log('Brand Data', brandData);

        let file = new FormData();
        file.append("files", image);

        axiosInstance.enableUploadFile();
        axiosInstance.post("/upload", file)
        .then((res) => {
            const fileId = res.data[0].id;
            brandData.image.push(fileId);
            console.log('Brand Data', brandData);
            axiosInstance.enableJson();
            axiosInstance.post('/brands', {data:brandData})
            .then((res) => {
                console.log('Successful', res);
                alert('Thêm brand thành công!');
                navigate("/admin/brand");
            })
            .catch((err) => {
                console.log(err);
                alert('Có lỗi xảy ra khi thêm brand.');
            });
        })
        .catch((err) => {
            console.log(err);
            alert('Có lỗi xảy ra khi tải lên hình ảnh.');
        });
    };

    return (
        <div style={{width:'90%', margin:'auto'}}>
            <h1>Add Brand</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 mt-3">
                    <label for="brand_name" className="form-label">Tên thương hiệu</label>
                    <input type="text" className="form-control" id="brand_name" placeholder="Nhập tên thương hiệu" name="brand_name" 
                    value={brandName} onChange={(e) => setBrandName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label for="slug" className="form-label">Slug</label>
                    <input type="text" className="form-control" id="slug" placeholder="Nhập slug" name='slug'
                    value={slug} onChange={(e) => setSlug(e.target.value)}  />
                </div>
                <div className="mb-3">
                    <label for="address" className="form-label">Địa chỉ</label>
                    <input type="text" className="form-control" id="address" placeholder="Nhập địa chỉ" name='address'
                    value={address} onChange={(e) => setAddress(e.target.value)}  />
                </div>
                <div className="mb-3">
                    <label for="image" className="form-label">Hình ảnh</label>
                    <input type="file" className="form-control" id="image" name="image" onChange={(e) => setImage(e.target.files[0])}  />
                </div>
                <button type="submit" className="btn btn-primary text-white bg-primary border-0">Submit</button>
            </form>

        </div>
    );
}

export default BrandAdd;
