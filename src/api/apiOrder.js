import axiosInstance from "./axios";

const apiOrder = {
// thêm order
createOrder: (data) => {
    return axiosInstance.post('/orders', data)
  },
  
}

export default apiOrder;