import Home from "../Frontend/pages/home/home";
import Wishlist from "../Frontend/pages/wishlist/wishlist";
import Contact from "../Frontend/pages/contact/contact";
import Cart from "../Frontend/pages/cart/cart";
import Account from "../Frontend/pages/account/account";
import Checkout from "../Frontend/pages/checkout/checkout";
import Register from "../Frontend/pages/register/register";

import ProductList from "../Frontend/pages/product/producList";
import notFound from "../Frontend/pages/notFound";
import Login from "../Frontend/pages/login/login";
import ProductDetail from "../Frontend/pages/product/productDetail";
import ProductsByCat from "../Frontend/pages/product/productsByCat";
import LogoutUser from "../Frontend/pages/logout/logout";


const FrontendRoute = [
    {'path' : '/', component : Home},
    {'path' : '/contact', component : Contact},
    {'path' : '/wishlist', component : Wishlist},
    {'path' : '/cart', component : Cart},
    {'path' : '/account', component : Account},
    {'path' : '/checkout', component : Checkout},
    {'path' : '/login', component : Login},
    {'path' : 'logout', component : LogoutUser},
    {'path' : '/register', component : Register},
    {'path' : '/products', component : ProductList},
    {'path' : '/product-detail/:slug', component : ProductDetail},
    {'path' : '/product-by-cat/:slug', component : ProductsByCat},
    {'path' : '*', component : notFound}    
];


export default FrontendRoute;
