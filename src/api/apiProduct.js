import axiosInstance from "./axios";

const apiProduct = {
  //  lấy tất cả sản phẩm

  getAll: () => {
    return axiosInstance.get("/products?populate=*").then((res) => res.data);
  },

  // lấy 5 sản phẩm mới nhất
  getNewest: () => {
    return axiosInstance
      .get("/products?sort[0]=createdAt:desc&pagination[limit]=8&populate=*")
      .then((res) => res.data);
  },

  // lấy 6 sản phẩm khuyến mãi
  getPromotion: () => {
    return axiosInstance
      .get(
        "/products?filters[is_on_sale][eq]=true&pagination[limit]=4&populate=*"
      )
      .then((res) => res.data);
  },

  // chi tiết sản phẩm

  getDetailProductBySlug: (slug) => {
    return axiosInstance
      .get(`/products?filters[slug][$eq]=${slug}&populate=*`)
      .then((res) => res.data);
  },

  //lấy sản phẩm theo danh mục
  getProductByCatSlug: (slug) => {
    return axiosInstance
      .get(`/products?filters[category][slug][$eq]=${slug}&populate=*`)
      .then((res) => res.data);
  },
    
  //lấy sản phẩm phân trang
  getProductPagination: (page, limit) => {
    return axiosInstance.get(`/products?pagination[page]=${page}&pagination[pageSize]=${limit}&populate=*`)
     .then((res) => res.data);
  },

  // thêm sản phẩm
  createProduct: (data) => {
    return axiosInstance.post('/products',data)
  },

  // Sửa sản phẩm
  updateProduct: (id, data) => {
    return axiosInstance.put(`/products/${id}`, data);
  },

  // Xóa sản phẩm
  delProductById: (id) => {
    return axiosInstance.delete(`/products/${id}`);
  },


};

export default apiProduct;
