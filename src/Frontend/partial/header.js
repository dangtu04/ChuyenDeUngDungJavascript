import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserContext from "../context/userContext";

import logo from "../assets/img/logo.png";
import apiCategory from "../../api/apiCategory";

import { useSelector } from "react-redux";

function Header() {
  


  const { user } = useContext(UserContext);
  const getData = useSelector((state) => state.cart.carts);

  if (user) {
    var username = user.username;
  } else {
    var username = "";
  }

  const [subMenu, setSubMenu] = useState([]);
  useEffect(() => {
    apiCategory.getAll().then((res) => {
      try {
        const menuData = res.data.map((item) => {
          return {
            id: item.id,
            name: item.attributes.category_name,
            slug: item.attributes.slug,
            parent: item.attributes.parent_id,
          };
        });
        setSubMenu(menuData);
        console.log(menuData);
      } catch (e) {
        console.log(e);
      }
    });
  }, []);

  return (
    <div>
      {/* Top bar Start */}
      <div className="top-bar">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              <i className="fa fa-envelope"></i>
              support@email.com
            </div>
            <div className="col-sm-6">
              <i className="fa fa-phone-alt"></i>
              +012-345-6789
            </div>
          </div>
        </div>
      </div>
      {/* Top bar End */}

      {/* Nav Bar Start */}

      <div className="nav">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <a href="#" className="navbar-brand">
              MENU
            </a>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <div className="navbar-nav mr-auto">
                <a href="/" className="nav-item nav-link active">
                  Home
                </a>
                <Link to="/products" className="nav-item nav-link">
                  Products
                </Link>
                {/* <a href="/cart" className="nav-item nav-link">
                  Cart
                </a> */}
                <Link to="/checkout" className="nav-item nav-link">
                  Checkout
                </Link>
                <a href="/account" className="nav-item nav-link">
                  My Account
                </a>

                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Categories
                  </a>

                  <div className="dropdown-menu">
                    <ul className="dropdown-item">
                      {subMenu.map((submenu, index) => {
                        if (submenu.parent === 0) {
                          return (
                            <a key={index} style={{ listStyle: "none" }}>
                              <Link
                                to={`/product-by-cat/${submenu.slug}`}
                                className="dropdown-item"
                              >
                                {submenu.name}
                              </Link>
                              <ul>
                                {subMenu.map((sub, index) => {
                                  if (sub.parent === submenu.id) {
                                    return (
                                      <a
                                        key={index}
                                        style={{ listStyle: "none" }}
                                      >
                                        <Link
                                          to={`/product-by-cat/${sub.slug}`}
                                          className="dropdown-item"
                                        >
                                          {sub.name}
                                        </Link>
                                      </a>
                                    );
                                  }
                                  return null;
                                })}
                              </ul>
                            </a>
                          );
                        }
                        return null;
                      })}
                    </ul>
                  </div>
                </div>
                
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    More Pages
                  </a>
                  <div className="dropdown-menu">
                    <a href="/wishlist" className="dropdown-item">
                      Wishlist
                    </a>

                    <a href="/contact" className="dropdown-item">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>

              <div className="navbar-nav ml-auto">{username}</div>

              <div className="navbar-nav ml-auto">
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    User Account
                  </a>
                  <div className="dropdown-menu">
                    <a href="/register" className="dropdown-item">
                      Register
                    </a>
                    {user ? (
                      <a href="/logout" className="dropdown-item">
                        Logout
                      </a>
                    ) : (
                      <a href="/login" className="dropdown-item">
                        Login
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Nav Bar End */}

      {/* Bottom Bar Start */}
      <div className="bottom-bar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-3">
              <div className="logo">
                <a href="/">
                  <img src={logo} alt="Logo" />
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="search">
                <input type="text" placeholder="Search" />
                <button>
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
            <div className="col-md-3">
              <div className="user">
                <a href="/wishlist" className="btn wishlist">
                  <i className="fa fa-heart"></i>
                  <span>(0)</span>
                </a>
                <Link to="/cart" className="btn cart">
                  <i className="fa fa-shopping-cart"></i>
                  <span>({getData.length})</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Bar End */}
    </div>
  );
}
export default Header;
