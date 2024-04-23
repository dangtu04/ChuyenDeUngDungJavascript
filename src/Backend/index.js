import React, { useContext, useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import UserContext from "../Frontend/context/userContext";
import apiUser from "../api/apiUser";

function IndexAdmin() {
  const { user, setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //note
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);
  //

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      identifier: email,
      password: password,
    };
    try {
      const response = await apiUser.loginUser(data);
      console.log(response);
      var user = response.data.user;
      setUser(user);
     
      //note
       localStorage.setItem("user", JSON.stringify(user));
       //
    } catch (error) {
      console.error(error);
      alert("Tên đăng nhập hoặc mật khẩu không chính xác. Vui lòng thử lại.");
    }
  };

  const handleLogout = () => {
    setUser(null); 
    localStorage.removeItem("user");
  };
  
  return user ? (
    <div>
      <div className="p-5 bg-primary text-white text-center">
        <h1>Admin</h1>
      </div>

      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" to="/admin">Home</Link>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Management list</a>
            <ul class="dropdown-menu">
              <li><Link class="dropdown-item" to="/admin/category">Categories</Link></li>
              <li><Link class="dropdown-item" to="/admin/products/1">Products</Link></li>
              <li><Link class="dropdown-item" to="/admin/user">Users</Link></li>
              <li><Link class="dropdown-item" to="#">Orders</Link></li>
              <li><Link class="dropdown-item" to="/admin/brand">Supplier</Link></li>
            </ul>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>

          <li className="nav-item">
            <a className="nav-link disabled" href="#">Disabled</a>
          </li>
          
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={handleLogout}>Đăng xuất</a>
          </li>
        </ul>
      </div>
    </nav>

    <div className="container mt-5 text-center">
      <div className="row">
          <Outlet/>  
      </div>
    </div>

    <div className="mt-5 p-4 bg-dark text-white text-center">
      <p>Footer</p>
    </div>
</div>
  ) : (
    <div className="login">      
      <div className="container-fluid">
      <h2>Đăng nhập để truy cập trang quản trị</h2>
        <div className="row">
          <div className="col-lg-12">
            <div className="login-form">
              <form onSubmit={handleSubmit} className="row">
                <div className="col-md-6">
                  <label>E-mail</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="E-mail"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <label>Password</label>
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="col-md-12">
                  <button className="btn" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexAdmin;
