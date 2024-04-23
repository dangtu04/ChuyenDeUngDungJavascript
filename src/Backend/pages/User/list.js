import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiUser from "../../../api/apiUser";
function UserList() {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
        apiUser.getAll().then(res => {
        //   console.log(res); // kiểm tra
          try{
            const userData = res.map((item) => {
              return {
                id: item.id,
                name: item.username,
                email: item.email,
                phone: item.phone,
                address: item.address,
              }
            });         
            setUsers(userData);
          }catch(e){
            console.log(e);
          }
        });
      }, []);     
  
    return (
      <div>
        <h1>Danh sách người dùng</h1>
        <table className="table table-striped table-bordered border-4">
          <tr><th>ID</th><th>Tên người dùng</th><th>Email</th><th>Số điện thoại</th><th>Địa chỉ</th></tr>
          {
            users.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.address}</td>
                  {/* <td>
                    <button><Link className="btn btn-primary bg-primary text-white border-white">Xem chi tiết</ Link></button>                    
                  </td> */}
                </tr>
              );
            })              
          }
        </table>
      </div>
    );
  }

  
  export default UserList;