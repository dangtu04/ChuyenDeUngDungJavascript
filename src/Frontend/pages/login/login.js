import React, {useContext, useState} from "react";
import apiUser from "../../../api/apiUser";
import UserContext from "../../context/userContext";
import { useNavigate } from "react-router-dom";


function Login() {
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const {setUser} = useContext(UserContext);
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            identifier: email, 
            password: password
        };    
        try {
            const response = await apiUser.loginUser(data);
            console.log(response);
            var user = response.data.user;
            setUser(user);
            navigate("/");

        } catch (error) {
            console.error(error);
            alert("Tên đăng nhập hoặc mật khẩu không chính xác. Vui lòng thử lại.");
        }
    };
    

    return (
        <div>
         {/* Breadcrumb Start */}
        <div className="breadcrumb-wrap">
            <div className="container-fluid">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item"><a href="/products">Products</a></li>
                    <li className="breadcrumb-item active">Login</li>
                </ul>
            </div>
        </div>
        {/* Breadcrumb End */}
        
        {/* Login Start */}
        <div className="login">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="login-form">
                            <form onSubmit={handleSubmit} className="row">
                                <div className="col-md-6">
                                    <label>E-mail</label>
                                    <input className="form-control" type="text" placeholder="E-mail"
                                    onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                                <div className="col-md-6">
                                    <label>Password</label>
                                    <input className="form-control" type="password" placeholder="Password"
                                     onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                                <div className="col-md-12">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="newaccount"/>
                                        <label className="custom-control-label" for="newaccount">Keep me signed in</label>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <button className="btn" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Login End */}
        </div>
    );
}
export default Login;