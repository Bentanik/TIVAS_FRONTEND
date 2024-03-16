export const getAvatarUser = (axiosInstance, param) => {
    return axiosInstance.get(`/api/v1/user/getavtuser/${param}`);
};

export const getUser = (axiosInstance, param) => {
    return axiosInstance.get(`/api/v1/user/getuser/${param}`);
};

export const editUser = (axiosInstance, form) => {
    return axiosInstance.put(`/api/v1/user/edituser`, form);
};

export const getBankingUser = (axiosInstance, param) => {
    return axiosInstance.get(`/api/v1/user/getbankinguser/${param}`);
};

export const getAllUsers = (axiosInstance, form) => {
    const limit = form.limit;
    const page = form.page;
    return axiosInstance.get(
        `/api/v1/user/getallusers?page=${page}&limit=${limit}`
    );
};

export const banUser = (axiosInstance, form) => {
    return axiosInstance.post("/api/v1/user/banuser", form);
};

export const unBanUser = (axiosInstance, form) => {
    return axiosInstance.post("/api/v1/user/unbanuser", form);
};

export const viewWishlist = (axiosInstance, form) => {
    const id = form.id;
    const limit = form.limit;
    const page = form.page;
    return axiosInstance.get(
        `/api/v1/user/viewwishlist?id=${id}&page=${page}&limit=${limit}`
    );
};

export const deleteWishlist = (axiosInstance, form) => {
    const userId = form.userId;
    const projectId = form.projectId;
    return axiosInstance.get(
        `/api/v1/user/deletewishlist?id=${userId}&projectID=${projectId}`
    );
};
