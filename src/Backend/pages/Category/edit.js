import React, {useState, useEffect} from "react";
import apiCategory from "../../../api/apiCategory";
import { useParams, useNavigate } from "react-router-dom";


function CategoryEdit() {

    const {id} = useParams();
    const [catName, setCatName] = useState("");
    const [parentID, setParentID] = useState("");
    const [slug, setSlug] = useState("");
    const [status, setStatus] = useState("0");
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        apiCategory.getCategoryById(id).then(res => {
            try{
                console.log(res);
                const categoryData = res.data.data.attributes;
                setCatName(categoryData.category_name);
                setParentID(categoryData.parent_id);
                setSlug(categoryData.slug);
                setStatus(categoryData.status);
            }catch(e){
                console.log(e);
            }
        });
        
    },[]);
    

    useEffect(() => {
        apiCategory.getAll().then(res => {
            try{
              const categoryData = res.data.map((item) => {
                  return {
                      id: item.id,
                      name: item.attributes.category_name,
                      parent_id: item.attributes.parent_id,
                      slug: item.attributes.slug
                  };
              });        
              setCategories(categoryData);
          }
          catch(e){
              console.log(e);
          }      
        });
    },[]);
    
    const handleSubmit =  async (e) => {
        e.preventDefault();
        const category = {
            category_name: catName,
            parent_id: parseInt(parentID),
            slug: slug,
            status: status
        };

        console.log(category);

        try{
            const response = await apiCategory.editCategory(id, {data: category});
            //console.log(response);
            alert("Sửa thành công ");
            navigate('/admin/category');
        }catch(error){
            console.log(error);
        }
    };

    return (
        <div>
            <h1>Chỉnh sửa danh mục</h1>

            <form onSubmit={handleSubmit}>
                <div className="form-group" style={{marginBottom:'50px'}}>
                    <label htmlFor="category_name" style={{marginLeft:'-80%'}}>Tên danh mục</label>
                    <input type="text" className="form-control" name="category_name"
                    value={catName} onChange={(e) => setCatName(e.target.value)} />
                </div>

                <div className="form-group" style={{marginBottom:'50px'}}>
                    <label htmlFor="parent_id" style={{marginLeft:'-80%'}}>Danh mục cha</label>
                    <select className="form-control" name="parent_id" 
                    value={parentID} onChange={(e) => setParentID(e.target.value)}>
                        <option value="0">Không có danh mục cha</option>
                        {
                            categories.map((item, index) => {
                                return (
                                    <option key={index} value={item.id}>{item.name}</option>
                                );
                            })
                        }
                    </select>
                </div>


                <div className="form-group" style={{marginBottom:'50px'}}>
                    <label htmlFor="slug" style={{marginLeft:'-95%'}}>Slug</label>
                    <input type="text" className="form-control" name="slug"
                    value={slug} onChange={(e) => setSlug(e.target.value)}/>
                </div>

                <div className="form-group">
                <label htmlFor="slug" style={{marginLeft:'-90%'}}>Status</label>
                <select className="form-control" name="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="0">Không hiển thị</option>
                <option value="1">Hiển thị</option>
                </select>
                    <button type="submit" className="btn btn-success bg-success border-white text-white">Sửa</button>
                </div>
            </form>
        </div>
    );
}
export default CategoryEdit;