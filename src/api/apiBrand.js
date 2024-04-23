import axiosInstance from "./axios";

const apiBrand = {
  // Lấy tất cả brands
  getAll: () => {
    return axiosInstance.get("/brands?populate=*").then((res) => res.data);
  },

  // Lấy thông tin về một brand cụ thể
  getBrandById: (id) => {
    return axiosInstance.get(`/brands/${id}`).then((res) => res.data);
  },

  // Thêm brand
  createBrand: (data) => {
    return axiosInstance.post('/brands', data)
  },

  // Sửa brand
  updateBrand: (id, data) => {
    return axiosInstance.put(`/brands/${id}`, data);
  },  

  // Xóa brand
  delBrandById: (id) => {
    return axiosInstance.delete(`/brands/${id}`);
  },
};

export default apiBrand;
