import axiosInstance from "./axios";

const apiUser = {

    // create user
    createUser: (data) => {
        return axiosInstance.post('/auth/local/register',data);
    },

    loginUser: (data) => {
        return axiosInstance.post('/auth/local', data);
    },

    // lấy tất cả user
    getAll:() => {
        return axiosInstance.get('/users').then((res) => res.data);
    },
}

export default apiUser;