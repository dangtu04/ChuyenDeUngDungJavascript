import { useEffect, useState } from "react";
import apiBrand from "../../../api/apiBrand";
import { Link } from "react-router-dom";
import { imageURL } from "../../../api/config";

function BrandList() {

  const [brands, setBrands] = useState([]);
  const [delBrandItem, setDelBrandItem] = useState(false);

  useEffect(() => {
      apiBrand.getAll().then(res => {
          try{
              const brandData = res.data.map((item) => {
                  return {
                      id: item.id,
                      name: item.attributes.brand_name,
                      slug: item.attributes.slug,
                      address: item.attributes.address,
                      image: item.attributes.image.data.attributes.url
                  }
              });
              setBrands(brandData);
          }catch(e){
              console.log(e);
          }
      });
  }, [delBrandItem]);

  const delBrand = async (id) => {
      apiBrand.delBrandById(id).then(res => {
          try{
              alert("Xóa thành công");
              setDelBrandItem(id);
          }catch(e){
              console.log(e);
          }
      });
  }

  return (
    <div>
      <h1>Danh sách thương hiệu</h1>
      <button style={{marginBottom: '30px'}}>
        <Link className="btn btn-success bg-success text-white border-white" to="/admin/addbrand">Thêm thương hiệu</Link>
      </button>
      <table className="table table-striped table-bordered border-4">
          <tr><th>ID</th><th>Thương hiệu</th><th>Hình ảnh</th><th>Slug</th><th>Địa chỉ</th><th>Hành động</th></tr>

          {
            brands.map((item, index) => {
              return (
              <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td><img src={`${imageURL}${item.image}`} alt={item.name} style={{width: "100px"}}/></td>             
              <td>{item.slug}</td>
              <td>{item.address}</td>
              <td>
                <button><Link className="btn btn-primary bg-primary text-white border-white" 
                to={`/admin/editbrand/${item.id}`}>Sửa</ Link></button>
                <button><Link className="btn btn-info bg-danger text-white border-white"
                onClick={() => delBrand(item.id)} >Xóa</ Link></button>
              </td>
              </tr>
              );
            })     }
      </table>
    </div>
  );
}

export default BrandList;
