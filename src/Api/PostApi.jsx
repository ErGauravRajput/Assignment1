import axios from "axios";
const api=axios.create({
    baseURL:"https://reqres.in/api",
});
export const getMethod=(page)=>{
    return api.get(`/users?page=${page}`);
};

export const updateData=(id,data)=>{
  return api.put(`/users/${id}`, data);
};
export const deleteUser=(id)=>{
    return api.delete(`/users/${id}`);
};
export const fetchUser=(id)=>{
    return api.get(`/users/${id}`);
};
