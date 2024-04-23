import React, {useState} from 'react';
import apiUser from '../../../api/apiUser';
import { useNavigate } from 'react-router-dom';

function Register() {

    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (!username || !email || !password || !phone || !address) {
                alert('Please fill in all fields');
                return;
            }
            const user = {username: username, address: address, email: email, password: password, phone: phone};
            const response = await apiUser.createUser(user);
            console.log(response); 
            console.log('Registration successful:', response);
            alert('Registration successful');
            navigate('/Login');
            
        }catch (error) {
            console.error('Registration Error:', error);
            alert('Registration failed. Please try again.');
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
                    <li className="breadcrumb-item active">Register</li>
                </ul>
            </div>
        </div>
        {/* Breadcrumb End */}
        
        {/* Login Start */}
        <div className="login">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">    
                        <div className="register-form">
                            <form className="row" onSubmit={handleSubmit}>
                                <div className="col-md-6">
                                    <label htmlFor='name'>Name</label>
                                    <input className="form-control" id='name' type="text" placeholder="Enter Name"
                                    value={username} onChange={(e)=> setUserName(e.target.value) } />
                                </div>
                                <div className="col-md-6">
                                    <label for='email'>E-mail</label>
                                    <input className="form-control" id='email' type="email" placeholder="E-mail" name='email'
                                    value={email} onChange={(e)=> setEmail(e.target.value) } />
                                </div>
                                <div className="col-md-6">
                                    <label for='phone'>Mobile No</label>
                                    <input className="form-control" id='phone' type="text" placeholder="Mobile No"
                                    value={phone} onChange={(e)=> setPhone(e.target.value) } />
                                </div>
                                <div className="col-md-6">
                                    <label for='pwd'className='form-label' >Password</label>
                                    <input type="password" className="form-control" id='pwd' name='password'  placeholder="Password"
                                    value={password} onChange={(e)=> setPassword(e.target.value) } />
                                </div>
                                <div className="col-md-6">
                                    <label for='address'>Address</label>
                                    <input className="form-control" id='address' type="text" placeholder="Address"
                                    value={address} onChange={(e)=> setAddress(e.target.value) } />
                                </div>
                                <div className="col-md-12">
                                    <button className="btn" type='submit'>Submit</button>
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
export default Register;