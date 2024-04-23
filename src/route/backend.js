import IndexAdmin from "../Backend";
import CategoryList from "../Backend/pages/Category/list";
import CategoryAdd from "../Backend/pages/Category/add";
import CategoryEdit from "../Backend/pages/Category/edit";
import ProductList from "../Backend/pages/Products/list";
import ProductAdd from "../Backend/pages/Products/add";
import ProductEdit from "../Backend/pages/Products/edit";
import ProductDetail from "../Backend/pages/Products/detail";
import UserList from "../Backend/pages/User/list";
import BrandList from "../Backend/pages/Brand/list";
import BrandAdd from "../Backend/pages/Brand/add";
import BrandEdit from "../Backend/pages/Brand/edit";


const BackendRoute = [
    {'path': '/admin', 'component': IndexAdmin},
    {'path': '/admin/category', 'component': CategoryList},
    {'path': '/admin/user', 'component': UserList},
    {'path': '/admin/brand', 'component': BrandList},
    {'path': '/admin/editbrand/:id', 'component': BrandEdit},
    {'path': '/admin/addbrand', 'component': BrandAdd},
    {'path': '/admin/addCategory', 'component': CategoryAdd},
    {'path': '/admin/editCategory/:id', 'component': CategoryEdit},
    {'path': '/admin/products/:page', 'component': ProductList},
    {'path': '/admin/addproduct', 'component': ProductAdd},
    {'path': '/admin/editproduct/:slug', 'component': ProductEdit},
    {'path': '/admin/detailproduct/:slug', 'component': ProductDetail},
    // {'path': '*', 'component': NotFound},
];

export  default BackendRoute;